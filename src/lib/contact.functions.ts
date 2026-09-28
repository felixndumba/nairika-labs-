import { createHash } from "crypto";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100, "Name must be 100 characters or fewer."),
  email: z.string().trim().email("Please enter a valid email address.").max(255, "Email must be 255 characters or fewer."),
  service: z.string().trim().max(100, "Service must be 100 characters or fewer.").optional(),
  message: z.string().trim().min(1, "Please tell us about your project.").max(2000, "Message must be 2,000 characters or fewer."),
  website: z.string().max(0).optional(),
});

export type ContactInput = z.input<typeof contactSchema>;

export const submitContactEnquiry = createServerFn({ method: "POST" })
  .inputValidator((input: ContactInput) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const normalizedEmail = data.email.toLowerCase();
    const requestFingerprint = createHash("sha256").update(normalizedEmail).digest("hex");
    const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000).toISOString();
    const { count, error: countError } = await supabaseAdmin
      .from("contact_enquiries")
      .select("id", { count: "exact", head: true })
      .eq("request_fingerprint", requestFingerprint)
      .gte("created_at", tenMinutesAgo);

    if (countError) throw new Error("Unable to process your enquiry right now.");
    if ((count ?? 0) >= 3) throw new Error("Too many enquiries. Please wait a few minutes and try again.");

    const { error } = await supabaseAdmin.from("contact_enquiries").insert({
      name: data.name,
      email: normalizedEmail,
      service: data.service || null,
      message: data.message,
      request_fingerprint: requestFingerprint,
    });

    if (error) throw new Error("Unable to save your enquiry right now.");
    return { success: true };
  });
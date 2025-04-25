"use client";

import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { MapPin, Mail, Phone, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// --- Schema de validación ---
const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});
type FormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // --- Env vars ---
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const REPLY_ID = process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID!;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
  const OWNER_EMAIL = process.env.NEXT_PUBLIC_OWNER_EMAIL!;

  // --- Inicializa EmailJS ---
  useEffect(() => {
    if (!PUBLIC_KEY) {
      console.error("Missing NEXT_PUBLIC_EMAILJS_PUBLIC_KEY");
    } else {
      emailjs.init(PUBLIC_KEY);
    }
  }, [PUBLIC_KEY]);

  // --- HookForm ---
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  // --- Envío ---
  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);

    try {
      const params = {
        to_email: OWNER_EMAIL,
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
      };

      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        params,
        { publicKey: PUBLIC_KEY }
      );

      await emailjs.send(
        SERVICE_ID,
        REPLY_ID,
        {
          to_name: data.name,
          to_email: data.email,
          reply_subject: data.subject,
          reply_message: data.message,
        },
        { publicKey: PUBLIC_KEY }
      );

      console.log("SUCCESS!", response.status, response.text);
      toast({ title: "Message Sent!", description: "I'll be in touch soon." });
      setIsSubmitted(true);
      form.reset();
    } catch (err: any) {
      console.error("FAILED...", err);
      toast({
        title: "Error sending message",
        description: err.text || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  // --- Contact info (lado izquierdo) ---
  const contactInfo = [
    { icon: <Mail className="h-5 w-5 text-primary" />, title: "Email", details: OWNER_EMAIL, link: `mailto:${OWNER_EMAIL}` },
    { icon: <Phone className="h-5 w-5 text-primary" />, title: "Phone", details: "+1 (123) 456-7890", link: "tel:+11234567890" },
    { icon: <MapPin className="h-5 w-5 text-primary" />, title: "Location", details: "San Francisco, CA", link: "https://maps.google.com/?q=San+Francisco,+CA" },
  ];

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container px-4">
        {/* header y columnas idénticos */}
        <div className="lg:col-span-2">
          {isSubmitted ? (
            <div className="bg-muted rounded-lg p-8 text-center">
              <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
              <p className="text-muted-foreground mb-6">
                Your message has been sent.
              </p>
              <Button onClick={() => setIsSubmitted(false)}>
                Send Another
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form
                ref={formRef}
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Campos name, email, subject, message */}
                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl><Input {...field} placeholder="Your name" /></FormControl>
                    <FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl><Input {...field} placeholder="Your email" /></FormControl>
                    <FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="subject" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl><Input {...field} placeholder="Subject" /></FormControl>
                    <FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea {...field} className="min-h-[120px]" placeholder="Your message" />
                    </FormControl>
                    <FormMessage /></FormItem>
                )} />
                <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
                  {isSubmitting ? "Sending..." : <><Send className="mr-2 h-4 w-4" /> Send Message</>}
                </Button>
              </form>
            </Form>
          )}
        </div>
      </div>
    </section>
  );
}

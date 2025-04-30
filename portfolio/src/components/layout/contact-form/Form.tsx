"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { handleContact } from "@/app/actions/contact";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      const result = await handleContact(formData);

      if (result.success) {
        setError("");
        toast(`Hi  ${result.name}!`, {
          description: `Thank you for contacting us. We will get back to you soon enough`,
          className: "bg-gradient-to-r from-background to-primary",
        });
        router.push("/");
      } else {
        toast("Oops!", {
          description:
            "An error occured during the process, please try again later.",
          className: "bg-gradient-to-r from-background to-destructive",
        });
        setError("Failed to submit the form");
      }
    });
  };

  return (
    <form action={handleSubmit}>
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block mb-3 font-medium sm:font-semibold sm:text-lg lg:text-xl uppercase"
        >
          Name
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          autoComplete="off"
          required
          className="w-full sm:h-12 lg:h-14 border-0 border-b-2"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-3 font-medium sm:font-semibold sm:text-lg lg:text-xl uppercase"
        >
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="off"
          required
          className="w-full sm:h-12 lg:h-14 border-0 border-b-2"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block mb-3 font-medium sm:font-semibold sm:text-lg lg:text-xl uppercase"
        >
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          required
          className="w-full lg:h-32 border-0 border-b-2"
          rows={1}
        ></Textarea>
      </div>
      {error && (
        <p className="text-destructive text-xs sm:text-base lg:text-xl font-semibold sm:font-bold mb-4">
          ** {error}
        </p>
      )}
      <Button
        size={"lg"}
        type="submit"
        disabled={isPending}
        className="bg-primary text-foreground uppercase tracking-wide rounded-3xl hover:bg-primary/90"
      >
        SEND
      </Button>
    </form>
  );
}

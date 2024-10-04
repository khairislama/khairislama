"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`Failed to contact. Status: ${response.status}`);
      }
      const data = await response.json();
      data.success
        ? toast({
            title: `Hi  ${formData.get("name")}!`,
            description: `Thank you for contacting us. We will get back to you soon enough`,
            className: "bg-gradient-to-r from-background-base-100 to-primary",
            action: (
              <Link href="/faq">
                <Button variant="link" className="gap-x-2 whitespace-nowrap">
                  <span>Open F.A.Q</span>
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            ),
          })
        : toast({
            title: "Oops!",
            description:
              "An error occured during the process, please try again later.",
            className:
              "bg-gradient-to-r from-background-base-100 to-destructive",
          });
    } catch (error) {
      setError("Failed to submit the form");
      toast({
        title: "Oops!",
        description:
          "An error occured during the process, please try again later.",
        className: "bg-gradient-to-r from-background-base-100 to-destructive",
      });
    } finally {
      setIsLoading(false);
      const form = formRef.current;
      if (form) {
        form.reset();
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block mb-3 font-medium sm:font-semibold sm:text-lg lg:text-xl uppercase"
        >
          Email
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
          htmlFor="name"
          className="block mb-3 font-medium sm:font-semibold sm:text-lg lg:text-xl uppercase"
        >
          subject
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
        disabled={isLoading}
        className="bg-secondary text-foreground uppercase tracking-wide rounded-3xl hover:bg-secondary/90"
      >
        SEND
      </Button>
    </form>
  );
}

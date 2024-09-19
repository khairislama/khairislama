"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <html>
      <body className="text-center">
        <div className="flex flex-col items-center justify-center w-full h-screen bg-background">
          <h1 className="font-semibold text-4xl">404</h1>
          <p className="font-semibold text-foreground/70 text-2xl">
            {" "}
            Please try returning home
          </p>
          <Link href="/">Return home</Link>
        </div>
      </body>
    </html>
  );
}

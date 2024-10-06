"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

interface TooltipContentProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
  followCursor?: boolean; // New prop to control cursor following
}

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(({ className, sideOffset = 4, followCursor = false, ...props }, ref) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    setPosition({
      x: event.clientX + window.scrollX, // Adjust for horizontal scroll
      y: event.clientY + window.scrollY, // Adjust for vertical scroll
    });
  };

  React.useEffect(() => {
    if (followCursor) {
      document.addEventListener("mousemove", handleMouseMove);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [followCursor]);

  return (
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...(followCursor
        ? {
            style: {
              position: "absolute",
              left: `${position.x - 1200}px`, // Adjust positioning relative to cursor
              top: `${position.y - 700}px`,
            },
          }
        : {
            // Only pass side and align when followCursor is false
            side: "top",
            align: "center",
          })}
      {...props}
    />
  );
});
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };

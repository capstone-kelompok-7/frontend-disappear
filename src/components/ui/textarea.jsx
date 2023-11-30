import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(
  ({ className, register, name, error, ...props }, ref) => {
    return (
      <div className="relative">
        <textarea
          className={cn(
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            error ? "border-red-500" : "",
            className
          )}
          ref={ref}
          {...(register ? register(name) : {})}
          {...props}
        />
        {error && (
          <p className="absolute text-xs text-left text-[#e50000] top-full left-0 mt-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };

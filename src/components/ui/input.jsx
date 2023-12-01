import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(
  ({ className, type, error, icon, register, name, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
            error ? "border-red-500" : "",
            className
          )}
          ref={ref}
          {...(register
            ? register(name, {
                valueAsNumber: type === "number" ? true : false,
              })
            : {})}
          {...props}
        />
        {error && (
          <p className="absolute text-xs text-left text-[#e50000] top-full left-0 mt-1">
            {error}
          </p>
        )}
        {icon && <div className="absolute right-3 top-3">{icon}</div>}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };

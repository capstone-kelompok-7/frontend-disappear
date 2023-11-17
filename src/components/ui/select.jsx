"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef(function (
  { className, children, ...props },
  ref
) {
  return React.createElement(
    SelectPrimitive.Trigger,
    {
      ref: ref,
      className: cn(
        "flex w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        className
      ),
      ...props,
    },
    children,
    React.createElement(
      SelectPrimitive.Icon,
      { asChild: true },
      React.createElement(ChevronDown, { className: "h-4 w-4 opacity-50" })
    )
  );
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef(function (
  { className, children, position = "popper", ...props },
  ref
) {
  return React.createElement(
    SelectPrimitive.Portal,
    null,
    React.createElement(
      SelectPrimitive.Content,
      {
        ref: ref,
        className: cn(
          "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        ),
        position: position,
        ...props,
      },
      React.createElement(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
        },
        children
      )
    )
  );
});
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectItem = React.forwardRef(function (
  { className, children, ...props },
  ref
) {
  return React.createElement(
    SelectPrimitive.Item,
    {
      ref: ref,
      className: cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      ),
      ...props,
    },
    React.createElement(
      "span",
      {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
      },
      React.createElement(
        SelectPrimitive.ItemIndicator,
        null,
        React.createElement(Check, { className: "h-4 w-4" })
      )
    ),
    React.createElement(SelectPrimitive.ItemText, null, children)
  );
});
SelectItem.displayName = SelectPrimitive.Item.displayName;

export { Select, SelectValue, SelectTrigger, SelectContent, SelectItem };

import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-gray-500 selection:bg-[#D4F600] selection:text-black h-11 w-full min-w-0 border-3 border-black bg-white px-4 py-2 text-base font-medium shadow-[4px_4px_0_#000] transition-all outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000]",
        "aria-invalid:border-[#FF3B30] aria-invalid:shadow-[4px_4px_0_#FF3B30]",
        className
      )}
      {...props}
    />
  )
}

export { Input }

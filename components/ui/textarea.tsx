import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "placeholder:text-gray-500 flex field-sizing-content min-h-[120px] w-full border-3 border-black bg-white px-4 py-3 text-base font-medium shadow-[4px_4px_0_#000] transition-all outline-none resize-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000]",
        "aria-invalid:border-[#FF3B30] aria-invalid:shadow-[4px_4px_0_#FF3B30]",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }

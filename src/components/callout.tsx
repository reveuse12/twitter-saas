import * as React from "react"
import { cn } from "@/lib/utils"

interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: string | React.ReactNode
}

export function Callout({
  children,
  className,
  icon,
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn(
        "my-6 flex items-start gap-3 rounded-lg border border-l-4 p-4 text-sm leading-relaxed",
        "border-border bg-muted/40 text-foreground",
        className
      )}
      {...props}
    >
      {icon && <span className="mt-0.5 text-base select-none">{icon}</span>}
      <div className="flex-1 [&>p]:leading-relaxed">{children}</div>
    </div>
  )
}

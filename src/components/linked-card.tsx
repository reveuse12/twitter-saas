import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface LinkedCardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

export function LinkedCard({
  href,
  className,
  children,
  ...props
}: LinkedCardProps) {
  const isExternal = href.startsWith("http")

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "group relative flex flex-col justify-between rounded-xl border border-border bg-card p-6 text-card-foreground shadow-xs transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-md dark:border-border/60 dark:hover:border-border",
        className
      )}
      {...props}
    >
      <div className="flex flex-col w-full">{children}</div>
    </Link>
  )
}

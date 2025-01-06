import { ReactNode, type ComponentProps } from "react"
import clsx from "clsx"

export default function Button({
  children,
  className,
  ...props
}: {
  children?: ReactNode
  className?: string
} & ComponentProps<"button">) {
  const classes = clsx(
    "flex w-full items-center justify-center gap-4 bg-neon-green p-5 text-dark-grey transition-colors hover:bg-green-hover",
    className
  )

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

import { ReactNode, type ComponentProps } from "react"

export default function Button({
  children,
  className,
  ...props
}: {
  children?: ReactNode
  className?: string
} & ComponentProps<"button">) {
  return (
    <button
      className={`flex w-full items-center justify-center gap-6 border-2 border-neon-green bg-neon-green p-5 text-dark-grey transition-all hover:bg-dark-grey hover:text-neon-green ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

import React, { ReactNode } from "react"

export default function Button({
  children,
  handleClick,
}: {
  children?: ReactNode
  handleClick?: React.MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <button
      className="flex w-full items-center justify-center gap-6 border-2 border-neon-green bg-neon-green p-5 text-dark-grey transition-all hover:bg-dark-grey hover:text-neon-green"
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

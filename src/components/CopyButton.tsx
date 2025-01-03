import React from "react"
import { FaRegCopy } from "react-icons/fa"

export default function CopyButton({
  handleClick,
}: {
  handleClick: React.MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <button className="text-neon-green" onClick={handleClick}>
      <FaRegCopy fontSize="1.5rem" />
    </button>
  )
}

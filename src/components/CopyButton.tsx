import React, { memo } from "react"
import { FaRegCopy } from "react-icons/fa"

function CopyButton({
  handleClick,
}: {
  handleClick?: React.MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <button className="text-neon-green" onClick={handleClick}>
      <FaRegCopy fontSize="1.5rem" />
    </button>
  )
}

export default memo(CopyButton)

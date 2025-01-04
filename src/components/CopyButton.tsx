import { useState } from "react"
import { FaRegCopy } from "react-icons/fa"
import { GiCheckMark } from "react-icons/gi"

function CopyButton({ password }: { password: string }) {
  const [isCopied, setIsCopied] = useState(false)

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(password)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 1500)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <button
      className="text-neon-green"
      onClick={handleClick}
      aria-label="copy to clipboard"
    >
      {isCopied ? (
        <GiCheckMark fontSize="1.5rem" />
      ) : (
        <FaRegCopy fontSize="1.5rem" />
      )}
    </button>
  )
}

export default CopyButton

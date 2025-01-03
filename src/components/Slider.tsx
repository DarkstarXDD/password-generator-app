import { useId, useState, type ComponentProps } from "react"

export default function Slider({
  defaultValue,
  ...props
}: {
  defaultValue: number
} & ComponentProps<"input">) {
  const id = useId()
  const sliderId = `${id}-slider`

  const [characterLength, setCharacterLength] = useState(defaultValue)

  return (
    <div className="grid gap-3">
      <label htmlFor={sliderId} className="flex items-center justify-between">
        Character Length
        <span aria-hidden className="text-preset-2 text-neon-green">
          {characterLength}
        </span>
      </label>
      <input
        className="h-2 cursor-pointer appearance-none bg-very-dark-grey"
        {...props}
        type="range"
        id={sliderId}
        value={characterLength}
        onChange={(event) => {
          setCharacterLength(Number(event.target.value))
        }}
      />
    </div>
  )
}

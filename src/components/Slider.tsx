import React, { useId, type ComponentProps } from "react"

type SliderProps = {
  passwordLength: number
  handleChange: React.Dispatch<React.SetStateAction<number>>
} & ComponentProps<"input">

export default function Slider({
  passwordLength,
  handleChange,
  ...props
}: SliderProps) {
  const id = useId()
  const sliderId = `${id}-slider`

  return (
    <div className="grid gap-3">
      <label htmlFor={sliderId} className="flex items-center justify-between">
        Character Length
        <span aria-hidden className="text-preset-2 text-neon-green">
          {passwordLength}
        </span>
      </label>

      <input
        className="h-2 cursor-pointer appearance-none bg-very-dark-grey"
        {...props}
        type="range"
        id={sliderId}
        value={passwordLength}
        onChange={(event) => handleChange(Number(event.target.value))}
      />
    </div>
  )
}

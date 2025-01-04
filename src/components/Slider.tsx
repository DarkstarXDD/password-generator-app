import { useState, useId, type ComponentProps } from "react"

type SliderProps = {
  defaultValue: number
} & Omit<ComponentProps<"input">, "type" | "id" | "value" | "onChange">

export default function Slider({ defaultValue, ...props }: SliderProps) {
  const id = useId()

  const [sliderValue, setSliderValue] = useState<number>(defaultValue)

  return (
    <div className="grid gap-3">
      <label htmlFor={id} className="flex items-center justify-between">
        Character Length
        <span aria-hidden className="text-preset-2 text-neon-green">
          {sliderValue}
        </span>
      </label>

      <input
        className="h-2 cursor-pointer appearance-none bg-very-dark-grey"
        {...props}
        type="range"
        id={id}
        value={sliderValue}
        onChange={(event) => setSliderValue(Number(event.target.value))}
      />
    </div>
  )
}

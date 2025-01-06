import { useId, type ComponentProps } from "react"

type SliderProps = { value: number } & Omit<
  ComponentProps<"input">,
  "type" | "id"
>

export default function Slider({ value, ...props }: SliderProps) {
  const id = useId()

  return (
    <div className="grid gap-3">
      <label htmlFor={id} className="flex items-center justify-between">
        Character Length
        <span aria-hidden className="text-preset-2 text-neon-green">
          {value}
        </span>
      </label>

      <input
        className="h-2 cursor-pointer appearance-none bg-very-dark-grey"
        {...props}
        value={value}
        type="range"
        id={id}
      />
    </div>
  )
}

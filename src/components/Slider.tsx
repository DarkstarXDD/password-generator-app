import { useId, type ComponentProps } from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import * as Label from "@radix-ui/react-label"

type SliderProps = {
  value: number
  onValueChange: (value: number[]) => void
} & Omit<ComponentProps<typeof SliderPrimitive.Root>, "value">

export default function Slider({
  value,
  onValueChange,
  ...props
}: SliderProps) {
  const id = useId()

  return (
    <div className="grid gap-3">
      <Label.Root htmlFor={id} className="flex items-center justify-between">
        Character Length
        <span aria-hidden className="text-preset-2 text-neon-green">
          {value}
        </span>
      </Label.Root>

      <SliderPrimitive.Root
        value={[value]}
        onValueChange={onValueChange}
        {...props}
        className="relative flex h-2 w-full items-center"
      >
        <SliderPrimitive.Track className="relative h-2 w-full bg-very-dark-grey">
          <SliderPrimitive.Range className="absolute h-full bg-neon-green" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          asChild
          id={id}
          aria-label="character length"
          className="block size-7 rounded-full bg-almost-white focus:bg-very-dark-grey focus:outline-none focus:ring-2 focus:ring-neon-green"
        >
          <button onClick={(event) => event.preventDefault()}></button>
        </SliderPrimitive.Thumb>
      </SliderPrimitive.Root>
    </div>
  )
}

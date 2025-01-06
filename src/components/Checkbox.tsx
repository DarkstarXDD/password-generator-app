import { useId, type ComponentProps } from "react"
import { GrFormCheckmark } from "react-icons/gr"

export default function Checkbox({
  label,
  ...props
}: { label: string } & Omit<ComponentProps<"input">, "type" | "id">) {
  const id = useId()

  return (
    <div className="flex items-center gap-5">
      <input
        {...props}
        type="checkbox"
        id={id}
        className="peer relative size-5 shrink-0 cursor-pointer appearance-none border-2 border-almost-white text-red checked:border-neon-green checked:bg-neon-green"
      />
      <GrFormCheckmark className="pointer-events-none absolute hidden size-5 text-very-dark-grey peer-checked:block" />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

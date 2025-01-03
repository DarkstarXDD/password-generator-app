import { useId, type ComponentProps } from "react"

export default function Checkbox({
  label,
  ...props
}: { label: string } & ComponentProps<"input">) {
  const id = useId()
  const checkboxId = `${id}-checkbox`

  return (
    <div className="flex items-center gap-5">
      <input
        type="checkbox"
        id={checkboxId}
        {...props}
        className="cursor-pointer"
      />
      <label htmlFor={checkboxId}>{label}</label>
    </div>
  )
}

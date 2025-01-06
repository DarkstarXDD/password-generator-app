import React, { useId, type ComponentProps } from "react"

function Checkbox({
  label,
  ...props
}: { label: string } & Omit<ComponentProps<"input">, "type" | "id">) {
  const id = useId()

  return (
    <div className="flex items-center gap-5">
      <input {...props} type="checkbox" id={id} className="cursor-pointer" />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default React.memo(Checkbox)

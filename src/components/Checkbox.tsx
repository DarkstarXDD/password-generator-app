import React, { useId, type ComponentProps } from "react"

function Checkbox({
  label,
  ...props
}: { label: string } & ComponentProps<"input">) {
  const id = useId()

  return (
    <div className="flex items-center gap-5">
      <input type="checkbox" id={id} {...props} className="cursor-pointer" />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default React.memo(Checkbox)

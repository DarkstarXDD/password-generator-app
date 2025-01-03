import React, { useId, type ComponentProps } from "react"

function Checkbox({
  label,
  ...props
}: { label: string } & ComponentProps<"input">) {
  const id = useId()
  const checkboxId = `${id}-checkbox`

  // console.log("Checkbox Re-rendered!")

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

export default React.memo(Checkbox)

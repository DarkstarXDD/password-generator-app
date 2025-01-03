import React, { useId, type ComponentProps } from "react"

function Checkbox({
  label,
  isChecked,
  handleChange,
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
        checked={isChecked}
        onChange={(event) => handleChange(event.target.checked)}
        className="cursor-pointer"
      />
      <label htmlFor={checkboxId}>{label}</label>
    </div>
  )
}

export default React.memo(Checkbox)

import React, { useState } from "react"
import Slider from "./Slider"
import Checkbox from "./Checkbox"
import Strength from "./Strength"
import Button from "./Button"
import { MdOutlineRefresh } from "react-icons/md"
import { type PasswordParams } from "../App"

function PasswordParamsForm({
  updatePassword,
  defaultPasswordParams,
}: {
  updatePassword: (passwordParams: PasswordParams) => void
  defaultPasswordParams: PasswordParams
}) {
  const [passwordParams, setPasswordParams] = useState<PasswordParams>(
    defaultPasswordParams
  )

  function onCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newParams: PasswordParams = {
      ...passwordParams,
      options: {
        ...passwordParams.options,
        [event.target.value]: event.target.checked,
      },
    }
    setPasswordParams(newParams)
    updatePassword(newParams)
  }

  function onSliderChange(value: number[]) {
    const newParams = {
      ...passwordParams,
      length: value[0],
    }
    setPasswordParams(newParams)
    updatePassword(newParams)
  }

  return (
    <form
      className="grid gap-8 bg-dark-grey p-4"
      onSubmit={(event) => {
        event.preventDefault()
        updatePassword(passwordParams)
      }}
    >
      <Slider
        name="length"
        min={8}
        max={32}
        value={passwordParams.length}
        onValueChange={onSliderChange}
      />

      <fieldset className="grid gap-4">
        <legend className="sr-only">Password Options</legend>
        <Checkbox
          label="Include Uppercase Letters"
          value="uppercase"
          name="options"
          checked={passwordParams.options.uppercase}
          onChange={onCheckboxChange}
        />
        <Checkbox
          label="Include Lowercase Letters"
          value="lowercase"
          name="options"
          checked={passwordParams.options.lowercase}
          onChange={onCheckboxChange}
        />
        <Checkbox
          label="Include Numbers"
          value="numbers"
          name="options"
          checked={passwordParams.options.numbers}
          onChange={onCheckboxChange}
        />
        <Checkbox
          label="Include Symbols"
          value="symbols"
          name="options"
          checked={passwordParams.options.symbols}
          onChange={onCheckboxChange}
        />
      </fieldset>

      <Strength value={passwordParams.length} />

      <Button>
        Regenerate
        <MdOutlineRefresh fontSize="1.5rem" />
      </Button>
    </form>
  )
}

export default PasswordParamsForm

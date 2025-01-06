import { useState } from "react"
import Slider from "./Slider"
import Checkbox from "./Checkbox"
import Strength from "./Strength"
import Button from "./Button"
import { MdOutlineRefresh } from "react-icons/md"

type PasswordParams = { length: number; options: string[] }

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

  function getPasswordParams(formData: FormData): PasswordParams {
    const length = Number(formData.get("password-length"))
    const options = formData.getAll("password-options") as string[]
    return { length, options }
  }

  function handleFormChange(formData: FormData) {
    const params = getPasswordParams(formData)
    setPasswordParams(params)
    updatePassword(params)
  }

  return (
    <form
      className="grid gap-8 bg-dark-grey p-4"
      onChange={(event) => handleFormChange(new FormData(event.currentTarget))}
      onSubmit={(event) => {
        event.preventDefault()
        handleFormChange(new FormData(event.currentTarget))
      }}
    >
      <Slider
        name="password-length"
        min={8}
        max={32}
        defaultValue={defaultPasswordParams.length}
      />

      <fieldset className="grid gap-4">
        <legend className="sr-only">Password Options</legend>
        <Checkbox
          label="Include Uppercase Letters"
          value="uppercase"
          name="password-options"
          defaultChecked={defaultPasswordParams.options.includes("uppercase")}
        />
        <Checkbox
          label="Include Lowercase Letters"
          value="lowercase"
          name="password-options"
          defaultChecked={defaultPasswordParams.options.includes("lowercase")}
        />
        <Checkbox
          label="Include Numbers"
          value="numbers"
          name="password-options"
          defaultChecked={defaultPasswordParams.options.includes("number")}
        />
        <Checkbox
          label="Include Symbols"
          value="symbols"
          name="password-options"
          defaultChecked={defaultPasswordParams.options.includes("symbols")}
        />
      </fieldset>

      <Strength value={passwordParams.options.length} />

      <Button>
        Regenerate
        <MdOutlineRefresh fontSize="1.5rem" />
      </Button>
    </form>
  )
}

export default PasswordParamsForm

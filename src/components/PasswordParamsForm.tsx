import Slider from "./Slider"
import Checkbox from "./Checkbox"
import Button from "./Button"
import { MdOutlineRefresh } from "react-icons/md"

type PasswordParams = { length: number; options: string[] }

function PasswordParamsForm({
  onChange,
  onSubmit,
}: {
  onChange: (passwordParams: PasswordParams) => void
  onSubmit: typeof onChange
}) {
  function getPasswordParams(formData: FormData): PasswordParams {
    const length = Number(formData.get("password-length"))
    const options = formData.getAll("password-options") as string[]
    return { length, options }
  }

  console.log("Form rendered!")

  return (
    <form
      className="grid gap-8 bg-dark-grey p-4"
      onChange={(event) =>
        onChange(getPasswordParams(new FormData(event.currentTarget)))
      }
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit(getPasswordParams(new FormData(event.currentTarget)))
      }}
    >
      <Slider name="password-length" min={8} max={32} defaultValue={12} />

      <fieldset className="grid gap-4">
        <legend className="sr-only">Password Options</legend>
        <Checkbox
          label="Include Uppercase Letters"
          value="uppercase"
          name="password-options"
          defaultChecked={true}
        />
        <Checkbox
          label="Include Lowercase Letters"
          value="lowercase"
          name="password-options"
          defaultChecked={true}
        />
        <Checkbox
          label="Include Numbers"
          value="numbers"
          name="password-options"
          defaultChecked={true}
        />
        <Checkbox
          label="Include Symbols"
          value="symbols"
          name="password-options"
        />
      </fieldset>

      <Button>
        Regenerate
        <MdOutlineRefresh fontSize="1.5rem" />
      </Button>
    </form>
  )
}

export default PasswordParamsForm

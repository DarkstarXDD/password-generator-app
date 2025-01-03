import React from "react"

import Slider from "./Slider"
import Checkbox from "./Checkbox"
import Button from "./Button"
import { LiaArrowRightSolid } from "react-icons/lia"

export default function Form() {
  function generatePassword(event: React.FormEvent<HTMLFormElement>) {
    const formData = new FormData(event.currentTarget)
    const passwordLength = formData.get("password-length")
    const passwordOptions = formData.getAll("password-options")

    console.log({
      passwordLength: passwordLength,
      passwordOptions: passwordOptions,
    })
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    generatePassword(event)
  }

  return (
    <form
      className="grid gap-8 bg-dark-grey p-4"
      onSubmit={handleSubmit}
      onChange={generatePassword}
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
        Generate
        <LiaArrowRightSolid strokeWidth={2} />
      </Button>
    </form>
  )
}

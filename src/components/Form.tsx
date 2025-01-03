import React, { useState } from "react"

import Slider from "./Slider"
import Checkbox from "./Checkbox"
import Button from "./Button"
import { LiaArrowRightSolid } from "react-icons/lia"

export default function Form() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  function handleFormChange(event: React.FormEvent<HTMLFormElement>) {
    // console.log(event.currentTarget)
    const formData = new FormData(event.currentTarget)
    const formDataObject = Object.fromEntries(formData)
    console.log(formDataObject)
  }

  // type PasswordOptions = {
  //   uppercase: boolean
  //   lowercase: boolean
  //   numbers: boolean
  //   symbols: boolean
  // }

  const [passwordLength, setPasswordLength] = useState<number>(8)

  return (
    <form
      className="grid gap-8 bg-dark-grey p-4"
      onSubmit={handleSubmit}
      onChange={handleFormChange}
    >
      <Slider
        name="password-length"
        min={8}
        max={32}
        passwordLength={passwordLength}
        handleChange={setPasswordLength}
      />

      <fieldset className="grid gap-4">
        <legend className="sr-only">Password Options</legend>
        <Checkbox
          label="Include Uppercase Letters"
          value="uppercase"
          name="password-options"
        />
        <Checkbox
          label="Include Lowercase Letters"
          value="lowercase"
          name="password-options"
        />
        <Checkbox
          label="Include Numbers"
          value="numbers"
          name="password-options"
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

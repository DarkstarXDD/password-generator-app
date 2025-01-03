import React, { useState } from "react"

import Slider from "./Slider"
import Checkbox from "./Checkbox"
import Button from "./Button"
import { LiaArrowRightSolid } from "react-icons/lia"

export default function Form() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  const [passwordLength, setPasswordLength] = useState<number>(8)

  return (
    <form className="grid gap-8 bg-dark-grey p-4" onSubmit={handleSubmit}>
      <Slider
        min={8}
        max={32}
        passwordLength={passwordLength}
        handleChange={setPasswordLength}
      />

      <fieldset className="grid gap-4">
        <legend className="sr-only">Password Options</legend>
        <Checkbox label="Include Uppercase Letters" value="uppercase" />
        <Checkbox label="Include Lowercase Letters" value="lowercase" />
        <Checkbox label="Include Numbers" value="numbers" />
        <Checkbox label="Include Symbols" value="symbols" />
      </fieldset>

      <Button>
        Generate
        <LiaArrowRightSolid strokeWidth={2} />
      </Button>
    </form>
  )
}

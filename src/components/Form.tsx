import React, { memo } from "react"

import Slider from "./Slider"
import Checkbox from "./Checkbox"
import Button from "./Button"
import { LiaArrowRightSolid } from "react-icons/lia"

function generatePassword(length: number, options: string[]): string {
  let password = ""

  const charGroups = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*_-+()[]{}<>;:,.?",
  }

  let availableChars = ""

  if (options.includes("uppercase")) {
    availableChars += charGroups.uppercase
  }

  if (options.includes("lowercase")) {
    availableChars += charGroups.lowercase
  }

  if (options.includes("numbers")) {
    availableChars += charGroups.numbers
  }

  if (options.includes("symbols")) {
    availableChars += charGroups.symbols
  }

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * availableChars.length)
    const randomChar = availableChars[randomNumber]
    password += randomChar
  }

  return password
}

function Form({
  setPassword,
}: {
  setPassword: React.Dispatch<React.SetStateAction<string>>
}) {
  function handleChange(event: React.FormEvent<HTMLFormElement>) {
    const formData = new FormData(event.currentTarget)
    const passwordLength = Number(formData.get("password-length"))
    const passwordOptions = formData.getAll("password-options") as string[]

    const newPassword = generatePassword(passwordLength, passwordOptions)
    setPassword(newPassword)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    handleChange(event)
  }

  console.log("Form rendered!")

  return (
    <form
      className="grid gap-8 bg-dark-grey p-4"
      onSubmit={handleSubmit}
      onChange={handleChange}
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

export default memo(Form)

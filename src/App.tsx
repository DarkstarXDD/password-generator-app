import { useState } from "react"

import CopyButton from "./components/CopyButton"
import PasswordParamsForm from "./components/PasswordParamsForm"

type PasswordParams = {
  length: number
  options: {
    uppercase: boolean
    lowercase: boolean
    numbers: boolean
    symbols: boolean
  }
}

const defaultPasswordParams: PasswordParams = {
  length: 12,
  options: {
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
  },
}

function generatePassword({ length, options }: PasswordParams): string {
  let password = ""

  const charGroups = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*_-+()[]{}<>;:,.?",
  }

  let availableChars = ""

  if (options.uppercase) {
    availableChars += charGroups.uppercase
  }

  if (options.lowercase) {
    availableChars += charGroups.lowercase
  }

  if (options.numbers) {
    availableChars += charGroups.numbers
  }

  if (options.symbols) {
    availableChars += charGroups.symbols
  }

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * availableChars.length)
    const randomChar = availableChars[randomNumber]
    password += randomChar
  }

  return password
}

export default function App() {
  const [password, setPassword] = useState(() =>
    generatePassword(defaultPasswordParams)
  )

  function updatePassword(passwordParams: PasswordParams) {
    setPassword(generatePassword(passwordParams))
  }

  return (
    <main>
      <div className="grid max-w-xl gap-4">
        <h1 className="text-3xl text-center text-grey">Password Generator</h1>

        <div className="flex items-center justify-between bg-dark-grey p-5">
          <p className="text-preset-2">{password}</p>
          <CopyButton valueToCopy={password} />
        </div>

        <PasswordParamsForm
          updatePassword={updatePassword}
          defaultPasswordParams={defaultPasswordParams}
        />
      </div>
    </main>
  )
}

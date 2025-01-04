import { useState } from "react"

import CopyButton from "./components/CopyButton"
import Form from "./components/Form"

export default function App() {
  const [password, setPassword] = useState("PTx1f5DaFX")

  return (
    <main>
      <div className="grid max-w-xl gap-4">
        <h1 className="text-3xl text-center text-grey">Password Generator</h1>

        <div className="flex items-center justify-between bg-dark-grey p-5">
          <p className="text-preset-2">{password}</p>
          <CopyButton password={password} />
        </div>

        <Form setPassword={setPassword} />
      </div>
    </main>
  )
}

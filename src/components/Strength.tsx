import { range } from "../utils/utils"

export default function Strength({ value }: { value: number }) {
  let strengthText = ""
  let strengthColor = ""

  switch (value) {
    case 1:
      strengthText = "Too Weak!"
      strengthColor = "bg-red border-red"
      break

    case 2:
      strengthText = "Weak"
      strengthColor = "bg-orange border-orange"
      break

    case 3:
      strengthText = "Medium"
      strengthColor = "bg-yellow border-yellow"
      break

    case 4:
      strengthText = "Strong"
      strengthColor = "bg-neon-green border-neon-green"
      break
  }

  return (
    <div className="flex items-center justify-between bg-almost-black p-4 uppercase">
      <p className="text-grey">Strength</p>
      <div className="flex items-center justify-center gap-4">
        <p>{strengthText}</p>
        <div className="flex items-center justify-center gap-2">
          {range(4).map((option) => (
            <div
              key={option}
              className={`h-7 w-3 border-2 ${option < value ? strengthColor : false}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

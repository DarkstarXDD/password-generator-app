import { range } from "../utils/utils"

export default function Strength({ value }: { value: number }) {
  let strengthText = ""
  let strengthColor = ""
  let strengthIndex: number

  if (value < 8) {
    strengthIndex = 1
    strengthText = "Too Weak!"
    strengthColor = "bg-red border-red"
  } else if (value < 12) {
    strengthIndex = 2
    strengthText = "Weak"
    strengthColor = "bg-orange border-orange"
  } else if (value < 16) {
    strengthIndex = 3
    strengthText = "Medium"
    strengthColor = "bg-yellow border-yellow"
  } else {
    strengthIndex = 4
    strengthText = "Strong"
    strengthColor = "bg-neon-green border-neon-green"
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
              className={`h-7 w-3 border-2 ${option < strengthIndex ? strengthColor : false}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

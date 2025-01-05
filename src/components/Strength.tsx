import { range } from "../utils/utils"

export default function Strength({ value }: { value: number }) {
  console.log(value)

  return (
    <div className="flex items-center justify-between bg-almost-black p-4 uppercase">
      <p className="text-grey">Strength</p>
      <div className="flex items-center justify-center gap-4">
        <p>Medium</p>
        <div className="flex items-center justify-center gap-2">
          {range(4).map((option) => (
            <div
              key={option}
              className={`h-7 w-3 border-2 border-almost-white ${option < value ? "border-yellow bg-yellow" : false}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

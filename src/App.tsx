import Button from "./components/Button"
import { LiaArrowRightSolid } from "react-icons/lia"

export default function App() {
  return (
    <main>
      <h1 className="text-3xl">Hello, World!</h1>
      <Button>
        Generate
        <LiaArrowRightSolid strokeWidth={2} />
      </Button>
    </main>
  )
}

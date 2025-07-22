import Canvas from "@/components/Canvas"
import Display from "@/components/Display"

export default function Home() {
  return (
    <>
      <div className="bg-gray-800 w-full py-5">
        <Display />
        <Canvas />
      </div>
    </>
  )
}

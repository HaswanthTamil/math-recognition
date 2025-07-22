"use client"
import React, { useRef, useEffect, useState } from "react"

interface CanvasProps {
  onExport?: (dataURL: string) => void
}

const Canvas = ({ onExport }: CanvasProps = {}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isDrawing = useRef(false)
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Set canvas width/height to match CSS size
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const context = canvas.getContext("2d")
    if (!context) return
    context.lineWidth = 10
    context.lineCap = "round"
    context.strokeStyle = "black"
    setCtx(context)
  }, [])

  const startDraw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    isDrawing.current = true
    if (!ctx || !canvasRef.current) return

    const rect = canvasRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    ctx.beginPath()
    ctx.moveTo(x, y)
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing.current || !ctx || !canvasRef.current) return

    const rect = canvasRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    ctx.lineTo(x, y)
    ctx.stroke()
  }

  const endDraw = () => {
    isDrawing.current = false
    if (!ctx) return
    ctx.closePath()
  }

  const clearCanvas = () => {
    if (!ctx) return
    ctx.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height)
  }

  const exportImage = () => {
    if (!canvasRef.current) return
    const dataURL = canvasRef.current.toDataURL()
    if (onExport) {
      onExport(dataURL)
    }
  }

  return (
    <div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-row gap-4">
          <button
            onClick={clearCanvas}
            className="px-4 py-1 bg-red-500 text-white rounded-md"
          >
            Clear
          </button>
          <button
            onClick={exportImage}
            className="px-4 py-1 bg-blue-500 text-white rounded-md"
          >
            Export
          </button>
        </div>
        <canvas
          ref={canvasRef}
          className="border border-gray-400 rounded-lg bg-white w-[95vw] h-[70vh]"
          onMouseDown={startDraw}
          onMouseMove={draw}
          onMouseUp={endDraw}
          onMouseLeave={endDraw}
        />
      </div>
    </div>
  )
}

export default Canvas

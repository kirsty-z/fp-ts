import { FC, useEffect, useRef } from "react";

export const OrthographicProjection: FC<{}> = ({ }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const gl = canvas.getContext("webgl2")
      if (!gl) return



    }
  }, [])


  return <div style={{ border: "1px solid pink" }}>
    <canvas ref={canvasRef} style={{ border: "1px solid red" }}></canvas>
  </div>
}
import { off } from "process";
import { FC, useEffect, useRef } from "react"
import { Triangles } from "./triangles";
import { Rectangle } from "./rectangle";
import { RandomTriangles } from "./random-triangles";
import { TwoRectangleTriangle } from "./tow-rectangle-triangle";
import { Translation } from "./translation";
import { Rotate } from "./rotate";
import { ImageModule } from "./image";
import { OneRectangle } from "./one-rectangle";

// 创建着色器
export function createShader(gl: WebGL2RenderingContext, type: any, source: string) {
  const shader = gl.createShader(type) as WebGLShader
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS)
  if (success) {
    return shader
  }
  gl.deleteShader(shader)
  return undefined
}
// 链接两个着色器成一个程序
export function createProgram(gl: WebGL2RenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader) {
  const program = gl.createProgram() as WebGLProgram
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)
  const success = gl.getProgramParameter(program, gl.LINK_STATUS)
  if (success) {
    return program
  }
  gl.deleteProgram(program)
  return undefined
}
export const Webgl2: FC<{}> = ({ }) => {
  return <div style={{ width: "100%", height: "100%" }}>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <ImageModule />
      <Rotate />
      <Translation />
      <Triangles />
      <Rectangle />
      <RandomTriangles />
      <TwoRectangleTriangle />
      <OneRectangle />
    </div>
  </div>
}
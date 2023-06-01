1. webgl api 是为这些函数对的运行来设置状态：设置一堆状态，然后调用 gl.drawArrays 和 gl.drawElements 在 gpu 上运行着色器
2. 着色器：
   (1.属性，缓冲区，和顶点数组
   (2.Uniforms(执行着色器程序前设置的全局变量)
   (3.纹理（能够在着色器程序中随机访问的数组数据）
   (4.Varyings（是一种从着色器到片段着色器传递数据的方法）
3. webgl 只关注两件事：剪辑空间坐标（点着色器提供剪辑空间坐标）和颜色
4. 点着色器得工作是生成裁剪空间坐标；gl_Position 来设置该点在剪裁空间得坐标
5. 裁剪器需要获得的数据来源有三种方式：
   (1.属性（从缓冲区取数据）

   <1. 创建缓冲区：const buf = gl.createBuffer()
   <2. 把数据放入到缓冲区: gl.bindBuffer(gl.ARRAY_BUFFER,buf);gl.bufferData(gl.ARRAY_BUFFER,someData,gl.STATIC_DRAW)
   <3. 在着色器程序中查找属性的位置：const positionLocation = gl.getAttribLocation(someShaderProgram,"a_position")
   <4. 告诉 webgl 如何将数据从这些缓冲区中取出并放入属性中：gl.enableVertexAttribArray(positionLocation)
   var numComponents = 3; // (x, y, z)
   var type = gl.FLOAT;
   var normalize = false; // 保持值不变
   var offset = 0; // 从缓冲区的开头开始
   var stride = 0; //移动到下一个顶点多少字节
   // 0 = 使用 type 和 numComponents 使用正确的步幅
   gl.vertexAttribPointer(positionLoc, numComponents, type, false, stride, offset);

   (2.Uniforms（在单次绘制过程中，它的值对所有顶点都是一样的）

   <通过 uniform 为着色器添加偏移量

   (3.纹理（来自 pixels/texels 的数据）

6. 片段着色器的任务是给栅格化的像素提供颜色；片段着色器获取的数据的方式：(1.Uniforms (2.纹理 (3.Varyings

7. 过程
   （1.定义顶点着色器（vertexShaderSource），片段着色器（fragmentShaderSource）
   （2.创建两个着色器（createShader）
   （3.链接两个着色器成一个程序（createProgram）并调用它（linkProgram）
   （4.查找顶点数据放在哪里(a_position) 查找颜色(a_color) 查找矩阵（u_matrix） 。。。
   （5.创建缓冲区（createBuffer）绑定缓冲区（bindBuffer）
   （6.创建属性状态集合（createVertexArray） 绑定属性状态集合（bindVertexArray）
   （7.启用属性（enableVertexAttribArray）
   （8.诉属性如何从 positionBuffer 中获取数据（size,type,normalize,stride,offset）(vertexAttribPointer)
   （9.从剪辑空间转换为像素(viewport)
   （10.清理 canvas（clearColor，clear）
   （11.使用程序（useProgram）
   （12.绑定属性/缓冲区集（bindVertexArray）
   （13.设置属性（primitiveType,offset,count）draw（drawArrays）

8. 属性
   (1. a_position:唯一输入属性；数据类型 vec2
   (2. u_resolution:uniforms 属性，为画布显示精度；通过 gl.uniformXXX 设置 uniform 的值
   (3. u_color:uniforms 属性，颜色值可以动态设置 uniform vec4 u_color;
9. 数据类型
   (1. float, vec2, vec3, vec4, mat2, mat3, mat4, int, ivec2, ivec3, ivec4, uint, uvec2, uvec3, uvec4.

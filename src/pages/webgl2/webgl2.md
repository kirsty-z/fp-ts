1. webgl api 是为这些函数对的运行来设置状态：设置一堆状态，然后调用 gl.drawArrays 和 gl.drawElements 在 gpu 上运行着色器
2. 着色器： 1.属性，缓冲区，和顶点数组 2.Uniforms(执行着色器程序前设置的全局变量) 3.纹理（能够在着色器程序中随机访问的数组数据） 4.Varyings（是一种从着色器到片段着色器传递数据的方法）
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

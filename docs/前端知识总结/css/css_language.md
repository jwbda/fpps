css属性和值总结

1. 盒模型:

- margin: 定义外边距。
- padding: 定义内边距。
- border: 定义边框。
- border-radius: 定义边框圆角。
- padding-top、padding-right、padding-bottom、padding-left: 定义元素内边距。
- margin-top、margin-right、margin-bottom、margin-left: 定义元素外边距。
- box-sizing: 定义盒模型的计算方式（content-box、border-box）。
- box-shadow: 定义元素阴影。

eg:

```css
margin: 10px 20px 15px 25px; /* 顺序为 上、右、下、左 各边外边距的数值 */
padding: 10px 20px; /* 上下内边距为 10px，左右内边距为 20px */
border: 1px solid #000; /* 1px 宽度、实线、黑色边框 */
border-radius: 5px; /* 圆角半径为 5px */
padding-top: 15px; /* 上内边距为 15px */
padding-right: 10%; /* 右内边距为 宽度的 10% */
padding-bottom: 20px; /* 下内边距为 20px */
padding-left: 10vw; /* 左内边距为 视窗宽度的 10% */
margin-top: 20px; /* 上外边距为 20px */
margin-right: 5%; /* 右外边距为 宽度的 5% */
margin-bottom: 15px; /* 下外边距为 15px */
margin-left: 10vw; /* 左外边距为 视窗宽度的 10% */
box-sizing: border-box; /* 使用边框盒模型计算方式 */
box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.5); /* 阴影效果，水平和垂直偏移、模糊半径、阴影大小和颜色 */
```

2. Display 盒模型:

- display: 定义元素生成的框类型。 可选值: block、inline、inline-block、flex、grid、none 等(显示:
- visibility: 定义元素是否可见。 可选值: visible、hidden、collapse。)。

3. 文本:

- font-variant: 定义字体的变体（normal、small-caps, inherit）。
- text-indent: 定义首行文本缩进距离。
- text-shadow: 定义文本阴影效果。

4. 文本换行:

- word-wrap: 定义文本的换行方式（normal、break-word）。
- white-space: 定义文本空白的处理方式（normal、nowrap、pre、pre-wrap、pre-line）。

5. 文本描边:

- text-stroke: 为文本描边效果定义宽度和颜色。
- text-fill-color: 定义文本填充颜色。

6. 文本样式:

- color: 定义文本颜色,可选值: 颜色值（如十六进制、RGB、RGBA、HSL、颜色名等）。
- font-family: 定义字体系列,。
- font-size: 定义字体大小, font-size: 定义字体大小。 可选值: 绝对大小（像素、厘米等）、相对大小（em、rem等）。
- font-weight: 定义字体粗细, （normal、bold、bolder、lighter、具体数值）。
- text-align: 定义文本对齐方式, 可选值: left、center、right、justify。。
- text-decoration: 定义文本装饰（下划线、删除线等）(（none、underline、overline、line-through、blink）)。
- text-transform: 定义文本转换方式（大写、小写、首字母大写等）可选值: none、uppercase、lowercase、capitalize、full-width。

7. 文本排版:

- line-height: 定义行高。
- letter-spacing: 定义字符间距。
- word-spacing: 定义单词间距。
- text-overflow: 定义文本溢出显示方式, 可选值: clip、ellipsis、string。
- font-style: 定义字体风格（normal、italic、oblique）。

8. 背景样式:

- background-color: 定义背景颜色。
- background-image: 定义背景图片。

9. 背景:

- background-repeat: 定义背景图片的重复方式（repeat、repeat-x、repeat-y、no-repeat）。
- background-position: 定义背景图片的位置（left top、center center、right bottom）。
- background-size: 定义背景图片的尺寸（cover、contain、auto、具体值）。

10. 边框:

- border: 定义边框。
- border-color: 定义边框颜色。 可选值: 颜色值。
- border-width: 定义边框宽度。 可选值: 像素值、百分比。
- border-style: 定义边框样式（可选值: none、hidden、dotted、dashed、solid、double、groove、ridge、inset、outset）。

11. 浮动和定位(布局)：

- float：定义元素的浮动方式（left、right、none）。
- position：定义定位方式（relative、absolute、fixed）。
- top、right、bottom、left：定义元素的定位偏移量。
- display：定义元素的显示方式。 可选值: block、inline、inline-block、flex、grid。
- position：定义元素的定位方式, 可选值： static、relative、absolute、fixed。。
- top、right、bottom、left：定义元素的定位偏移量(可选值: auto、长度值。)。
- clear：定义元素相对浮动元素的位置, 可选值： none、left、right、both。。

12. 过渡和动画：

- transition-property：定义要过渡的属性。
- transition-duration：定义过渡的持续时间。
- animation-name：定义动画名称。
- animation-timing-function：定义动画时间函数（ease、linear、ease-in、ease-out、ease-in-out）。
- animation-iteration-count：定义动画播放次数。
- animation-direction：定义动画播放方向（normal、reverse、alternate、alternate-reverse）。

13. 形状：

- shape-outside：定义元素的形状，用于文字环绕或布局。 可选值： none、、, margin-box。

14. 动画和过渡:
    transition: 定义元素过渡效果的属性。
    animation: 定义元素动画效果。
    keyframes: 定义动画的关键帧。

15. 背景:

- background-size: 定义背景图片尺寸。 可选值: auto、cover、contain。
- background-repeat: 定义背景图片的重复方式。 可选值: repeat、repeat-x、repeat-y、no-repeat。
- background-attachment: 定义背景图片是否固定或随内容滚动。 可选值: scroll、fixed。
- background-position: 定义背景图片的位置。 可选值: 关键词（left、center、right、top、bottom）或百分比。

  16.样式:

- list-style-type: 定义列表项标记的类型。 可选值: disc、circle、square、decimal、lower-roman、upper-alpha等。

17. 大小:

- width: 定义元素的宽度。 可选值: auto、长度值、百分比。
- height: 定义元素的高度。 可选值: auto、长度值、百分比。
- max-width: 定义元素的最大宽度。
- max-height: 定义元素的最大高度。
- min-width: 定义元素的最小宽度。
- min-height: 定义元素的最小高度。

18. 间距:

- margin: 定义元素外边距。 可选值: auto、长度值、百分比。
- padding: 定义元素内边距。 可选值: 长度值、百分比。

19. 溢出:

- overflow: 定义元素内容溢出时的处理方式。 可选值: visible、hidden、scroll、auto。
- overflow-x: 定义元素在水平方向上溢出内容的处理方式（visible、hidden、scroll、auto）。
- overflow-y: 定义元素在垂直方向上溢出内容的处理方式。

20. 轮廓:

- outline-style: 定义轮廓样式。 可选值: none、dotted、dashed、solid、double。

21. 其他:

- cursor: 定义鼠标指针样式。 可选值: auto、pointer、crosshair、text、wait。

22. 选择器:

- nth-child: 选择父元素下指定位置的子元素。 可选值: 树一般公式 an + b，其中 a 和 b 是整数，n 表示元素的位置。

23. 视口单位:

- vw: 视口宽度的百分比。
- vh: 视口高度的百分比。
- vmin: 视口宽度和高度中较小值的百分比。
- vmax: 视口宽度和高度中较大值的百分比。

24. 定位:

- z-index: 定义元素的堆叠顺序。

25. 列表:

- list-style-position: 定义列表标记的位置（inside、outside）。

26. 渐变:

- linear-gradient: 定义线性渐变。
- radial-gradient: 定义径向渐变。

27. 定位:

- top: 定义元素距离顶部的距离。
- bottom: 定义元素距离底部的距离。
- left: 定义元素距离左侧的距离。
- right: 定义元素距离右侧的距离。

28. 空白:

- white-space: 定义元素内的空白处理方式（normal、nowrap、pre、pre-line、pre-wrap）。

29. 轮廓:

- outline: 定义轮廓线条（outline-style outline-color outline-width）。
- outline-offset: 定义轮廓线条与边框之间的距离。

30. 过渡:

- transition-property: 定义要过渡的属性(all, color, background, opacity, none)。
- transition-duration: 定义过渡的持续时间。
- transition-timing-function: 定义过渡的时间函数。
- transition-delay: 定义过渡的延迟时间。

```css
transition-property: all; /* 过渡所有属性 */
transition-property: color, background; /* 过渡颜色和背景属性 */
transition-property: opacity; /* 过渡透明度属性 */
/* transition-property: none; 不过渡任何属性 */

transition-duration: 0.5s; /* 过渡持续时间为 0.5 秒 */
transition-duration: 2s; /* 过渡持续时间为 2 秒 */
transition-duration: 500ms; /* 过渡持续时间为 500 毫秒 */
/* transition-duration: 0; 过渡持续时间为 0，即无过渡效果 */

transition-timing-function: ease-in-out; /* 缓入缓出时间函数 */
transition-timing-function: linear; /* 线性时间函数 */
transition-timing-function: ease-in; /* 缓入时间函数 */
/* transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1); 自定义贝塞尔曲线时间函数 */

transition-delay: 0s; /* 过渡延迟时间为 0 秒 */
transition-delay: 1s; /* 过渡延迟时间为 1 秒 */
transition-delay: 500ms; /* 过渡延迟时间为 500 毫秒 */
```

31. 透明度:

- opacity: 定义元素的透明度，取值范围为 0（完全透明）到 1（完全不透明）。

32. 伪类:

- `:hover`: 定义鼠标悬停时的状态。
- `:active`: 定义鼠标点击元素时的状态。
- `:focus`: 定义元素获取焦点时的状态。

33. 引用:

- quotes: 定义引用标记的样式（none、inherit、具体值）。
- content: 定义伪元素的内容。

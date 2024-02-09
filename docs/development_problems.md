## 开发遇到的问题

### 访问静态页面:

```txt
路径:
+-- src
¦   +-- api
¦   ¦   +-- todos.js
¦   +-- app
¦   +-- pages
¦   ¦   +-- about
¦   ¦   +-- index.tsx // 每个文件夹的首页必须是 index命名的文件
```

## 练手项目

### todo

参考: [Creating a To-do app with Next JS](https://medium.com/@amayawickramasinghe2001/creating-a-to-do-app-with-next-js-cdb58f0b12d1)

### 问题1:

## next 问题:

1.  pnpm run dev

> to-do-app@0.1.0 dev D:\code\javaScriptProjects\to-do
> next dev

warn - Port 3000 is in use, trying 3001 instead.
warn - Port 3001 is in use, trying 3002 instead.
ready - started server on 0.0.0.0:3002, url: http://localhost:3002
warn - Detected next.config.mjs, no exported configuration found. https://nextjs.org/docs/messages/empty-configuration
event - compiled client and server successfully in 1157 ms (160 modules) (client 和server的代码写在哪里?)
wait - compiling /\_error (client and server)...
event - compiled client and server successfully in 163 ms (161 modules)

2. 找不到路径404(避免app和pages文件夹冲突的方法)
   答: 方法1: app和pages使用不同名文件夹/路由
   方法2: 使用自定义路由, 具体方法: 参阅 Next.js 官方文档中的“客户端路由”部分

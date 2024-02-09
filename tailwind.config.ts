import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    // content 属性告诉 PostCSS 搜索哪些文件来查找 CSS 字段。
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // theme 属性用于扩展或覆盖默认元素的样式。
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('daisyui')], // plugins 属性告诉 Daisy UI 将其插件应用到项目中的所有 CSS 中。
};
export default config;

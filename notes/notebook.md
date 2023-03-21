1. vite安装`npm init vite@latest`
2. 另一种专门为vue的安装的东西比较全 `npm init vue@latest`选择的东西比较多

3. vscode插件准备 写vue3代码并且会有智能提示
TypeScript Vue Plugin (Volar)
Vue Language Features (Volar)
禁用vetur 不然会冲突



4. 
- 安装elementUI `  npm install element-plus --save `
- 在main.ts里面引入
```
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
```
5. windows可以通过nvm来进行node管理
nvm --help  呼出所有的帮助命令
nvm list  查看版本号
nvm install [版本号]


vue3.有更好的treeshaking
vue3.数据劫持用的是proxy
vue3.采用的是compositionAPI
vue3.多v-model的形式


性能优化 图片比较小可以打包成base64
所有v-开头的都是vue的内置指令
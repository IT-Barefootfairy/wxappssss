import { createApp } from 'vue'
import { createUI } from 'taro-ui-vue3'
import { 
  AtButton, 
  AtInput, 
  AtTabs ,
  AtCheckbox 
} from 'taro-ui-vue3/lib'

// 引用上述组件对应的样式文件
import "taro-ui-vue3/dist/style/components/checkbox.scss";
import 'taro-ui-vue3/dist/style/components/button.scss'
import 'taro-ui-vue3/dist/style/components/input.scss'
import 'taro-ui-vue3/dist/style/components/tabs.scss'
import './app.scss'

function changeFontSize() {
    document.documentElement.style.fontSize = (document.body.offsetWidth / 375) * 100 + 'px'
    console.log(document.documentElement.style.fontSize)
}
window.addEventListener('load', () => {
    changeFontSize();
    window.addEventListener('resize', changeFontSize)
})

const App = createApp({
    onShow(options) {
    },
    // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

// 引用部分组件
const tuv3 = createUI({
    AtButton, 
    AtInput, 
    AtTabs,
    // AtCheckbox
  })
  App.use(tuv3)

export default App

import { createApp } from 'vue'
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
    onShow(options) {},
    // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

export default App

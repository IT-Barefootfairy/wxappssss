


<template>
    <div class="map_icon_container">
        <svg 
        t="1634611871800" 
        viewBox="0 0 1024 1024" 
        p-id="2208" :width="width + 'rem'" :height="height + 'rem'">
        <path d="M528 32C325.056 32 160 196.8 160 399.36c0 75.2 22.656 147.584 65.024 208.48 2.112 3.648 4.256 7.168 6.784 10.592l268.608 353.472c7.296 8.096 17.088 12.576 27.584 12.576 10.368 0 20.224-4.512 28.768-14.08l267.36-352c2.624-3.52 4.896-7.36 6.112-9.6A364.864 364.864 0 0 0 896 399.36C896 196.8 730.912 32 528 32z m0 498.72a131.52 131.52 0 0 1-131.456-131.232 131.488 131.488 0 0 1 262.88 0 131.52 131.52 0 0 1-131.424 131.2z" p-id="2209" :fill="color"></path>
        </svg>
        <slot></slot>
    </div>

</template>
<script setup>
import { ref,defineProps } from 'vue'

let props = defineProps({
  width: {
    type:String,
    default:0.32
  },
  height:{
    type:String,
    default:0.32
  },
  color:{
    type:String,
    default:'#999'
  }
})


const count = ref(0)
</script>
<style scoped>
.map_icon_container{
  width:0.83rem;
  height:0.32rem;
  font-size:0.14rem;
  color:#666;
  font-family: "Microsoft YaHei";
  margin-left:0.1rem;
  display:flex;
  align-items: center;
}
</style>

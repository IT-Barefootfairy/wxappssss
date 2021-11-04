<template>
    <view class="photos">
        <view class="photos_item" v-for="(item,index) in getPhotosList"
        :key="index"
        >
            <image :src="item.prelogo" class="photos_img" />
        </view>
    </view>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import {getPhotos} from '../../utils/api'
import './photos.scss'
export default {
    setup(){
        let dataIndex=reactive({
            getPhotosList:[],
        })
        const refsData=toRefs(dataIndex)
        onMounted(()=>{
            getPhotos().then((res)=>{
                // console.log(res.data,'wwwwwwwwwwwwwwwwwww');
                dataIndex.getPhotosList=res.data;
            })
        })
        return{
            ...refsData,
        }
    }
}
</script>

<style>

</style>
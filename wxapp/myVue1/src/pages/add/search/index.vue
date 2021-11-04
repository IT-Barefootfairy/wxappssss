<template>
  <view>
      <AtSearchBar
    :value="value1"
    @change="onChange.bind(this, 'value1')"
    @action-click="onActionClick"
  />
  </view>
</template>

<script>
export default {
      data() {
    return {
      value1: '',
    }
  },
  methods: {
    onChange(stateName, value) {
      this[stateName] = value
    },
    onActionClick() {
      console.log('点击了搜索按钮')
    }
  }

}
</script>

<style>

</style>
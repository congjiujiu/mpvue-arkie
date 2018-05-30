<template>
  <div class="number">
    <p>
      number 组件
    </p>
    <card v-for="(item, index) in numList" :key="index" :num="item.data.num"/>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="less" scoped>
.number {
  border: 1px solid red;
}
</style>

<template>
  <div class="page-index">
    <div class="container">
      <scenario-list :list="indexScenarios" :configuration="configuration"/>
    </div>
  </div>
</template>

<!--必须指定为ts-->
<script lang="ts" src="./index.ts"></script>

<style>
.container {
  display:flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  padding: 18rpx 18rpx 78rpx;
  font-family: PingFangSC;
  background-color: #ffffff;
}
</style>

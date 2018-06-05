<template>
  <div class="page-index">
    <div class="arkie-logo-banner"></div>
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
  box-sizing: border-box;
}

.arkie-logo-banner {
  width: 100%;
  height: 320rpx;
  background-image: url(https://arkie-public.oss-cn-hangzhou.aliyuncs.com/app/scenarioAssets/v2/banner-brand.png);
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: 0 0;
  margin-bottom: 18rpx;
}
</style>

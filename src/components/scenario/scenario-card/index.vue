<template>
  <div class="scenario-card" :class="[ commonConfig.size === 'big' ? 'size-big' : 'size-small' ]"
    :style="cardBackground">
    <view class="img-wrap">
      <image class="img" mode="aspectFit" :src="commonConfig.icon" />
    </view>
    <div v-if="scenario.name" class="text-wrap" :style="{color: commonConfig.fontColor}">
      <text class="txt">{{ scenario.name }}</text>
      <text class="txt" v-if="scenario.status === 'testing'">*</text>
    </div>

    <div class="next-icon">
      <image
        class="img"
        mode="aspectFit"
        :src="scenario.commonConfig.nextIcon || nextIcon.white"
      />
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="less" scoped>
.scenario-card {
  // flex: 0 0 348rpx;
  width: 348rpx;
  height: 240rpx;
  background-color: rgb(255, 255, 255);
  margin-bottom: 18rpx;
  background-size: 100%;
  background-position: 0 0;
  box-sizing: border-box;
  padding: 16rpx 24rpx;

  position: relative;

  &.size-big {
    height: 498rpx;
  }

  &.work {
    position: relative;
  }

  &.size-small {
    background-size: contain;
    background-position: bottom;
    height: 240rpx;
  }

  .img-wrap {
    width: 100%;
    height: 80rpx;

    .img {
      width: 80rpx;
      height: 80rpx;
    }
  }

  .avatar-image {
    height: 72rpx;
    width: 72rpx;
    border-radius: 50%;
  }

  .text-wrap {
    margin-top:4rpx;
    height:36rpx;
    line-height:1;
    .txt {
      font-size: 36rpx;
      font-weight: 400;
    }
  }

  &.bizcard {
    background-color: #2f8ba6;
  }

  .text-wrap.bizcard {
    color: #fff;
  }

  .next-icon {
    display:flex;
    align-items: center;
    width: 36rpx;
    height: 80rpx;
    position: absolute;
    top: 16rpx;
    right: 24rpx;
    .img {
      width: 36rpx;
      height: 36rpx;
    }
  }
}
</style>

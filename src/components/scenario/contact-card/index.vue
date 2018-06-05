<template>
  <button
    plain="true"
    class="card-wrap size-small"
    open-type="contact">
    <div class="top-wrap">
      <image class="img" mode="aspectFit" src="https://arkie-public.oss-cn-hangzhou.aliyuncs.com/wxapp/images/me/icon-contactUs.svg" />
      <text class="txt">联系客服</text>
    </div>
    <div class="body-wrap">
      <text>商务合作 business@arkie.cn</text>
      <text>推广合作 marketing@arkie.cn</text>
      <text class="highlight">更多功能尽在 www.arkie.cn</text>
    </div>
  </button>
</template>

<script lang="ts" src="./index.ts">
</script>

<style lang="less" scoped>
@import '../../../utils/icons/icons.less';

.card-wrap {
  // flex: 0 0 348rpx;
  width: 348rpx;
  height: 240rpx;
  background-color: transparent;
  margin-bottom: 18rpx;
  background-image: @IMAGE_CONTACT_CARD_BG;
  background-size: 100%;
  background-position: 0 0;
  box-sizing: border-box;
  padding: 16rpx 24rpx;
  border: 0;
  border-radius: 0;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

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

  .avatar-image {
    height: 72rpx;
    width: 72rpx;
    border-radius: 50%;
  }

  .top-wrap {
    margin-top: 4rpx;
    height: 80rpx;
    line-height: 1;
    display: flex;
    align-items: center;

    .img {
      width: 32rpx;
      height: 32rpx;
    }

    .txt {
      font-size: 32rpx;
      font-weight: 600;
      color: #3c3c3c;
      margin-left: 24rpx;
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

  .body-wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    text {
      font-size: 20rpx;
      color: #c2c4bf;
      line-height: 1.4;
    }

    .highlight {
      color: #3c3c3c;
    }
  }
}
</style>

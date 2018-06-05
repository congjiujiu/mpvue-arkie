<template>
  <div class="scenario-list">
    <block v-for="(scenarioCategory, scenarioCategoryIndex) in scenarios" :key="scenarioCategory.categoryId">
      <div class="scenario-wrap-title">{{ scenarioCategory.name }}</div>
      <div class="scenario-wrap">
        <div class="scenario-list-part">
          <block v-for="scenario in scenarioCategory.listA" :key="scenario.id">
            <div v-if="scenario.isMywork" :scenario="scenario" >my work card</div>
            <contact-card v-else-if="scenario.isContactCard" />
            <scenario-card v-else :scenario="scenario" />
          </block>
        </div>
        <div class="scenario-list-part">
          <block v-for="scenario in scenarioCategory.listB" :key="scenario.id">
            <div v-if="scenario.isMywork" :scenario="scenario" >my work card</div>
            <contact-card v-else-if="scenario.isContactCard" />
            <scenario-card v-else :scenario="scenario" />
          </block>
        </div>
      </div>
    </block>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="less" scoped>
.scenario-list {
  width: 100%;
  box-sizing: border-box;
}
.scenario-wrap-title {
  font-size: 28rpx;
  font-weight: 500;
  color: #3c3c3c;
  margin: 52rpx 0 18rpx;
}

.scenario-wrap {
  box-sizing: border-box;
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
}
</style>
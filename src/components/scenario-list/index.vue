<template>
  <div class="scenario-list">
    <div v-for="(scenarioCategory, scenarioCategoryIndex) in scenarios" :key="scenarioCategory.categoryId">
      <div class="scenario-wrap-title">{{ scenarioCategory.name }}</div>
      <div class="scenario-wrap">
        <div class="scenario-list-part">
          <div v-for="scenario in scenarioCategory.listA" :key="scenario.id">
            <div v-if="scenario.isMywork" :scenario="scenario" >my work card</div>
            <div v-else-if="scenario.isContactCard">a contact card</div>
            <div v-else :scenario="scenario">simple scenario card</div>
          </div>
        </div>
        <div class="scenario-list-part">
          <div v-for="scenario in scenarioCategory.listB" :key="scenario.id">
            <div v-if="scenario.isMywork" :scenario="scenario" >my work card</div>
            <div v-else-if="scenario.isContactCard">a contact card</div>
            <div v-else :scenario="scenario">simple scenario card</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="less" scoped>
.scenario-list {
}
</style>
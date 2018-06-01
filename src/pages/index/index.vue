<template>
  <div class="counter-warp">
    <scenario-list :list="indexScenarios" :configuration="configuration"/>
  </div>
</template>
<!--必须指定为ts-->
<script lang="ts" src="./index.ts"></script>

<style>
  .counter-warp {
    text-align: center;
    margin-top: 100px;
  }

  .home {
    display: inline-block;
    margin: 100px auto;
    padding: 5px 10px;
    color: blue;
    border: 1px solid blue;
  }

</style>

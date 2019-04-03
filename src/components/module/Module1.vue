<template>
  <div>
    我是Module1
    <input @click="fun1" type="button" value="fun1" />
    <input @click="mu1" type="button" value="mu1" />
    <div>doubleCount: {{doubleCount}}</div>
    <div>this.$store.state.count: {{ this.$store.state.count }}</div>
  </div>
</template>

<script src="../../js/moduleA.js"></script>
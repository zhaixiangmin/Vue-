<template>
  <div id="func">
    <h3>我是Func</h3>
    <h4>query: {{ query }}</h4>
  </div>
</template>

<script>
  export default {
    name: 'func',
    props: ['query']
  }
</script>
<template>
  <div id="param">
    <h3>Param1</h3>
    <h4>参数 {{ id }}</h4>
  </div>
</template>

<script>
  export default {
    name: 'param',
    props: ['id'],
  }
</script>
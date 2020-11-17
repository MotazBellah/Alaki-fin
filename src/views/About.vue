<template lang="html">
    <div class="">
        Under Construction
    </div>

</template>

<script>
export default {
    watch: {
      $route: {
          immediate: true,
          handler(to) {
              document.title = to.meta.title || 'ألاقي فين';
          }
      },
  },
}
</script>

<style lang="css" scoped>
</style>

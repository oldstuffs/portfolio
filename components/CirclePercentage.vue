<script setup lang="ts">
const props = defineProps<{
  lang: String
}>()
</script>

<template>
  <div
    relative
    text-center
    w-75px
    h-80px
    class="
    text-#8c8c83"
  >
    <div
      inline-flex
      items-center
      h-50px
      w-75px
      mb-15px
      left-0
      right-0
      top-0
      class="
      px-12.5px"
    >
      <span
        absolute
        class="
        text-#cacace"
      >
        100%
      </span>
    </div>
    <h6
      absolute
      h-15px
      text-center
      text-13px
      font-400
      bottom-0
      right-0
      left-0
      class="
      w-100%
      text-#ffffff"
    >
      {{ lang }}
    </h6>
  </div>
</template>

<style>
.transform-half {
  transform: translate(-50%, -50%);
}
</style>

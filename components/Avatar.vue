<script setup>
const { data } = await useFetch('/api/data')
const info = ref(data)
const available = info.availability === 'available'
</script>

<template>
  <div
    h-100px
    w-100px
    relative
  >
    <img
      src="~/assets/avatar.png"
      alt="avatar"
      absolute
      object-cover
      border-style-none
      class="
      rounded-50%"
    >
    <div
      z-2
      before="
      content-none
      right-1px
      bottom--1px
      absolute
      h-23px
      w-23px
      bg-#fafafc
      rounded-50%
      animate-[puls_1s_infinite]"
    >
      <div
        :state="available ? 'I\'m available for commissions' : 'I\'m not available'"
        :class="available ? 'bg-#00bb00' : 'bg-#ffc107'"
        absolute
        bottom-3px
        right-5px
        h-15px
        w-15px
        z-0
        transition-all
        text-center
        delay-0s
        class="
        rounded-50%
        duration-0.4s"
        before="
        hover:opacity-[1]
        hover:translate-x-0
        hover:rotate-45deg
        content-none
        absolute
        h-5px
        w-5px
        right--15px
        top-5px
        opacity-0
        bg-#191923
        pointer-events-none
        translate-x-20px
        rotate-45deg
        transition-all
        duration-0.4s
        delay-0s
        z-99"
        after="
        hover:opacity-[1]
        hover:translate-x-0
        text-#8c8c8e
        relative
        content-[attr(state)]
        w-100px
        block
        px-10px
        py-5px
        top--10px
        left-28px
        text-10px
        font-200
        shadow-availability
        bg-#191923
        opacity-0
        pointer-events-none
        translate-x-20px
        transition-all
        duration-0.4s
        delay-0s
        text-left"
      />
    </div>
  </div>
</template>

<style>
@-webkit-keyframes puls {
  0% {
    -webkit-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}

@keyframes puls {
  0% {
    -webkit-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}
</style>

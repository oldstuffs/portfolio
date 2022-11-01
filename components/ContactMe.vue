<script setup>
import Swal from 'sweetalert2'

const { data } = await useFetch('/api/data')
const info = ref(data)

function copy() {
  navigator.clipboard.writeText(info.value.discordIdentifier)
  Swal.fire(
    'Discord Copied',
    'Discord user \'portlek#5502\' copied',
    'success',
  )
}
</script>

<template>
  <div
    box-border
    h-45px
    text-12px
    shadow-none
    decoration-none
    uppercase
    font-600
    inline-flex
    webkit-box-pack-center
    justify-center
    border-none
    transition-all
    cursor-pointer
    webkit-box-direction-normal
    delay-0s
    class="
    p-[0_35px]
    bg-#ffc107
    text-#20202a
    tracking-1.5px
    duration-0.4s"
    @click="copy"
  >
    <span
      box-border
      align-self-center
      transition-all
      delay-0s
      text-12px
      font-600
      cursor-pointer
      class="
      duration-0.2s
      text-#20202a
      tracking-1.5px"
    >
      Contact Me
    </span>
  </div>
</template>

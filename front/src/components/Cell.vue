<template>
  <div
    class="cell"
    :class="'cell-' + color"
  >
    <div v-if="isLock" class="display-block">
      <span :class="'lock-' + color"></span>
    </div>
    <div v-else>
      {{ number }}
    </div>
  </div>
</template>
<script>
    export default {
        name: 'Cell',
        props: {
            color: {
                type: String,
                required: true,
            },
            number: {
                type: Number,
                default: null,
            },
            isLock: {
                type: Boolean,
                default: false,
            }
        },
    }
</script>

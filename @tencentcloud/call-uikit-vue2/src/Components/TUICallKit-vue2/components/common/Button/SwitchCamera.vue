<template>
  <div class="btn-operate-item">
    <div class="invite-calling-header-left">
      <img :src="switchCamera" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import switchCamera from '../../../static/mobile/switch_camera.png';
</script>

<style lang="scss" scoped>
.btn-operate-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  .invite-calling-header-left {
    position: absolute;
    right: -15vw;
  }

  .invite-calling-header-left img {
    width: 32px;
    height: 32px;
  }
}
</style>

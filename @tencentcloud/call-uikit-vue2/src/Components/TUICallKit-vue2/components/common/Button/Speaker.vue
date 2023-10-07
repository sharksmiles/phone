<template>
  <div class="btn-operate-mobile">
    <div class="call-operate" @click="switchStatus">
      <img :src="speakerSrc" />
    </div>
    <span>{{t('speaker')}}</span>
  </div>
</template>

<script lang="ts" setup>
import { ref } from '../../../../../adapter-vue';
import speakerMobile from '../../../static/mobile/speaker-true.png';
import speakerCloseMobile from '../../../static/mobile/speaker-false.png';
const speakerSrc = ref(speakerMobile);
import { t } from '../../../../../TUICallService/index';
const isOpen = ref(true);
const switchStatus = () => {
  if (isOpen.value) {
    close();
  } else {
    open();
  }
};

const open = async () => {
  speakerSrc.value = speakerMobile;
  isOpen.value = true;
};

const close = async () => {
  speakerSrc.value = speakerCloseMobile;
  isOpen.value = false;
};
</script>

<style lang="scss" src="./style/index.scss" scoped></style>

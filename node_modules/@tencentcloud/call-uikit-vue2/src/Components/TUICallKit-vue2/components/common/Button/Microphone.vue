<template>
  <div :class="bodyStyle">
    <div class="call-operate" @click="switchStatus">
      <img :src="micSrc" />
    </div>
    <span>{{ t('microphone') }}</span>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted , onUnmounted } from '../../../../../adapter-vue';
import { TUICallKitServer , TUIStore , StoreName , NAME , t } from '../../../../../TUICallService/index';
import micMobile from '../../../static/mobile/audio-true.png';
import micCloseMobile from '../../../static/mobile/audio-false.png';
import micDesk from '../../../static/desktop/microphone.svg';
import micCloseDesk from '../../../static/desktop/microphone-false.svg';
const props = defineProps({
  isMobile: {
    type: Boolean,
    required: true,
  },
});
const localUserInfo = ref(TUIStore.getData(StoreName.CALL, NAME.LOCAL_USER_INFO));
const bodyStyle = props.isMobile ? 'btn-operate-mobile' : 'btn-operate-desktop';
const micSrc = ref('');
micSrc.value = props.isMobile ? micMobile : micDesk;
watch(
  () => localUserInfo.value?.isAudioAvailable,
  () => {
    replaceImg();
  },
  { deep: true },
);

const switchStatus = async () => {
  if (localUserInfo.value?.isAudioAvailable) {
    await TUICallKitServer.closeMicrophone();
  } else {
    await TUICallKitServer.openMicrophone();
  }
};

const replaceImg = async () => {
  if (localUserInfo.value?.isAudioAvailable) {
    props.isMobile ? (micSrc.value = micMobile) : (micSrc.value = micDesk);
  } else {
    props.isMobile ? (micSrc.value = micCloseMobile) : (micSrc.value = micCloseDesk);
  }
};
const handleLocalUserInfoChange = (value) => {
  localUserInfo.value = value;
};

onMounted(() => {
  TUIStore.watch(StoreName.CALL, {
    [NAME.LOCAL_USER_INFO]: handleLocalUserInfoChange,
  }, {
    notifyRangeWhenWatch: NAME.MYSELF,
  });
});

onUnmounted(() => {
  TUIStore.unwatch(StoreName.CALL, {
    [NAME.LOCAL_USER_INFO]: handleLocalUserInfoChange,
  });
});
</script>

<style lang="scss" src="./style/index.scss" scoped></style>

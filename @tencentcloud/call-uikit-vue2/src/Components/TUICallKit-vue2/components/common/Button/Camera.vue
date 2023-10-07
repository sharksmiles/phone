<template>
  <div :class="bodyStyle" @click="switchStatus">
    <div class="call-operate">
      <img :src="cameraSrc" />
    </div>
    <span>{{ t('camera') }}</span>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, watch } from '../../../../../adapter-vue';
import { TUICallKitServer, TUIStore, StoreName, NAME, t } from '../../../../../TUICallService/index';
import cameraMobile from '../../../static/mobile/camera-true.png';
import cameraCloseMobile from '../../../static/mobile/camera-false.png';
import cameraDesk from '../../../static/desktop/camera.svg';
import cameraCloseDesk from '../../../static/desktop/camera-false.svg';
const props = defineProps({
  isMobile: {
    type: Boolean,
    required: true,
  },
});
const bodyStyle = props.isMobile ? 'btn-operate-mobile' : 'btn-operate-desktop';
const cameraSrc = ref('');
const localUserInfo = ref(TUIStore.getData(StoreName.CALL, NAME.LOCAL_USER_INFO));
cameraSrc.value = props.isMobile ? cameraMobile : cameraDesk;
watch(
  () => localUserInfo.value?.isVideoAvailable,
  () => {
    replaceImg();
  },
  { deep: true },
);

const switchStatus = async () => {
  if (localUserInfo.value?.isVideoAvailable) {
    await TUICallKitServer.closeCamera();
  } else {
    await TUICallKitServer.openCamera("localVideo");
  }
};

const replaceImg = async () => {
  if (localUserInfo.value?.isVideoAvailable) {
    props.isMobile ? (cameraSrc.value = cameraMobile) : (cameraSrc.value = cameraDesk);
  } else {
    props.isMobile ? (cameraSrc.value = cameraCloseMobile) : (cameraSrc.value = cameraCloseDesk);
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

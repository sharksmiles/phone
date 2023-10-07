<template>
  <div v-if="callStatus !== CallStatus.IDLE" id="tui-call-kit-id" :class="[bodyStyle, miniMizedStyle]">
    <SingleCall v-if="!isGroupCall" class="singCall" :allowed-minimized="allowedMinimized" :allowed-full-screen="allowedFullScreen"></SingleCall>
    <GroupCall v-else class="singCall"></GroupCall>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, withDefaults, toRefs, watchEffect } from '../../adapter-vue';
import SingleCall from './components/SingleCall/SingleCall.vue';
import GroupCall from './components/GroupCall/GroupCall.vue';
import { Toast } from './components/common/Toast';
import { TUIGlobal, TUIStore, StoreName, TUICallKitServer, NAME, CallStatus } from '../../TUICallService/index';
const isMobile = !TUIGlobal.isPC;
const callStatus = ref(TUIStore.getData(StoreName.CALL, NAME.CALL_STATUS));
const isGroupCall = ref(TUIStore.getData(StoreName.CALL, NAME.IS_GROUP));
const bodyStyle = isMobile ? 'TUICallKit-mobile transition-animation' : 'TUICallKit-desktop';
const miniMizedStyle = ref('');
const props = withDefaults(
  defineProps<{
    beforeCalling?: (...args: any[]) => void;
    afterCalling?: (...args: any[]) => void;
    onMinimized?: (...args: any[]) => void;
    onMessageSentByMe?: (...args: any[]) => void;
    kickedOut?: (...args: any[]) => void;
    statusChanged?: (...args: any[]) => void;
    allowedMinimized?: boolean;
    allowedFullScreen?: boolean;
    videoDisplayMode?: string;
    videoResolution?: string;
    lang?: string;
  }>(),
  {
    allowedMinimized: false,
    allowedFullScreen: true,
    videoDisplayMode: 'cover',
    videoResolution: '480p',
  },
);

const { beforeCalling, afterCalling, onMinimized, onMessageSentByMe, videoDisplayMode, videoResolution, lang, kickedOut, statusChanged } = toRefs(props);
const handleCallStatusChange = (value) => {
  callStatus.value = value;
};
const handleIsGroupChange = (value) => {
  isGroupCall.value = value;
};
const handleToastInfoChange = (value) => {
  if (value.text) {
    showToast(value.text, value.type || 'info');
  }
};
const handleIsMinizedChange = (value) => {
  if (value) {
    miniMizedStyle.value = 'miniMized';
  } else {
    miniMizedStyle.value = '';
  }
};
watchEffect(() => {
  TUICallKitServer.setCallback({
    beforeCalling: beforeCalling && beforeCalling.value,
    afterCalling: afterCalling && afterCalling.value,
    onMinimized: onMinimized && onMinimized.value,
    onMessageSentByMe: onMessageSentByMe && onMessageSentByMe.value,
    kickedOut: kickedOut && kickedOut.value,
    statusChanged: statusChanged && statusChanged.value,
  });
});

onMounted(() => {
  TUICallKitServer.setLanguage(lang.value as any);
  TUICallKitServer.setVideoDisplayMode(videoDisplayMode.value as any);
  TUICallKitServer.setVideoResolution(videoResolution.value as any);
  TUIStore.watch(StoreName.CALL, {
    [NAME.CALL_STATUS]: handleCallStatusChange,
    [NAME.IS_GROUP]: handleIsGroupChange,
    [NAME.TOAST_INFO]: handleToastInfoChange,
    [NAME.IS_MINIMIZED]: handleIsMinizedChange,
  }, {
    notifyRangeWhenWatch: NAME.MYSELF,
  });
});

function showToast(value: string, type: string) {
  switch (type) {
    case 'info':
      Toast?.info(value as any);
      break;
    case 'error':
      Toast?.error(value as any);
      break;
    default:
      break;
  }
}

onUnmounted(() => {
  TUIStore.unwatch(StoreName.CALL, {
    [NAME.CALL_STATUS]: handleCallStatusChange,
    [NAME.IS_GROUP]: handleIsGroupChange,
    [NAME.TOAST_INFO]: handleToastInfoChange,
    [NAME.IS_MINIMIZED]: handleIsMinizedChange,
  });
});
</script>

<style lang="scss">
.TUICallKit-mobile {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: white;
  .singCall {
    width: 100vw;
    height: 100vh;
  }
}

.transition-animation {
  transform: translateY(-100%);
  animation: slideInDown 1s ease forwards;
}

@keyframes slideInDown {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}

.TUICallKit-desktop {
  margin: 0 auto;
  position: relative;
  position: relative;
  border-radius: inherit;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  z-index: 12;
  border-radius: 16px;

  .singCall {
    width: 100%;
    height: 100%;
  }
}

.miniMized {
  width: 168px !important;
  height: 56px !important;
  overflow:visible !important;
}
</style>

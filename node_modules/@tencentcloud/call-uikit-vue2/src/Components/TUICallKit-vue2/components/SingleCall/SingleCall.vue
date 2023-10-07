<template>
  <div>
    <!-- 移动端主窗口 -->
    <div v-if="isMobile" v-show="!isShowFloatWindow" :class="['singleCall-mobile', videoStyle]">
      <div v-if="callStatus === CallStatus.CALLING || callType === CallMediaType.AUDIO" class="inviteHeader">
        <InviteInfo></InviteInfo>
      </div>
      <PusherPlayer></PusherPlayer>
      <BtnOperate class="btnOperate"></BtnOperate>
    </div>

    <!-- 桌面端主窗口 -->
    <div v-if="!isMobile" v-show="!isShowFloatWindow" :class="['singleCall-desktop', videoStyle]">
      <ToggleSize class="toggleSize" :allowed-full-screen="allowedFullScreen" :allowed-minimized="allowedMinimizedRef" @openFloatWindow="handOpenWindow"></ToggleSize>
      <div v-if="callStatus === CallStatus.CALLING || callType === CallMediaType.AUDIO" class="inviteHeader">
        <InviteInfo></InviteInfo>
      </div>
      <PusherPlayer></PusherPlayer>
      <BtnOperate class="btnOperate"></BtnOperate>
    </div>

    <!-- 悬浮窗 -->
    <FloatWindow v-if="isShowFloatWindow && !isMobile" :local-user-info="localUserInfo" @closeFloatWindow="handCloseWindow"></FloatWindow>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, onMounted, onUnmounted } from '../../../../adapter-vue';
import InviteInfo from './InviteInfo/InviteInfo.vue';
import BtnOperate from './BtnOperate/BtnOperate.vue';
import PusherPlayer from './PusherPlayer/PusherPlayer.vue';
import FloatWindow from '../common/FloatWindow/FloatWindow.vue';
import ToggleSize from '../common/Button/ToggleSize.vue';
import { TUIGlobal, TUIStore, StoreName, TUICallKitServer, NAME, CallStatus, CallMediaType  } from '../../../../TUICallService/index';
const isMobile = !TUIGlobal.isPC;
const callStatus = ref(TUIStore.getData(StoreName.CALL, NAME.CALL_STATUS));
const callType = ref(TUIStore.getData(StoreName.CALL, NAME.CALL_MEDIA_TYPE));
const videoStyle = ref('');
const isShowFloatWindow = ref(false);
const localUserInfo = ref(TUIStore.getData(StoreName.CALL, NAME.LOCAL_USER_INFO));
const props = defineProps({
  allowedFullScreen: {
    type: Boolean,
    required: true,
  },
  allowedMinimized: {
    type: Boolean,
    required: true,
  },
});

const allowedMinimizedRef = ref(props.allowedMinimized);
const handleCallStatusChange = (value) => {
  callStatus.value = value;
  if (props.allowedMinimized) {
    value !== 'connected' ? (allowedMinimizedRef.value = false) : (allowedMinimizedRef.value = true);
  }
};
const handleCallMediaTypeChange = (value) => {
  callType.value = value;
  videoStyle.value = callType.value === CallMediaType.VIDEO ? 'videoStyle' : '';
};
const handleLocalUserInfoChange = (value) => {
  localUserInfo.value = value;
};
const handleIsShowFloatWindowChange = (value) => {
  isShowFloatWindow.value = value;
};
function handOpenWindow() {
  TUICallKitServer.toggleMinimize();
}

function handCloseWindow() {
  TUICallKitServer.toggleMinimize();
}

onMounted(function () {
  TUIStore.watch(StoreName.CALL, {
    [NAME.CALL_STATUS]: handleCallStatusChange,
    [NAME.CALL_MEDIA_TYPE]: handleCallMediaTypeChange,
    [NAME.LOCAL_USER_INFO]: handleLocalUserInfoChange,
    [NAME.IS_MINIMIZED]: handleIsShowFloatWindowChange,
  }, {
    notifyRangeWhenWatch: NAME.MYSELF,
  });
});

onUnmounted(() => {
  TUIStore.unwatch(StoreName.CALL, {
    [NAME.CALL_STATUS]: handleCallStatusChange,
    [NAME.CALL_MEDIA_TYPE]: handleCallMediaTypeChange,
    [NAME.LOCAL_USER_INFO]: handleLocalUserInfoChange,
    [NAME.IS_MINIMIZED]: handleIsShowFloatWindowChange,
  });
});
</script>

<style lang="scss">
.videoStyle {
  background: #00183c;
}
.singleCall-mobile {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 0;

  .inviteHeader {
    width: 100%;
    position: fixed;
    top: 107px;
    z-index: 99;
  }

  .live-pusher {
    width: 100%;
    height: 100%;
  }
}

.singleCall-desktop {
  width: 100%;
  height: 100%;
  text-align: center;
  z-index: 0;
  background: #00183c;
  position: relative;

  .toggleSize {
    position: absolute;
    right: 12px;
    top: 12px;
    z-index: 13;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .inviteHeader {
    position: absolute;
    left: 50%;
    top: 42%;
    transform: translate(-50%, -50%);
    z-index: 99;
  }
}
</style>

<template>
  <div :class="bodyStyle">
    <div class="call-operate">
      <img v-if="!isClickable" class="invite-calling-item-loading" :src="loading" />
      <div v-else @click="hangupEvent" >
        <img  :src="hangupSrc" />
      </div>
    </div>
    <span>{{ t('hangup') }}</span>
  </div>
</template>

<script lang="ts" setup>
import { TUICallKitServer,t, CallMediaType } from '../../../../../TUICallService/index';
import hangupMobile from '../../../static/mobile/hangup.png';
import hangupDesk from '../../../static/desktop/hangup.svg';
import loadingAudio from '../../../static/common/loading-audio.svg';
import loadingVideo from '../../../static/common/loading-video.png';
const props = defineProps({
  isMobile: {
    type: Boolean,
    required: true,
  },
  isClickable: {
    type: Boolean,
    required: true,
  },
  isGroupCall: {
    type: Boolean,
    required: true,
  },
  callType: {
    type: Number,
    required: true,
  },
});
const hangupSrc = props.isMobile ? hangupMobile : hangupDesk;
const bodyStyle = props.isMobile ? 'btn-operate-mobile' : 'btn-operate-desktop';
// 桌面端或者移动端 C2C 视频通话
const singleCondition = props.isMobile && !props.isGroupCall && props.callType === CallMediaType.VIDEO;
const loading = !props.isMobile || singleCondition ? loadingVideo : loadingAudio;

const hangupEvent = async () => {
  await TUICallKitServer.hangup();
};
</script>

<style lang="scss" src="./style/index.scss" scoped>
</style>

<template>
  <div>
    <!-- 移动端呼叫状态 -->
    <div v-if="callStatus === CallStatus.CALLING && isMobile" :class="['control-wrapper-mobile', textColor]">
      <div v-if="callType === CallMediaType.VIDEO && isSponsor && !isH5" class="btn-operate">
        <SwitchAudioCall class="mobile-switchAudioCall" :is-mobile="isMobile"></SwitchAudioCall>
      </div>
      <div class="btn-operate">
        <Reject v-if="!isSponsor" class="mobile-reject" :is-mobile="isMobile"></Reject>
        <Hangup v-if="isSponsor" :isGroupCall="isGroupCall" :callType="callType" :is-mobile="isMobile" :isClickable="isClickable"></Hangup>
        <SwitchCamera v-if="callType === CallMediaType.VIDEO && isSponsor && !isH5"></SwitchCamera>
        <Accept v-if="!isSponsor" class="mobile-accept" :is-mobile="isMobile" :call-type="callType"> </Accept>
      </div>
    </div>

    <!-- 移动端通话状态 -->
    <div v-if="callStatus === CallStatus.CONNECTED && isMobile" :class="['control-wrapper-mobile', textColor]">
      <div class="btn-operate">
        <Timer :call-duration="callDuration"></Timer>
      </div>
      <div v-if="callType === CallMediaType.VIDEO" class="btn-operate">
        <SwitchAudioCall class="mobile-switchAudioCall" :is-mobile="isMobile"></SwitchAudioCall>
      </div>
      <div v-if="callType === CallMediaType.VIDEO" class="btn-operate">
        <Microphone  :is-mobile="isMobile"></Microphone>
        <Speaker v-if="!isH5"></Speaker>
        <Camera :is-mobile="isMobile"></Camera>
      </div>
      <div class="btn-operate">
        <Microphone v-if="callType === CallMediaType.AUDIO" :is-mobile="isMobile"></Microphone>
        <Hangup :is-mobile="isMobile" :isGroupCall="isGroupCall" :callType="callType" :isClickable="isClickable"></Hangup>
        <SwitchCamera v-if="callType === CallMediaType.VIDEO && !isH5"></SwitchCamera>
        <Speaker v-if="callType === CallMediaType.AUDIO && !isH5"></Speaker>
      </div>
    </div>

    <!-- 桌面端呼叫状态 -->
    <div v-if="callStatus === CallStatus.CALLING && !isMobile" class="control-wrapper-desktop">
      <div class="panel-button-area">
        <Camera v-if="callType === CallMediaType.VIDEO" :is-mobile="isMobile"></Camera>
        <Microphone v-if="isSponsor" :is-mobile="isMobile"></Microphone>
        <Reject v-if="!isSponsor" :is-mobile="isMobile"></Reject>
        <Accept v-if="!isSponsor" :is-mobile="isMobile" :call-type="callType"></Accept>
        <Hangup v-if="isSponsor" :isGroupCall="isGroupCall" :callType="callType" :is-mobile="isMobile" :isClickable="isClickable"></Hangup>
      </div>
    </div>

    <!-- 桌面端通话状态 -->
    <div v-if="callStatus === CallStatus.CONNECTED && !isMobile" class="control-wrapper-desktop">
      <div class="panel-button-area">
        <Camera v-if="callType === CallMediaType.VIDEO" :is-mobile="isMobile"></Camera>
        <Microphone :is-mobile="isMobile"></Microphone>
        <SwitchAudioCall v-if="callType === CallMediaType.VIDEO" :is-mobile="isMobile"></SwitchAudioCall>
        <Hangup :is-mobile="isMobile" :isGroupCall="isGroupCall" :callType="callType" :isClickable="isClickable"></Hangup>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from '../../../../../adapter-vue';
import Hangup from '../../common/Button/Hangup.vue';
import Accept from '../../common/Button/Accept.vue';
import Reject from '../../common/Button/Reject.vue';
import SwitchAudioCall from '../../common/Button/SwitchAudioCall.vue';
import SwitchCamera from '../../common/Button/SwitchCamera.vue';
import Microphone from '../../common/Button/Microphone.vue';
import Speaker from '../../common/Button/Speaker.vue';
import Camera from '../../common/Button/Camera.vue';
import Timer from '../../common/Button/Timer.vue';
import { TUIGlobal, TUIStore, StoreName, NAME, CallMediaType, CallStatus, CallRole } from '../../../../../TUICallService/index';
const callRole = ref(TUIStore.getData(StoreName.CALL, NAME.CALL_ROLE));
const callType = ref(TUIStore.getData(StoreName.CALL, NAME.CALL_MEDIA_TYPE));
const callStatus = ref(TUIStore.getData(StoreName.CALL, NAME.CALL_STATUS));
const isGroupCall = ref(TUIStore.getData(StoreName.CALL, NAME.IS_GROUP));
const callDuration = ref(TUIStore.getData(StoreName.CALL, NAME.CALL_DURATION));
const isClickable = ref(TUIStore.getData(StoreName.CALL, NAME.IS_CLICKABLE));
const isMobile = !TUIGlobal.isPC;
const isH5 = TUIGlobal.isH5;
let isSponsor = callRole.value === CallRole.CALLER;
const textColor = ref(callType.value === CallMediaType.AUDIO ? 'black' : 'white');

const handleCallRoleChange = (value) => {
  isSponsor = value === CallRole.CALLER;
  callRole.value = value;
};
const handleIsGroupChange = (value) => {
  isGroupCall.value = value;
};
const handleCallMediaTypeChange = (value) => {
  callType.value = value;
  textColor.value = callType.value === CallMediaType.AUDIO ? 'black' : 'white';
};
const handleCallStatusChange = (value) => {
  callStatus.value = value;
};
const handleCallDurationChange = (value) => {
  callDuration.value = value;
};
const handleIsClickableChange = (value) => {
  isClickable.value = value;
};

onMounted(() => {
  TUIStore.watch(StoreName.CALL, {
    [NAME.CALL_ROLE]: handleCallRoleChange,
    [NAME.IS_GROUP]: handleIsGroupChange,
    [NAME.CALL_MEDIA_TYPE]: handleCallMediaTypeChange,
    [NAME.CALL_STATUS]: handleCallStatusChange,
    [NAME.CALL_DURATION]: handleCallDurationChange,
    [NAME.IS_CLICKABLE]: handleIsClickableChange,
  }, {
    notifyRangeWhenWatch: NAME.MYSELF,
  });
});

onUnmounted(() => {
  TUIStore.unwatch(StoreName.CALL, {
    [NAME.CALL_ROLE]: handleCallRoleChange,
    [NAME.IS_GROUP]: handleIsGroupChange,
    [NAME.CALL_MEDIA_TYPE]: handleCallMediaTypeChange,
    [NAME.CALL_STATUS]: handleCallStatusChange,
    [NAME.CALL_DURATION]: handleCallDurationChange,
    [NAME.IS_CLICKABLE]: handleIsClickableChange,
  });
});
</script>

<style lang="scss" src="./style/index.scss" scoped></style>

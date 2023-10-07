<template>
  <div>
    <!-- 移动端 -->
    <div v-if="!isGroupCall && isMobile" class="singleInvite-header-mobile">
      <!-- 音频通话 -->
      <SingleAudio
        v-if="callType === CallMediaType.AUDIO && remoteUsersList.length !== 0"
        class="singleAudio"
        :remote-users-list="remoteUsersList"
        :is-sponsor="isSponsor"
        :call-alert-message="callAlertMessage"
        :call-status="callStatus"
      >
      </SingleAudio>
      <!-- 视频通话 -->
      <SingleVideo v-if="callType === CallMediaType.VIDEO && remoteUsersList.length !== 0" class="singleVideo" :remote-users-list="remoteUsersList" :is-sponsor="isSponsor" :call-alert-message="callAlertMessage">
      </SingleVideo>
    </div>

    <!-- 桌面端 -->
    <div v-if="!isGroupCall && !isMobile && remoteUsersList.length !== 0" class="singleInvite-header-desktop">
      <div class="singleInvite-message">
        <label class="singleInvite-nick"
          >{{ remoteUsersList[0].nick || remoteUsersList[0].userId }}
          <div v-if="callType === CallMediaType.AUDIO && callStatus === 'connected'" class="microphone-icon-container">
            <MicVolume v-if="remoteUsersList[0]?.isAudioAvailable" :volume="remoteUsersList[0]?.volume"></MicVolume>
            <MicVolumeClosed v-else />
          </div>
        </label>
        <span class="singleInvite-tips">{{ callStatus == 'connected' ? callDuration : callAlertMessage }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from '../../../../../adapter-vue';
import SingleAudio from './mobile/SingleAudio.vue';
import SingleVideo from './mobile/SingleVideo.vue';
import MicVolume from '../../common/MicVolume/MicVolume.vue';
import MicVolumeClosed from '../../common/MicVolume/MicVolumeClosed.vue';
import { TUIGlobal, TUIStore, StoreName, NAME, CallMediaType, CallRole } from '../../../../../TUICallService/index';
const { CALL_ROLE, CALL_MEDIA_TYPE, IS_GROUP, REMOTE_USER_INFO_LIST, CALL_STATUS, CALL_DURATION, CALL_TIPS } = NAME;
const callRole = ref<string>(TUIStore.getData(StoreName.CALL, CALL_ROLE));
const callType = ref<number>(TUIStore.getData(StoreName.CALL, CALL_MEDIA_TYPE));
const isGroupCall = ref<boolean>(TUIStore.getData(StoreName.CALL, IS_GROUP));
const remoteUsersList = ref(TUIStore.getData(StoreName.CALL, REMOTE_USER_INFO_LIST));
const callStatus = ref(TUIStore.getData(StoreName.CALL, CALL_STATUS));
const callDuration = ref(TUIStore.getData(StoreName.CALL, CALL_DURATION));
const callAlertMessage = ref(TUIStore.getData(StoreName.CALL, CALL_TIPS));
const isMobile = !TUIGlobal.isPC;
const isSponsor = callRole.value === CallRole.CALLER;

const handleCallRoleChange = (value) => {
  callRole.value = value;
};
const handleIsGroupChange = (value) => {
  isGroupCall.value = value;
};
const handleCallMediaTypeChange = (value) => {
  callType.value = value;
};
const handleRemoteUserInfoListChange = (value) => {
  remoteUsersList.value = value;
};
const handleCallStatusChange = (value) => {
  callStatus.value = value;
};
const handleCallDurationChange = (value) => {
  callDuration.value = value;
};
const handleCallTipsChange = (value) => {
  callAlertMessage.value = value;
};

onMounted(() => {
  TUIStore.watch(StoreName.CALL, {
    [CALL_ROLE]: handleCallRoleChange,
    [IS_GROUP]: handleIsGroupChange,
    [CALL_MEDIA_TYPE]: handleCallMediaTypeChange,
    [REMOTE_USER_INFO_LIST]: handleRemoteUserInfoListChange,
    [CALL_STATUS]: handleCallStatusChange,
    [CALL_DURATION]: handleCallDurationChange,
    [CALL_TIPS]: handleCallTipsChange,
  }, {
    notifyRangeWhenWatch: NAME.MYSELF,
  });
});


onUnmounted(() => {
  TUIStore.unwatch(StoreName.CALL, {
    [CALL_STATUS]: handleCallStatusChange,
    [CALL_MEDIA_TYPE]: handleCallMediaTypeChange,
    [CALL_ROLE]: handleCallRoleChange,
    [IS_GROUP]: handleIsGroupChange,
    [CALL_DURATION]: handleCallDurationChange,
    [REMOTE_USER_INFO_LIST]: handleRemoteUserInfoListChange,
    [CALL_TIPS]: handleCallTipsChange,
  });
});
</script>

<style lang="scss">
.singleInvite-header-mobile {
  display: flex;
  justify-content: flex-end;
  padding: 0 26px;

  .singleAudio {
    margin: 0 auto;
  }

  .singleVideo {
    display: flex;
  }
}

.singleInvite-header-desktop {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  top: 30%;

  .singleInvite-message .singleInvite-nick {
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    width: 100%;
    line-height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    .microphone-icon-container {
      width: 24px;
      height: 24px;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 12px;
      line-height:24px;
      margin-left: 8px;
    }
  }

  .singleInvite-tips {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: white;
  }
}
</style>

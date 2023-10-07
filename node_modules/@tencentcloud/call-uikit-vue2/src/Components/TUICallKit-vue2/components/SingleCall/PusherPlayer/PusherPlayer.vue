<template>
  <div class="streamBox">
    <!-- 移动端 -->
    <div v-show="callType === CallMediaType.VIDEO" v-if="isMobile" class="streamBox-mobile">
      <!-- 本地流 -->
      <div id="localVideo" class="localVideo" :class="localClass" @click="callStatus === CallStatus.CONNECTED ? switchUserView() : ''"></div>
      <!-- 远端流 -->
      <div v-if="remoteList.length !== 0" :id="remoteList[0].domId" :class="[remoteClass, 'remoteList']" @click="callStatus === CallStatus.CONNECTED ? switchUserView() : ''"></div>
    </div>

    <!-- 桌面端 -->
    <div v-show="callType === CallMediaType.VIDEO" v-if="!isMobile" class="streamBox-deskTop">
      <div id="localVideo" :class="localClass">
        <span v-if="callStatus === CallStatus.CONNECTED" class="tag">
          <div class="microphone-icon-container">
            <MicVolume v-if="localUserInfo?.isAudioAvailable" :volume="localUserInfo?.volume"></MicVolume>
            <MicVolumeClosed v-else />
          </div>
          {{ `${localUserInfo?.nick || localUserInfo?.userId} ${t('me')}` }}
        </span>
      </div>
      <div v-if="remoteList.length !== 0 && callStatus === CallStatus.CONNECTED" :class="remoteClass" class="remoteList-desk">
        <div :id="remoteList[0].domId" class="remoteListBox">
          <span class="tag">
            <div class="microphone-icon-container">
              <MicVolume v-if="remoteList[0]?.isAudioAvailable" :volume="remoteList[0]?.volume"></MicVolume>
              <MicVolumeClosed v-else />
            </div>
            {{ remoteList[0]?.nick || remoteList[0]?.userId }}
          </span>
        </div>
      </div>
      <div v-if="showSwitchScreen" class="switchScreen" @click="switchUserView">
        <div class="screenImg">
          <img :src="switchScreen" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick, onMounted, onUnmounted, computed } from '../../../../../adapter-vue';
import { TUIGlobal, TUIStore, StoreName, NAME, t, CallMediaType, CallStatus } from '../../../../../TUICallService/index';
import switchScreen from '../../../static/desktop/switchScreen.svg';
import MicVolume from '../../common/MicVolume/MicVolume.vue';
import MicVolumeClosed from '../../common/MicVolume/MicVolumeClosed.vue';
const callType = ref(TUIStore.getData(StoreName.CALL, NAME.CALL_MEDIA_TYPE));
const callStatus = ref(TUIStore.getData(StoreName.CALL, NAME.CALL_STATUS));
const localClass = ref('small');
const remoteClass = ref('large');
const remoteList = ref(TUIStore.getData(StoreName.CALL, NAME.REMOTE_USER_INFO_LIST));
const localUserInfo = ref(TUIStore.getData(StoreName.CALL, NAME.LOCAL_USER_INFO));
const isSwitchScreen = ref(false);
const isMobile = !TUIGlobal.isPC;
const showSwitchScreen = computed(() => {
  return callStatus.value === CallStatus.CONNECTED
    && remoteList.value.length !== 0
    && callType.value === CallMediaType.VIDEO;
  });

const handleLocalUserInfoChange = (value) => {
  localUserInfo.value = value;
};
const handleRemoteUserInfoListChange = (value) => {
  remoteList.value = value;
};
const handleCallStatusChange = (value) => {
  callStatus.value = value;
};
const handleCallMediaTypeChange = (value) => {
  callType.value = value;
};

onMounted(() => {
  TUIStore.watch(StoreName.CALL, {
    [NAME.LOCAL_USER_INFO]: handleLocalUserInfoChange,
    [NAME.REMOTE_USER_INFO_LIST]: handleRemoteUserInfoListChange,
    [NAME.CALL_STATUS]: handleCallStatusChange,
    [NAME.CALL_MEDIA_TYPE]: handleCallMediaTypeChange,
  });
  switchUserView();
});

onUnmounted(() => {
  TUIStore.unwatch(StoreName.CALL, {
    [NAME.LOCAL_USER_INFO]: handleLocalUserInfoChange,
    [NAME.REMOTE_USER_INFO_LIST]: handleRemoteUserInfoListChange,
    [NAME.CALL_STATUS]: handleCallStatusChange,
    [NAME.CALL_MEDIA_TYPE]: handleCallMediaTypeChange,
  });
});

const switchUserView = async () => {
  [localClass.value, remoteClass.value] = [remoteClass.value, localClass.value];
  await nextTick();
  const largeView = document.getElementsByClassName('large')[0] as HTMLElement;
  const smallView = document.getElementsByClassName('small')[0] as HTMLElement;
  largeView.className = 'localVideo';
  if (!smallView) return;
  if (!isMobile) {
    smallView.className = 'remoteList-desk';
  } else {
    isSwitchScreen.value = true;
    smallView.className = 'remoteList';
  }
};
</script>

<style lang="scss" scoped>
.streamBox {
  width: 100%;
  height: 100%;
}
.streamBox-mobile {
  position: relative;

  .remoteList {
    position: fixed;
    top: 60px;
    right: 40px;
    z-index: 999;
    width: 140px;
    height: 200px;

    .remoteListBox {
      width: 140px;
      height: 200px;
    }
  }

  .localVideo {
    width: 100vw;
    height: 100vh;

    .remoteList {
      top: 0;
      right: 0;
    }

    .remoteListBox {
      width: 100vw;
      height: 100vh;
    }
  }
}

.streamBox-deskTop {
  position: relative;
  width: 100%;
  height: 100%;
  .switchScreen {
    cursor: pointer;
    position: absolute;
    top: 20px;
    left: 260px;
    z-index: 999;

    .screenImg {
      width: 16px;
    }
  }

  .remoteList-desk {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 260px;
    height: 180px;
    z-index: 999;
    background-color: black;
    .remoteListBox {
      width: 100%;
      height: 100%;
    }
  }

  .localVideo {
    width: 100%;
    height: 100%;
    .remoteList {
      top: 0;
      right: 0;
    }

    .remoteListBox {
      width: 100%;
      height: 100%;
    }
  }

  .tag {
    color: white;
    z-index: inherit;
    background: rgba(0, 0, 0, 0.6);
    padding: 2px 10px;
    border-top-right-radius: inherit;
    border-bottom-left-radius: inherit;
    font-size: 14px;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 11;
    display: flex;
    align-items: center;
  }

  .tag .microphone-icon-container {
    margin-left: 0;
    margin-right: 2px;
    width: 20px;
    background-color: transparent;
  }
}
</style>

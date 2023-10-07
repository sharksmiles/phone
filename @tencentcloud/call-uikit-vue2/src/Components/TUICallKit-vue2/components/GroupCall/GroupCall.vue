<template>
  <div :class="bodyStyle">
    <div v-if="callStatus === CallStatus.CALLING && callRole !== CallRole.CALLER">
      <InviteInfo></InviteInfo>
    </div>
    <PusherPlayer v-if="callStatus === CallStatus.CONNECTED || callRole === CallRole.CALLER"></PusherPlayer>
    <BtnOperate></BtnOperate>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from '../../../../adapter-vue';
import { TUIGlobal, TUIStore, StoreName, NAME, t, CallStatus, CallRole } from '../../../../TUICallService/index';
import InviteInfo from './InviteInfo/InviteInfo.vue';
import BtnOperate from './BtnOperate/BtnOperate.vue';
import PusherPlayer from './PusherPlayer/PusherPlayer.vue';
const callRole = ref(TUIStore.getData(StoreName.CALL, NAME.CALL_ROLE));
const callStatus = ref(TUIStore.getData(StoreName.CALL, NAME.CALL_STATUS));
const callType = ref(TUIStore.getData(StoreName.CALL, NAME.CALL_MEDIA_TYPE));
const isMobile = !TUIGlobal.isPC;
const bodyStyle = isMobile ?'':'group-deskTop';

const handleCallStatusChange = (value) => {
  callStatus.value = value;
};
const handleCallMediaTypeChange = (value) => {
  callType.value = value;
};
const handleCallRoleChange = (value) => {
  callRole.value = value;
};
const watchOptions = {
  [NAME.CALL_STATUS]: handleCallStatusChange,
  [NAME.CALL_MEDIA_TYPE]: handleCallMediaTypeChange,
  [NAME.CALL_ROLE]: handleCallRoleChange,
};

onMounted(() => {
  TUIStore.watch(StoreName.CALL, watchOptions, { notifyRangeWhenWatch: NAME.MYSELF });
});

onUnmounted(() => {
  TUIStore.unwatch(StoreName.CALL, watchOptions);
});
</script>

<style scoped>
.group-deskTop{
  background: #00183c;
  z-index: 0;
}
</style>

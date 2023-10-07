<template>
  <div :class="bodyStyle" @click="rejectEvent">
    <div class="call-operate">
      <img :src="hangupSrc" />
    </div>
    <span>{{t('reject')}}</span>
  </div>
</template>

<script lang="ts" setup>
import rejectMobile from '../../../static/mobile/hangup.png';
import rejectDesk from '../../../static/desktop/hangup.svg';
import { TUICallKitServer , t } from '../../../../../TUICallService/index';
const props = defineProps({
  isMobile: {
    type: Boolean,
    required: true,
  },
});
const hangupSrc = props.isMobile ? rejectMobile : rejectDesk;
const bodyStyle = props.isMobile ? 'btn-operate-mobile' : 'btn-operate-desktop';
const rejectEvent = async () => {
  await TUICallKitServer.reject();
};
</script>

<style lang="scss" src="./style/index.scss" scoped></style>

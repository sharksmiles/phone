<template>
  <div :class="bodyStyle" @click="acceptEvent">
    <div class="call-operate">
      <img :src="acceptSrc" />
    </div>
    <span>{{ t('accept') }}</span>
  </div>
</template>

<script lang="ts" setup>
import acceptMobile from '../../../static/mobile/accept.png';
import acceptAudioDesk from '../../../static/desktop/acceptAudio.svg';
import acceptVideoDesk from '../../../static/desktop/acceptVideo.svg';
import { TUICallKitServer, t, CallMediaType } from '../../../../../TUICallService/index';

const props = defineProps({
  isMobile: {
    type: Boolean,
    required: true,
  },
  callType: {
    type: Number,
    required: true,
  },
});
const bodyStyle = props.isMobile ? 'btn-operate-mobile' : 'btn-operate-desktop';
const acceptSrc = props.isMobile ? acceptMobile : props.callType === CallMediaType.AUDIO ? acceptAudioDesk : acceptVideoDesk;
const acceptEvent = async () => {
  await TUICallKitServer.accept();
};
</script>

<style lang="scss" src="./style/index.scss" scoped></style>

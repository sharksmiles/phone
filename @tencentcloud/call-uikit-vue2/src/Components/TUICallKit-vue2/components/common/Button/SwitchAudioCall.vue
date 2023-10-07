<template>
  <div :class="bodyStyle" @click="switchAudioCall">
    <div class="call-operate">
      <img :src="transSrc" />
    </div>
    <span>{{ t('video-to-audio') }}</span>
  </div>
</template>

<script lang="ts" setup>
import { TUICallKitServer } from '../../../../../TUICallService/index';
import transMobile from '../../../static/mobile/trans.png';
import transDesk from '../../../static/desktop/trans.svg';
import { t } from '../../../../../TUICallService/index';
const props = defineProps({
  isMobile: {
    type: Boolean,
    required: true,
  },
});
const transSrc = props.isMobile ? transMobile : transDesk;
const bodyStyle = props.isMobile ? 'btn-operate-mobile' : 'btn-operate-desktop';
const switchAudioCall = async () => {
  await TUICallKitServer.switchCallMediaType();
};
</script>

<style lang="scss" scoped>
.btn-operate-desktop {
  .call-operate {
    display: flex;
    flex-direction: column;
    width: 40px;
    height: 40px;
    margin: 0 40px;
    cursor: pointer;
  }

  img {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  span {
    display: block;
    margin-top: 5px;
    white-space: nowrap;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
  }
}

.btn-operate-mobile {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  .call-operate {
    width: 28px;
    height: 26px;
    border-radius: 8vh;
    margin: 0 5vw;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      background: none;
    }
  }

  span {
    margin-top: 10px;
  }
}
</style>

<template>
  <div v-for="(item, index) in playerList" :key="index" class="div-container player-container {{callType === 1 ? 'player-audio' : ''}}">
    <div catch:tap="toggleViewSize">
      <live-player
        :id="item.id"
        class="live"
        data-userid="item.userID"
        data-streamid="{{item.streamID}}"
        data-streamtype="{{item.streamType}}"
        src="{{item.src}}"
        mode="RTC"
        autoplay="{{item.autoplay}}"
        mute-audio="{{item.muteAudio}}"
        mute-video="{{item.muteVideo}}"
        orientation="{{item.orientation}}"
        object-fit="{{item.objectFit}}"
        background-mute="{{item.enableBackgroundMute}}"
        min-cache="{{item.minCache}}"
        max-cache="{{item.maxCache}}"
        sound-mode="{{soundMode}}"
        enable-recv-message="{{item.enableRecvMessage}}"
        auto-pause-if-navigate="{{item.autoPauseIfNavigate}}"
        auto-pause-if-open-native="{{item.autoPauseIfOpenNative}}"
        bindstatechange="playerStateChange"
        bindfullscreenchange="playerFullscreenChange"
        bindnetstatus="playNetStatus"
        bindaudiovolumenotify="playerAudioVolumeNotify"
      />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style>
.audio {
  width: 0px;
  height: 0px;
}

.video {
  width: 30vw;
  height: 30vh;
}
</style>

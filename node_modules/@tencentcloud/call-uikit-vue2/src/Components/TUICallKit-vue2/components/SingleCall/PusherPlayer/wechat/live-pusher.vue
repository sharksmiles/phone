<template>
  <live-pusher
    :class="callType === 1 ? 'audio' : 'video'"
    :url="pusher.url"
    :mode="pusher.mode"
    :autopush="true"
    :enable-camera="pusher.enableCamera"
    :enable-mic="true"
    :muted="!pusher.enableMic"
    :enable-agc="true"
    :enable-ans="true"
    :enable-ear-monitor="pusher.enableEarMonitor"
    :auto-focus="pusher.enableAutoFocus"
    :zoom="pusher.enableZoom"
    :min-bitrate="pusher.minBitrate"
    :max-bitrate="pusher.maxBitrate"
    :video-width="pusher.videoWidth"
    :video-height="pusher.videoHeight"
    :beauty="pusher.beautyLevel"
    :whiteness="pusher.whitenessLevel"
    :orientation="pusher.videoOrientation"
    :aspect="pusher.videoAspect"
    :device-position="pusher.frontCamera"
    :remote-mirror="pusher.enableRemoteMirror"
    :local-mirror="pusher.localMirror"
    :background-mute="pusher.enableBackgroundMute"
    :audio-quality="pusher.audioQuality"
    :audio-volume-type="pusher.audioVolumeType"
    :audio-reverb-type="pusher.audioReverbType"
    :waiting-img="pusher.waitingImage"
    :beauty-style="pusher.beautyStyle"
    :filter="pusher.filter"
  />
</template>

<script lang="ts" setup></script>

<style>
.audio {
  width: 0px;
  height: 0px;
}

.video {
  width: 100vw;
  height: 100vh;
}
</style>

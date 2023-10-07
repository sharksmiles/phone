import { NAME } from '../const';
export class BellContext {
  private audio: any = null;
  constructor() {
    this.audio = new Audio();
    this.audio.loop = true;
    this.audio.addEventListener('error', (event) => {
      console.warn(`${NAME.PREFIX}setCallingBell: Failed to load audio file: ${event.target.src}`);
    });
  }
  async play() {
    try {
      await this.audio.play();
    } catch (error) {
      console.warn(`${NAME.PREFIX}setCallingBell: Failed to play audio file, ${error}`);
    }
  }
  async stop() {
    try {
      await this.audio.pause();
    } catch (error) {
      console.warn(`${NAME.PREFIX}setCallingBell: Failed to stop audio file, ${error}`);
    }
  }
  setBellSrc(url: string) {
    this.audio.src = url;
  }
  destroy() {
    this.stop();
    this.audio = null;
  }
}

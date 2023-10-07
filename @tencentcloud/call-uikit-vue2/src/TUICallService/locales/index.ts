import { TUIStore } from "..";
import { NAME, StoreName } from "../const";
import { en } from './en';
import { zh } from './zh-cn';

export const CallTips: any = {
  OTHER_SIDE: 'other side',
  CANCEL: 'cancel',
  OTHER_SIDE_REJECT_CALL: 'other side reject call',
  REJECT_CALL: 'reject call',
  OTHER_SIDE_LINE_BUSY: 'other side line busy',
  IN_BUSY: 'in busy',
  CALL_TIMEOUT: 'call timeout',
  END_CALL: 'end call',
  TIMEOUT: 'timeout',
  KICK_OUT: 'kick out',
  CALLER_CALLING_MSG: 'caller calling message',
  CALLEE_CALLING_VIDEO_MSG: 'callee calling video message',
  CALLEE_CALLING_AUDIO_MSG: 'callee calling audio message',
  NO_MICROPHONE_DEVICE_PERMISSION: 'no microphone access',
  NO_CAMERA_DEVICE_PERMISSION: 'no camera access',
}

export const languageData: languageDataType = {
  en: en,
  'zh-cn': zh
};

// language translate
export function t(key: any): string {
  const language = TUIStore.getData(StoreName.CALL, NAME.LANGUAGE);
  for(const langKey in languageData) {
    if (langKey === language) {
      const currentLanguage = languageData[langKey];
      for (const sentenceKey in currentLanguage) {
        if (sentenceKey === key) {
          return currentLanguage[sentenceKey];
        }
      }
    }
  }
  const enString = key["en"]?.key;
  console.error(`${NAME.PREFIX}translation is not found: ${key}.`);
  return enString;
}

interface languageItemType {
  [key: string]: string;
}
interface languageDataType {
  [key: string]: languageItemType;
}
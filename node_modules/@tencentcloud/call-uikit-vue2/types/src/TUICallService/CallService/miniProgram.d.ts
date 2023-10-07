import { CallMediaType, CallStatus } from '../const';
export declare function initialUI(): void;
export declare function checkRunPlatform(): void;
export declare function beforeCall(type: CallMediaType, that: any): Promise<CallStatus.IDLE | CallStatus.CALLING>;
export declare class BellContext {
    private context;
    constructor();
    setBellSrc(filePath: string): void;
    play(): void;
    stop(): void;
    handleError(code: number): void;
    destroyInstance(): void;
}

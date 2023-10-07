export declare class BellContext {
    private audio;
    constructor();
    play(): Promise<void>;
    stop(): Promise<void>;
    setBellSrc(url: string): void;
    destroy(): void;
}

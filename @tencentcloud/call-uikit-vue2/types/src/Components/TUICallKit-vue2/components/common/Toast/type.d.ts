export declare type ToastType = 'info' | 'waring' | 'error';
export declare type TToastOptions = {
    type?: ToastType;
    duration?: number;
    message: string;
    showClose?: boolean;
    onClose?: () => void;
};
export declare type CreateToast = (options: TToastOptions) => any;
export declare type TToast = {
    info?: (options: TToastOptions) => void;
    success?: (options: TToastOptions) => void;
    waring?: (options: TToastOptions) => void;
    error?: (options: TToastOptions) => void;
    show?: (options: TToastOptions) => void;
};

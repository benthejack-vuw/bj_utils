export declare enum MouseButton {
    "none" = 0,
    "left" = 1,
    "middle" = 2,
    "right" = 3,
    "any" = 4,
}
export declare namespace MouseButtonConverter {
    function fromString(buttonString: string): MouseButton;
}
export declare class MouseData {
    protected _position: any;
    protected _lastPosition: any;
    protected _buttons: any;
    constructor();
    readonly buttons: any;
    readonly position: any;
    readonly lastPosition: any;
    isPressed(button: MouseButton): boolean;
    mutableCopy(): MutableMouseData;
}
export declare class MutableMouseData extends MouseData {
    constructor();
    update(position: any): void;
    setButton(button: MouseButton, value: boolean): void;
    locked(): MouseData;
    buttonObject: any;
}

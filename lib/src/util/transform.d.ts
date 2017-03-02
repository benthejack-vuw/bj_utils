import { Point } from "../geometry/point";
export declare class Transform {
    protected m: Array<number>;
    constructor();
    set(arr: Array<number>): void;
    copy(): Transform;
    reset(): void;
    multiply(matrix: Transform): void;
    invert(): void;
    rotate(rad: number): void;
    translate(x: number, y: number): void;
    scale(sx: number, sy: number): void;
    transformPoint(pt: Point): Point;
    apply(context: CanvasRenderingContext2D): void;
}

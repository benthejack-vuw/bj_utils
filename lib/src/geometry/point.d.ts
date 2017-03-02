export declare class Point {
    x: number;
    y: number;
    constructor(x: number, y: number);
    static fromData(data: any): Point;
    copy(): Point;
    offsetCopy(x: number, y: number): Point;
    move(amount: number): void;
    moveTo(point: Point): void;
    translate(x: number, y: number): void;
    scale(amount: number): void;
    distanceTo(point: Point): number;
    offsetFrom(point: Point): Point;
    asArray(): Array<number>;
    as3DArray(): Array<number>;
    toJSON(): any;
    toString(): string;
}

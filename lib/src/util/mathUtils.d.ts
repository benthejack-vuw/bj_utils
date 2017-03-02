interface Math {
    TWO_PI: number;
    clamp(x: number, min: number, max: number): number;
    dist(x1: number, y1: number, x2: number, y2: number): number;
    lerp(one: number, two: number, t: number): number;
}

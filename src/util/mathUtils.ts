export var TWO_PI = Math.PI*2;

export function clamp(x:number, min:number, max:number) {
  return Math.min(Math.max(x, min), max);
};

export function dist(x1:number, y1:number, x2:number, y2:number){
	var xd = x2-x1;
	var yd = y2-y1;
	return Math.sqrt(xd*xd + yd*yd);
};

export function lerp(one:number, two:number, t:number){
	t = clamp(t, 0, 1);
	return one + ((two-one)*t);
};

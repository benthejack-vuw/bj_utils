interface Math{
	TWO_PI: number;
	clamp(x: number, min:number, max: number): number;
	dist(x1: number, y1:number, x2: number, y2: number): number;
	lerp(one: number, two:number, t: number): number;	
}

Math.TWO_PI = Math.PI*2;

Math.clamp = function(x:number, min:number, max:number) {
  return Math.min(Math.max(x, min), max);
};

Math.dist = function(x1:number, y1:number, x2:number, y2:number){
	var xd = x2-x1;
	var yd = y2-y1;
	return Math.sqrt(xd*xd + yd*yd);
};

Math.lerp = function(one:number, two:number, t:number){
	t = Math.clamp(t, 0, 1);
	return one + ((two-one)*t);
};
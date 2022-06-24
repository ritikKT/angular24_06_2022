import {point} from './point';
let p=new point(1,2);
p.x=222;
p.draw();

let d=(point: { x : number, y: number})=>{
    console.log(point.x,point.y);
}

d({x:1,y:2})
p.getDistance(p);

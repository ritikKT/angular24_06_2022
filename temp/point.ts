export class point{
    
    constructor(public _x?:number,public _y?:number)
    {
        this._x=_x; this._y=_y;
    }
    draw()
    {
        console.log(this._x,this._y);
    }
    getDistance(a:point)
    {
        console.log(a._x,a._y);
    }
    set x(val:number)
    {
        if(val<0)
        {
            throw new Error("er");
        }
        this._x=val;
    }
}
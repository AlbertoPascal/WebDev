export class GoalData {
    constructor (
        public img?: string,
        public price?: number
    ){}

    public setImg( image:string){
        this.img=image;
    }
    public setPrice( cost:number){
        this.price=cost;
    }
}

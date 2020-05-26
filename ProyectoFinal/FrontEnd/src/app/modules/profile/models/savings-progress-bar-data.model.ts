export class SavingsProgressBarData {
    constructor (
        public currentSavings?: number
    ){}

    public setSavings( newSavings:number){
        this.currentSavings=newSavings;
    }
}

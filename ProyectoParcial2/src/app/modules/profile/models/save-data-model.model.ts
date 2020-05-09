export class SaveDataModel {
    public user:string;
    public total_savings:number;
    public motif:string;
    private retrieveSavings(){
        //query to bring savings from database from the user
        let old_savings = 100;
        this.total_savings = old_savings;
    }
    public AddSavings(new_savings:number){
        //add new savings to database. 
        this.retrieveSavings();
        this.total_savings = this.total_savings + new_savings;
        alert("Successfully updated db");
        

    }
    public addCosts(new_cost){
        this.retrieveSavings();
        this.total_savings = this.total_savings - new_cost;
        alert("Successfully updated db");
    }
}

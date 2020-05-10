export class SaveDataModel {
    public user:string;
    public total_savings:number;
    public motif:string;

    public AddSavings(new_savings:number){
        //add new savings to database. 
        console.log("on save_data_model quantity is : " +this.total_savings);
        this.total_savings = +this.total_savings + +new_savings;
        alert("Successfully updated db");
        

    }
    public addCosts(new_cost){
        
        this.total_savings = +this.total_savings - +new_cost;
        alert("Successfully updated db");
    }
}

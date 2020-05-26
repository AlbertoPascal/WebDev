export class SessionData {
    /*name:string;
    lastName:string;
    email:string;
    username:string;
    job:string;
    password:string;*/
    constructor(public username?:string, public password?:string, public job?:string, public name?:string, public lastName?:string, public email?:string ){

    }
    public setUsername(user:string){
        this.username = user;
    }
    public setPassword(pass:string){
        this.password=pass;
    }
    public setJob(j:string){
        this.job=j;
    }
    public setEmail(mail:string){
        this.email=mail;
    }
    public setName(firstname:string, last:string){
        this.name=firstname;
        this.lastName=last;
    }
    
}
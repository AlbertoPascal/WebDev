export class SessionData {
    /*name:string;
    lastName:string;
    email:string;
    username:string;
    job:string;
    password:string;*/
    constructor(public user_auth_id?:string, public profilePic?:string, public isAdmin?:boolean ,public job?:string, public name?:string, public lastName?:string, public email?:string ){

    }
    public setuserAuth(auth:string)
    {
        this.user_auth_id = auth;
    }
    public setadmin(admin:boolean){
        this.isAdmin = admin;
    }
    public setProfilePic(pic:string){
        this.profilePic=pic;
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
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

export class SessionData {
    /*name:string;
    lastName:string;
    email:string;
    username:string;
    job:string;
    password:string;*/
    constructor(public user_auth_id?:string, public nombre?:string, public apellido?:string, public profilePic?:string, public isAdmin?:boolean ,public job?:string,  public email?:string, public wishlist_id?:string){

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
        this.nombre=firstname;
        this.apellido=last;
    }
    public setwishlist_id(list_id:string)
    {
        this.wishlist_id = list_id;
    }
    
}
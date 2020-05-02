//This was generated with the command ng generate class ProfileData --type=model
export class ProfileData {
    name:string;
    lastName:string;
    email:string;
    username:string;
    job:string;
    password:string;
    public uploadToDatabase(){
        alert("Values sent to database");
    }
}

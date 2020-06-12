//This was generated with the command ng generate class ProfileData --type=model
export class ProfileData {
    name:string;
    lastName:string;
    email:string;
    username:string;
    job:string;
    password:string;
    foto:string;
    salario:number;

    constructor(){
        
    }
    public setInfo(nombre:string, apellido:string, correo:string, usuario:string, trabajo:string, contrasena:string, Ufoto:string){
        this.name=nombre;
        this.lastName=apellido;
        this.email=correo;
        this.username=usuario;
        this.job=trabajo;
        this.password=contrasena;
        this.foto=Ufoto;     
    }
}

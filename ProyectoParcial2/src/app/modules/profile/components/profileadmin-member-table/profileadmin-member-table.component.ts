import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profileadmin-member-table',
  templateUrl: './profileadmin-member-table.component.html',
  styleUrls: ['./profileadmin-member-table.component.scss']
})
export class ProfileadminMemberTableComponent implements OnInit {
  
  Members=[
    {Nombre:"Moises Torres", foto:"../../assets/images/moi.jpeg", about:"Estudiante", fecha:"27/03/2020", saldo:5000, limite_gastos:1000, productos:5},
    {Nombre:"Alberto Pascal", foto:"../../assets/images/alberto.jpeg", about:"Estudiante", fecha:"26/03/2020", saldo:3300, limite_gastos:1250, productos:3},
    {Nombre:"John Doe", foto:"../../assets/images/blank-profile-picture.png", about:"Estudiante", fecha:"01/03/2020", saldo:100, limite_gastos:300, productos:1},
    {Nombre:"Jhonny Rocket", foto:"../../assets/images/blank-profile-picture.png", about:"Estudiante", fecha:"02/03/2020", saldo:100, limite_gastos:300, productos:1},
    {Nombre:"Achilles Florales", foto:"../../assets/images/blank-profile-picture.png", about:"Estudiante", fecha:"03/03/2020", saldo:1123, limite_gastos:300, productos:1},
    {Nombre:"Josh Nickels", foto:"../../assets/images/blank-profile-picture.png", about:"Estudiante", fecha:"04/03/2020", saldo:332, limite_gastos:300, productos:1},
    {Nombre:"Juan Rodriguez", foto:"../../assets/images/blank-profile-picture.png", about:"Estudiante", fecha:"05/03/2020", saldo:88, limite_gastos:300, productos:1},
    {Nombre:"Mariano Narro", foto:"../../assets/images/blank-profile-picture.png", about:"Estudiante", fecha:"06/03/2020", saldo:66, limite_gastos:300, productos:1},
    {Nombre:"Joaquin Perez", foto:"../../assets/images/blank-profile-picture.png", about:"Estudiante", fecha:"07/03/2020", saldo:1050, limite_gastos:300, productos:1},
    {Nombre:"Emiliano Zapata", foto:"../../assets/images/blank-profile-picture.png", about:"Estudiante", fecha:"08/03/2020", saldo:100, limite_gastos:300, productos:1},
    {Nombre:"X AE A-12", foto:"../../assets/images/x_ae_a_12.jpg", about:"Estudiante", fecha:"04/05/2020", saldo:999999, limite_gastos:999999999, productos:0},
    {Nombre:"John Doe", foto:"../../assets/images/blank-profile-picture.png", about:"Estudiante", fecha:"01/03/2020", saldo:100, limite_gastos:300, productos:1},
    {Nombre:"John Doe", foto:"../../assets/images/blank-profile-picture.png", about:"Estudiante", fecha:"01/03/2020", saldo:100, limite_gastos:300, productos:1},
    {Nombre:"John Doe", foto:"../../assets/images/blank-profile-picture.png", about:"Estudiante", fecha:"01/03/2020", saldo:100, limite_gastos:300, productos:1},
    {Nombre:"John Doe", foto:"../../assets/images/blank-profile-picture.png", about:"Estudiante", fecha:"01/03/2020", saldo:100, limite_gastos:300, productos:1},
    {Nombre:"John Doe", foto:"../../assets/images/blank-profile-picture.png", about:"Estudiante", fecha:"01/03/2020", saldo:100, limite_gastos:300, productos:1},
    {Nombre:"John Doe", foto:"../../assets/images/blank-profile-picture.png", about:"Estudiante", fecha:"01/03/2020", saldo:100, limite_gastos:300, productos:1},
    {Nombre:"John Doe", foto:"../../assets/images/blank-profile-picture.png", about:"Estudiante", fecha:"01/03/2020", saldo:100, limite_gastos:300, productos:1},
    {Nombre:"John Doe", foto:"../../assets/images/blank-profile-picture.png", about:"Estudiante", fecha:"01/03/2020", saldo:100, limite_gastos:300, productos:1}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

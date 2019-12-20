import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  
  usuario:usuario={
    nombre :null,
    apellido:null,
    email:null,
    pais:"",
    sexo:null,
    acepta:false
  }

  paises:object[]=[
    {codigo:"ESP",nombre:"España"},
    {codigo:"ARG",nombre:"Argentina"},
    {codigo:"COL",nombre:"Colombia"}
  ]

  sexo:string[]=["Hombre","Mujer","Indistinto"]

  constructor() { }

  ngOnInit() {
  }


  guardar(form:NgForm){
    console.log('formulario',form)
    console.log('formulario valor',form.value);
    console.log('usuario',this.usuario)
  }
}

interface usuario{
  nombre:string,
  apellido:string,
  email:string,
  pais:string,
  sexo:String,
  acepta:boolean
}

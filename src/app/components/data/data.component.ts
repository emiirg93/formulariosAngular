import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormArray } from "@angular/forms";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  form: FormGroup;

  // usuario:Object = {
  //   nombreCompleto:{
  //     nombre: 'Emiliano',
  //     apellido: 'rago'
  //   },
  //   correo: 'emiliano.rg93@gmail.com',
  //   pasatiempos: ['cagar']
  // }

  constructor() {
    this.form = new FormGroup({

      nombreCompleto: new FormGroup({
        nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
        apellido: new FormControl('', [Validators.required, this.noRago ])
      }),
      correo: new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      pasatiempos:new FormArray([
        new FormControl('', Validators.required)
      ]),
      password1: new FormControl('',[Validators.required]),
      password2: new FormControl()
      
    })
    //otra forma de hacer las validaciones
    this.form.controls['password2'].setValidators([
      Validators.required,
      this.noIgual.bind(this)
    ])
  }

  ngOnInit() {
    //this.form.setValue(this.usuario);
    console.log(this.form)
  }

  guardarCambios() {
    console.log(this.form.value);
    console.log(this.form);
    //this.form.reset();
  }

  agregarPasatiempo(){
    (<FormArray>this.form.controls['pasatiempos']).push(
      new FormControl('',Validators.required)
    )
  }

  
  noRago(control:FormControl): {[s:string]:boolean} {

    if(control.value === "rago"){
      return {noRago:true}
    }

    return null;

  }

  noIgual(control:FormControl): {[s:string]:boolean} {

    let form:any = this;
    
    if(control.value !== form.controls['password1'].value){
      return {noIguales:true}
    }

    return null;

  }

}

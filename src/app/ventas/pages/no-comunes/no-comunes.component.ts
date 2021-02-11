import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
//i18nselect
 nombre:string='Antonio';
 genero:string = 'masculino';

 invitacionMapa:{}={
   'masculino':'invitarlo',
   'femenino': 'invitarla'
 }

//i18nplural
 clientes: string[]=['Maria', 'Pedro','Hernando', 'Fernando','Eduardo'];
 clientesMapa={
   '=0': 'no tenemos ningun cliente esperando.',
   '=1': 'tenemos un cliente esperando.',
   '=2': 'tenemos 2 clientes esperando.',
   'other': 'tenemos # clientes esperando.',
}

cambiarCliente(){
  this.genero='femenino'
  this.nombre = 'Valeria'
}
eleminarCliente(){
  this.clientes.pop();
}

//Keyvalue Pipe
persona={
  nombre: 'Antonio',
  edad: 22,
  direccion:'Ojinaga'
}

//jsonPipe
heroes = [{
  nombre:'Superman',
  vuela: true
},
{
  nombre:'Batman',
  vuela: false
},
{
  nombre:'Aquaman',
  vuela: true
}]

//AsyncPipe
miObservable=interval(100);
valorPromesa=new Promise ((resolve, reject)=> {
  setTimeout(()=>{
    resolve('Tenemos data de promesa');
    },3500);
});
}

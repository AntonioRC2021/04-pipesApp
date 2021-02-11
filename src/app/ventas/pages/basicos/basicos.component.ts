import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

 nombreLower: string ='antonio'
 nombreUpper: string ='ANTONIO'
 nombreCompleto: string ='anToNio rosAS'

 fecha:Date=new Date;
}

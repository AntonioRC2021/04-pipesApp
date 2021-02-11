import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pipesApp';

  nombre:string = 'Antonio rosas'
  valor: number = 1000;
  obj: {} = {
    nombre: 'Antonio'
  }

  constructor(private primengConfig:PrimeNGConfig){

  }

  ngOnInit(): void {
    this.primengConfig.ripple=true;
  }
}

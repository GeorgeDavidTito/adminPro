import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress : ElementRef ;

  @Input()
  porcentaje:number =50;
  @Input('nombre')
  leyenda:String='Leyenda';

  @Output()
  cambioValor:EventEmitter<number>=new EventEmitter();


  constructor() { }

  ngOnInit() {
  }


  cambiarValor(valor:number){
    if(this.porcentaje + valor >100){
      return ;
    }
    if(this.porcentaje + valor <0){
      return ;
    }
    this.porcentaje += valor;
    this.cambioValor.emit(this.porcentaje) ;

    this.txtProgress.nativeElement.focus();
  }

  onChanges( valor:number ){

  /*   let elemtHTML: any= document.getElementsByName('porcentaje')[0];
 */
    if(valor > 100 ){
      this.porcentaje= 100;

    }
    if(valor < 0 ){
      this.porcentaje= 0;
    }
    
    /* elemtHTML.value= this.porcentaje; */
    this.txtProgress.nativeElement.value= this.porcentaje;

    this.cambioValor.emit(this.porcentaje);

  }
}

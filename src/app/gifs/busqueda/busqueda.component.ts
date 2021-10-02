import { Component,ElementRef,ViewChild} from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {

  // ! operadora para asegurarse que el objeto no es nulo
  //  ViewChild va a byscar en el html el elemento que tenga un referencia local llamada txtbyscar
  @ViewChild('txtBuscar') txtBuscar!:ElementRef <HTMLInputElement>;

     buscar(){
        const valor = this.txtBuscar.nativeElement.value;
        this.txtBuscar.nativeElement.value='';
     }

}

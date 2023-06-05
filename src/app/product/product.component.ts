import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../shared/producto.service';
import { ProductoModel } from '../shared/producto.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements  OnInit{
  @Input() view: 'grid' | 'list' | 'currcartitem' | 'prevcartitem'= 'grid';
  @Input() id: number;
  @Input() imageSrc: string;
  @Input() header: string;
  @Input() title: string;
  @Input() description: string;
  @Input() price: number;
  @Input() availableProducts: number;

  idoniniti = ''
  producto = new ProductoModel("","",0);

  constructor(
    private http: HttpClient,
    private router: Router,
    private productoService: ProductoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    this.idoniniti = this.route.snapshot.params['idoniniti']
    if(this.idoniniti) {
      console.log("EDITAR");
      this.productoService.obtenerProducto(this.idoniniti).subscribe(data => {
        this.producto = data[0]
      }, error => {
        console.log(error);
      })
    } else {
      console.log("CREAR");
    }
  }

  comprarId(id: any) {
    console.log('Comprar producto con id: ' + id);

    
      this.productoService.comprarProducto(this.producto).subscribe(data => {
        alert(data)
        this.router.navigate(['/productos'])
      })
    

  }

  comprarProducto(productId: number) {
  // Lógica para realizar la compra del producto
    this.http.post(`http://localhost:3000/productos/comprar/${productId}`, {})
      .subscribe(
        (response) => {
          // Éxito: la compra se realizó correctamente
          console.log('La compra se realizó correctamente');
        },
        (error) => {
          // Error: la compra no se pudo realizar
          console.error('Ocurrió un error al realizar la compra');
        }
      );
  }

}

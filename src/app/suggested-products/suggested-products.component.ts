import { Component, Input, OnInit} from '@angular/core';
import { Category } from '../models/models';


@Component({
  selector: 'app-suggested-products',
  templateUrl: './suggested-products.component.html',
  styleUrls: ['./suggested-products.component.css']
})
export class SuggestedProductsComponent implements OnInit{
  @Input() category: Category = {
    id: 0,
    category: '',
    subcategory: '',
  }
  @Input() count: number=3;

  suggestedProducts = [
    {
      id:1,
      imageSrc: '../../assets/Images/herramientas/cajaherramientas.jpg',
      header: 'Caja de herramientas',
      title: 'Almacenamiento y organización',
      description: 'Caja de herramientas resistente y duradera con múltiples compartimentos y cierres metálicos. Ideal para almacenar y transportar herramientas.',
      price: 40,
      availableProducts: 20
    },
    {
      id:2,
      imageSrc: '../../assets/Images/herramientas/cintametrica.jpg',
      header: 'Cinta métrica',
      title: 'Medición y nivelación',
      description: 'Cinta métrica de 5 metros con carcasa resistente y sistema de bloqueo. Graduada en centímetros y pulgadas, ideal para trabajos de construcción y bricolaje.',
      price: 10,
      availableProducts: 15
    },
    {
      id:4,
      imageSrc: '../../assets/Images/herramientas/alicateuniversal.jpg',
      header: 'Alicate universal',
      title: 'Herramienta manual',
      description: 'Alicate versátil con mandíbulas dentadas y mango ergonómico antideslizante. Ideal para sujetar, cortar y doblar cables y alambres.',
      price: 15,
      availableProducts: 20
    }
  ];

    constructor() { }
  
    ngOnInit(): void {
    }
}

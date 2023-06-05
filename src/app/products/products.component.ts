import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  view: 'grid' | 'list' = 'list';

  Products = [
    {
      id: 1,
      imageSrc: '../../assets/Images/herramientas/cajaherramientas.jpg',
      header: 'Caja de herramientas',
      title: 'Almacenamiento y organización',
      description: 'Caja de herramientas resistente y duradera con múltiples compartimentos y cierres metálicos. Ideal para almacenar y transportar herramientas.',
      price: 40,
      availableProducts: 20
    },
    {
      id: 2,
      imageSrc: '../../assets/Images/herramientas/cintametrica.jpg',
      header: 'Cinta métrica',
      title: 'Medición y nivelación',
      description: 'Cinta métrica de 5 metros con carcasa resistente y sistema de bloqueo. Graduada en centímetros y pulgadas, ideal para trabajos de construcción y bricolaje.',
      price: 10,
      availableProducts: 15
    },
    {
      id: 3,
      imageSrc: '../../assets/Images/herramientas/martillito.jpg',
      header: 'Martillo de carpintero',
      title: 'Herramienta manual',
      description: 'Martillo de carpintero de acero forjado con mango de madera maciza. Ideal para clavar y extraer clavos en trabajos de construcción y carpintería.',
      price: 18,
      availableProducts: 15
    },
    {
      id: 4,
      imageSrc: '../../assets/Images/herramientas/alicateuniversal.jpg',
      header: 'Alicate universal',
      title: 'Herramienta manual',
      description: 'Alicate versátil con mandíbulas dentadas y mango ergonómico antideslizante. Ideal para sujetar, cortar y doblar cables y alambres.',
      price: 15,
      availableProducts: 20
    },
    {
      id: 5,
      imageSrc: '../../assets/Images/herramientas/pinturas.jpg',
      header: 'Pintura acrílica',
      title: 'Pintura y acabados',
      description: 'Pintura acrílica de secado rápido y acabado mate. Adecuada para uso en interiores y exteriores en diversos materiales como madera, metal y yeso.',
      price: 8,
      availableProducts: 30
    },
    {
      id: 6,
      imageSrc: '../../assets/Images/herramientas/guantesseguridad.jfif',
      header: 'Guantes de seguridad',
      title: 'Seguridad y protección',
      description: 'Guantes de seguridad resistentes a cortes, abrasiones y productos químicos. Ideales para proteger las manos durante trabajos en construcción, jardinería y manejo de productos químicos.',
      price: 8,
      availableProducts: 16
    },
    {
      id: 7,
      imageSrc: '../../assets/Images/herramientas/cintadoblecara.jpg',
      header: 'Cinta adhesiva de doble cara',
      title: 'Adhesivos y selladores',
      description: 'Cinta adhesiva de doble cara de alta adherencia. Ideal para fijar objetos en superficies lisas como vidrio, metal y plástico.',
      price: 5,
      availableProducts: 30
    },
    {
      id: 8,
      imageSrc: '../../assets/Images/herramientas/tornillostuercas.jpg',
      header: 'Tornillos y tuercas surtidos',
      title: 'Ferretería en general',
      description: 'Set de tornillos y tuercas de diferentes tamaños y tipos (cabeza plana, cabeza hexagonal, etc.). Ideal para tener un surtido de elementos de fijación.',
      price: 5,
      availableProducts: 21
    }

  ];

  constructor(  ) {}

  ngOnInit(): void {
  }

  

}

import { Component, OnInit } from '@angular/core';
import { SuggestedProduct } from '../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  suggestedProducts: SuggestedProduct[] = [
    {
      banerimage: 'Baner/ferrebanner.png',
      category: {
        id: 1,
        category: 'electronics',
        subcategory: 'mobiles'
      }
    }
  ];
  constructor() {}

  ngOnInit(): void {
  }

}

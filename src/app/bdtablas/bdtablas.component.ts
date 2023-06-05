import { Component, OnInit } from '@angular/core';
import { DispensingModel } from '../shared/tabla.model';
import { TablaService } from '../shared/tabla.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bdtablas',
  templateUrl: './bdtablas.component.html',
  styleUrls: ['./bdtablas.component.css']
})
export class BDtablasComponent implements OnInit{
  dispensinglog: Observable<DispensingModel[]> | undefined;

  constructor(private tablaservice: TablaService) { }

  ngOnInit() {
      this.dispensinglog = this.tablaservice.obtenerTabla();
  }

}

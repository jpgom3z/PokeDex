import { Component, OnInit } from '@angular/core';
import { FilterService } from '@services/filter.service';
// import { Subscription } from 'rxjs';
import { TypeData, TypeResults } from '@models/type';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit {

  public filters: TypeResults[];

  constructor( private filterService: FilterService) {this.filters = [];}

  // Solucion: El parametro data debia ser de tipo TypeData. 
  ngOnInit(){
    this.filterService.list().subscribe((data : TypeData) => {
      this.filters = data.results;
      console.log(this.filters)
    })
  }
}
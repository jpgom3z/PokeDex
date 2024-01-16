import { Component, OnInit } from '@angular/core';
import { TypeData, TypeResults } from '@models/type';
import { FilterService } from '@services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

public data: TypeResults[];

constructor(
  private filterService: FilterService
){
  this.data = [];
}

public ngOnInit(): void {
  this.filterService.list().subscribe((data) => {
    this.data = data.results;
    console.log(this.data);
  });
}

  // filterTypes = ['normal', 'fire', 'water', 
  //               'grass', 'electric', 'ice', 
  //               'fighting', 'poison', 'ground', 
  //               'flying', 'psychic', 'bug', 'rock', 
  //               'ghost', 'dark', 'dragon', 'steel', 
  //               'fairy'];
}

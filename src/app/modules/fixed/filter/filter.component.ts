import { Component, OnInit } from '@angular/core';
import { FilterService } from '@services/filter.service';
import { Subscription } from 'rxjs';
import { Type } from '@models/type';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  public filters: Type[];

  constructor(
    private filterService: FilterService
  ) {
    this.filters = [];
  }

  public ngOnInit(): void {
    this.filterService.list().subscribe((data) => {
        this.filters = data;
    });
  }

  // filterTypes = ['normal', 'fire', 'water', 
  //               'grass', 'electric', 'ice', 
  //               'fighting', 'poison', 'ground', 
  //               'flying', 'psychic', 'bug', 'rock', 
  //               'ghost', 'dark', 'dragon', 'steel', 
  //               'fairy'];
}

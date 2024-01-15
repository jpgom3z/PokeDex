import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  filterTypes = ['normal', 'fire', 'water', 
                'grass', 'electric', 'ice', 
                'fighting', 'poison', 'ground', 
                'flying', 'psychic', 'bug', 'rock', 
                'ghost', 'dark', 'dragon', 'steel', 
                'fairy'];
}

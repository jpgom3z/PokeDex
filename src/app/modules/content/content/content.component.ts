import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  cardsData = Array.from({ length: 12 }, (_, index) => ({
    id: `#001`,
    imageUrl: `../../../../assets/img/1.png`,
    pokemonId: `#001`,
    pokemonName: `Bulbasor`,
    types: ['Grass', 'Poison'],
    stats: ['7M', '69KG']
  }));
}

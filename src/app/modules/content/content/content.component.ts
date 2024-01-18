
import { Component, OnInit } from '@angular/core';
import { ContentService } from '@services/content/content.service';
import { Pokemon } from '@models/pokemon';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {

  public pokemones: Pokemon[];

  constructor( private contentService: ContentService) {this.pokemones = [];}

  ngOnInit(){
    for (let i = 1; i < 151; i++) {
      this.contentService.get(i).subscribe((data: any) => { 
          const extractedData: Pokemon = {
            name: data.name,
            height: data.height,
            weight: data.weight,
            types : data.types,
            sprites : data.sprites

          };
          this.pokemones.push(extractedData);
        }
      );
    }
    console.log(this.pokemones);
    }
}
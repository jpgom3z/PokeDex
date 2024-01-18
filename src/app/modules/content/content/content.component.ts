import { Component, OnInit } from '@angular/core';
import { ContentService } from '@services/content/content.service';
import { Subscription } from 'rxjs';
import { TypeData, TypeResults } from '@models/type';
import { Pokemon, pokemonData } from '@models/pokemon';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {

  public content: Pokemon[];

  constructor( private contentService: ContentService) {this.content = [];}

  // Solucion: El parametro data debia ser de tipo TypeData. 
  ngOnInit(){
    this.contentService.get(1).subscribe((data : pokemonData) => {
      this.content = data.results;
      console.log(this.content)
    })
  }
}




import { Component, OnInit } from '@angular/core';
import { ContentService } from '@services/content/content.service';
import { Subscription } from 'rxjs';
import { pokemonData } from '@models/pokemon';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {

  public content: pokemonData;
  private subscriptions: Subscription;

  constructor( private contentService: ContentService) {
    this.content = null;
    this.subscriptions = new Subscription();}
  // // Solucion: El parametro data debia ser de tipo TypeData. 
  ngOnInit(){
    this.contentService.get(1).subscribe((data : pokemonData) => {
      this.content = data;
      console.log(this.content)
    })
  }
}




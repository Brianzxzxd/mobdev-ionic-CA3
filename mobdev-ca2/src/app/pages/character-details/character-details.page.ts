import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

 characters: Observable<any>;
 
  constructor(private router: Router, private api: ApiService) { }
 
  ngOnInit() {
      this.characters = this.api.getCharacters();
      this.characters.subscribe(data =>
      {
     console.log('my characters:', data);

      });
  }
  
openDetails(character)
{
let characterId= character.char_Id;
this.router.navigateByUrl(`tabs/characters/${characterId}`);

}

}
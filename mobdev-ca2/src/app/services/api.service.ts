import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
 getEpisodes()
  {
    return this.http.get(`https://8101-ae2397c2-d0ef-450e-84b1-44c7e86f9fcf.ws-eu01.gitpod.io/tabs/episodes.json`)
    
  }
  getEpisode(id)
  {

    return this.http.get(`https://8101-ae2397c2-d0ef-450e-84b1-44c7e86f9fcf.ws-eu01.gitpod.io/tabs/episode.json`);
  
  }
   getCharacters()
  {
    return this.http.get(`https://8101-ae2397c2-d0ef-450e-84b1-44c7e86f9fcf.ws-eu01.gitpod.io/tabs/characters.json`)
    
  }
  getcharacters(id)
  {

    return this.http.get(`https://8101-ae2397c2-d0ef-450e-84b1-44c7e86f9fcf.ws-eu01.gitpod.io/tabs/character.json`)
    
  }
 getQuote()
  {
    return this.http.get(`https://8101-ae2397c2-d0ef-450e-84b1-44c7e86f9fcf.ws-eu01.gitpod.io/assets/quotes.json`)
    
  }
  getQuotes(id)
  {

    return this.http.get(`https://8101-ae2397c2-d0ef-450e-84b1-44c7e86f9fcf.ws-eu01.gitpod.io/assets/quote.json`)
    
  }

 getDeaths()
  {
    return this.http.get(`https://8101-ae2397c2-d0ef-450e-84b1-44c7e86f9fcf.ws-eu01.gitpod.io/assets/deaths.json`)
    
  }
  getDeath(id)
  {

    return this.http.get(`https://8101-ae2397c2-d0ef-450e-84b1-44c7e86f9fcf.ws-eu01.gitpod.io/assets/death.json`)
    
  }
}

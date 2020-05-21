import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
   getEpisodes() {
    return this.http.get('https://fierce-plateau-35840.herokuapp.com/api/episodes');
  }
 /**GET a Episode by ID from breakingbad api website */
  getEpisode(id) {
    return this.http.get(`https://fierce-plateau-35840.herokuapp.com/api/episodes/${id}`);
  }
/**GET characters from breakingbad api website*/
  getCharacters() {
        return this.http.get('https://fierce-plateau-35840.herokuapp.com/api/characters');
    }
/**GET characters by ID from breakingbad api website*/
    getCharacter(id) {
        return this.http.get(`https://fierce-plateau-35840.herokuapp.com/api/characters/${id}`);
    }
    
    /**GET quotes reletad to episodes from breakingbad api website*/
    getQuotes() {
        return this.http.get('https://fierce-plateau-35840.herokuapp.com/api/quotes');
    }
    /**GET quotes by ID reletad to episodes from breakingbad api website*/
    getQuote(id) {
        return this.http.get(`https://fierce-plateau-35840.herokuapp.com/api/quotes/${id}`);
    }
/**GET numbers of deaths reletad to a character from breakingbad api website*/
   getDeaths() {
        return this.http.get(`https://fierce-plateau-35840.herokuapp.com/api/death-count`);
    }
    /**get killers of deaths from breakingbad api website */
    getKillers() {
        return this.http.get(`https://fierce-plateau-35840.herokuapp.com/api/deaths`);
    }
}

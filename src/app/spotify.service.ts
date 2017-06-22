import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';

@Injectable()
export class SpotifyService {
baseAPI:string='https://accounts.spotify.com';
tokenAPI:string='/api/token';
searchAPI:string='/v1/search';
accessToken:string;
clientId:string="82bc8db78384471885ca08b26e55c9ed";
clientSecret:string="7d30535ef6434a74b1eac4bc9358029c";

lastFMID:string='1d522243faec1f2c4211228ce98ea27f';
lastFMURL:string='https://ws.audioscrobbler.com/2.0/?api_key=1d522243faec1f2c4211228ce98ea27f&format=json&method';
  cw:any;
  REDIRECT_URI="http://localhost:4200/callback";
  constructor(private http:Http) {
console.log("spotify service constructor");
/*let header: Headers = new Headers();
      header.append("Authorization", "Basic " + btoa(this.clientId + ":" + this.clientSecret)); 
      header.append("Content-Type", "application/x-www-form-urlencoded");
      this.http.post(this.baseAPI+this.tokenAPI,{grant_type:'client_credentials'},{headers:header}).subscribe((data)=>{console.log(data);console.log("token received");},
      
                                                                                  (error)=>{console.log("Error in TOKEN");console.log(error)});
*/
  
 

//cw.attachEvent("onmessage",this.receiveMessage.bind(this),false);
}

getArtistInfo(id:string){

return this.http.get(this.lastFMURL+"=artist.getInfo&mbid="+id);


}

getSimilarArtist(id:string){
return this.http.get(this.lastFMURL+"=artist.getSimilar&limit=12&mbid="+id);


}

getArtistAlbum(id:string){
return this.http.get(this.lastFMURL+"=artist.getTopAlbums&limit=12&mbid="+id);


}


getArtistTopSongs(id:string){

return this.http.get(this.lastFMURL+"=artist.getTopTracks&limit=12&mbid="+id);


}

getAlbumInfo(id:string){

return this.http.get(this.lastFMURL+"=album.getinfo&mbid="+id);


}

getTrackInfo(id:string){

return this.http.get(this.lastFMURL+"=track.getinfo&mbid="+id);


}
receiveMessage: any = (event: any) =>  {
  console.log("callback received");
  console.log(event);
console.log(event.data);
console.log(event.data['access_token']);
console.log(this.cw.location.href);


}


searchArtist(key:string){

  return this.http.get(this.lastFMURL+"=artist.search&artist="+key)


}



searchAlbum(key:string){

  return this.http.get(this.lastFMURL+"=album.search&album="+key)


}

searchTrack(key:string){

  return this.http.get(this.lastFMURL+"=track.search&track="+key)


}

   isLoggedIn(){

      if(this.accessToken)
      return true;
      else
      return false;

   }

 getLoginURL(scopes) {
            return 'https://accounts.spotify.com/authorize?client_id=' + this.clientId +
              '&redirect_uri=' + encodeURIComponent(this.REDIRECT_URI) +
              '&scope=' + encodeURIComponent(scopes.join(' ')) +
              '&response_type=token';
        }

   login(callback){
        
        

    



   }

}

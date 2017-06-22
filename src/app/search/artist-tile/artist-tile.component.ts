import { Component, OnInit,Input,SimpleChanges,OnChanges } from '@angular/core';
import { SpotifyService } from '../../spotify.service';
@Component({
  selector: 'app-artist-tile',
  templateUrl: './artist-tile.component.html',
  styleUrls: ['./artist-tile.component.css']
})
export class ArtistTileComponent implements OnInit,OnChanges {

@Input()
searchTerm:string;

searchResults:Array<any>;
  constructor(private dataService:SpotifyService) { }

  ngOnInit() {
  
  }

  ngOnChanges(changes:SimpleChanges){

      let c= changes['searchTerm']
      console.log("Track search changes "+this.searchTerm)
        this.dataService.searchArtist(this.searchTerm).subscribe((data)=>{console.log(data.json());
          console.log(JSON.stringify(data.json()));
          this.searchResults=data.json().results.artistmatches.artist;});


  }


}

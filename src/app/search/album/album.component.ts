import { Component, OnInit,Input,OnChanges,SimpleChange,SimpleChanges } from '@angular/core';
import { SpotifyService } from '../../spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit,OnChanges {

@Input()
searchTerm:string;

searchResults:Array<any>;
  constructor(private dataService:SpotifyService) { }

  ngOnInit() {
  
  }

  ngOnChanges(changes:SimpleChanges){

      let c= changes['searchTerm']
      console.log("Track search changes "+this.searchTerm)
        this.dataService.searchAlbum(this.searchTerm).subscribe((data)=>{console.log(data);
          console.log(JSON.stringify(data.json()));
          this.searchResults=data.json().results.albummatches.album;});


  }

}

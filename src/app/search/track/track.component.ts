import { Component, OnInit,Input,OnChanges,SimpleChange,SimpleChanges } from '@angular/core';
import { SpotifyService } from '../../spotify.service';
@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit,OnChanges {

@Input()
searchTerm:string;

searchResults:Array<any>;
  constructor(private dataService:SpotifyService) { }

  ngOnInit() {
  
  }

  ngOnChanges(changes:SimpleChanges){

      let c= changes['searchTerm']
      console.log("Track search changes "+this.searchTerm)
        this.dataService.searchTrack(this.searchTerm).subscribe((data)=>{console.log(data.json());
          console.log(JSON.stringify(data.json()));
          this.searchResults=data.json().results.trackmatches.track;});


  }

}

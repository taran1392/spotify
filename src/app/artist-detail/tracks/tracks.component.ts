import { Component, OnInit,OnDestroy } from '@angular/core';
import { SpotifyService } from '../../spotify.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit,OnDestroy {

paramSub:any;
  constructor(private route:ActivatedRoute,private dataService:SpotifyService) { }
  artist:any;
  tracks:Array<any>;
  id:string;
  backgroundImg:string;
  ngOnInit() {

      this.paramSub=this.route.params.subscribe((params=>{  this.id=params['id'];  
    
                this.dataService.getArtistTopSongs(this.id).subscribe((data)=>{

                  this.tracks=data.json().toptracks.track;
                  
                  console.log(this.tracks);
                
                },
                (error)=>console.log(error)

                  );

 }));
  }


  ngOnDestroy(){
if(this.paramSub)
    this.paramSub.unsubscribe();

  }

}



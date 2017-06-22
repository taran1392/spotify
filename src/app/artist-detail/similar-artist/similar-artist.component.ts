import { Component, OnInit,OnDestroy } from '@angular/core';
import { SpotifyService } from '../../spotify.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-similar-artist',
  templateUrl: './similar-artist.component.html',
  styleUrls: ['./similar-artist.component.css']
})
export class SimilarArtistComponent implements OnInit,OnDestroy {

paramSub:any;
  constructor(private route:ActivatedRoute,private dataService:SpotifyService) { }
  artists:any;
  id:string;
  backgroundImg:string;
  ngOnInit() {

      this.paramSub=this.route.params.subscribe((params=>{  this.id=params['id'];  
    
                this.dataService.getSimilarArtist(this.id).subscribe((data)=>{

                  this.artists=data.json().similarartists.artist;
                  
                  console.log(this.artists);
                  
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


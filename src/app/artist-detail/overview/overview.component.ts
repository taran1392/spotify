import { Component, OnInit,OnDestroy } from '@angular/core';
import { SpotifyService } from '../../spotify.service';
import {ActivatedRoute}  from '@angular/router';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit,OnDestroy {

paramSub:any;
  constructor(private route:ActivatedRoute,private dataService:SpotifyService) { }
  artist:any;
  id:string;
  backgroundImg:string;
  ngOnInit() {

      this.paramSub=this.route.params.subscribe((params=>{  this.id=params['id'];  
    
                this.dataService.getArtistInfo(this.id).subscribe((data)=>{

                  this.artist=data.json().artist;
                  
                  console.log(this.artist);
                  this.backgroundImg=this.artist.image[4]['#text'];

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


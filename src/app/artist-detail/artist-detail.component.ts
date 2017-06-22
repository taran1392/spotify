import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit,OnDestroy {

paramSub:any;
  constructor(private route:ActivatedRoute,private dataService:SpotifyService,private router:Router) { }
  artist:any;
  id:string;
  backgroundImg:string;
  ngOnInit() {

      this.paramSub=this.route.params.subscribe((params=>{  this.id=params['id'];  
               this.router.navigate(['artist',this.id,'overview',this.id]);
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

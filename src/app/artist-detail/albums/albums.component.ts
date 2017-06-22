import { Component, OnInit,OnDestroy } from '@angular/core';
import { SpotifyService } from '../../spotify.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit,OnDestroy {

paramSub:any;
  constructor(private route:ActivatedRoute,private dataService:SpotifyService) { }
  artist:any;
  albums:Array<any>;
  id:string;
  backgroundImg:string;
  ngOnInit() {

      this.paramSub=this.route.params.subscribe((params=>{  this.id=params['id'];  
    
                this.dataService.getArtistAlbum(this.id).subscribe((data)=>{

                  this.albums=data.json().topalbums.album;
                  
                  console.log(this.albums);
                
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


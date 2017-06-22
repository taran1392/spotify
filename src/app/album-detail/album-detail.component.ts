import { Component, OnInit,OnDestroy } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit,OnDestroy {

paramSub:any;
  constructor(private route:ActivatedRoute,private dataService:SpotifyService) { }
  album:Array<any>;
  id:string;
  backgroundImg:string;
  ngOnInit() {

      this.paramSub=this.route.params.subscribe((params=>{  this.id=params['id'];  
    
                this.dataService.getAlbumInfo(this.id).subscribe((data)=>{

                  this.album=data.json().album;
                  
                  console.log(this.album);
                
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


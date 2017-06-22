import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Subscription } from 'rxjs/RX';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit,OnDestroy {
filterStr:string='track';
 searchResults:Array<any>; 
 subscription:Subscription;
 searchTerm:string;
  constructor(private route:ActivatedRoute,private spotifyService:SpotifyService) { }

  ngOnInit() {

    this.subscription=  this.route.params.subscribe(params=>{ console.log("New search received" );console.log(params); 
    this.searchTerm=params['q'];  });
  }


  filter(type:string){


      this.filterStr=type;
  }

ngOnDestroy(){

  this.subscription.unsubscribe();
}
  

}

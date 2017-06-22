import { Component } from '@angular/core';
import { Router,ActivatedRoute }  from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  test="test property";
  searchStr:string;
constructor(private router:Router,private route:ActivatedRoute){

this.route.params.subscribe(data=>{ console.log(data); })
this.route.data.subscribe(data=>console.log(data));

}


search(){
console.log("search called"+this.searchStr)
  this.router.navigate(['/search',this.searchStr]);


}
  
}

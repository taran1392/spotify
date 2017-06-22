import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';
import { SpotifyService } from './spotify.service';
import { TrackComponent } from './search/track/track.component';
import { AlbumComponent } from './search/album/album.component';
import { ArtistTileComponent } from './search/artist-tile/artist-tile.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { TrackDetailComponent } from './track-detail/track-detail.component';
import { BackgroundDirective } from './background.directive';
import { OverviewComponent } from './artist-detail/overview/overview.component';
import { TracksComponent } from './artist-detail/tracks/tracks.component';
import { AlbumsComponent } from './artist-detail/albums/albums.component';
import { SimilarArtistComponent } from './artist-detail/similar-artist/similar-artist.component';
import { DurationPipe } from './duration.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
  
    TrackComponent,
    AlbumComponent,
    ArtistTileComponent,
    ArtistDetailComponent,
    AlbumDetailComponent,
    TrackDetailComponent,
    BackgroundDirective,
    OverviewComponent,
    TracksComponent,
    AlbumsComponent,
    SimilarArtistComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
{path:'callback/:data',component:AppComponent},
        {path:'search/:q',component:SearchComponent},
        {path:'artist/:id',component:ArtistDetailComponent,
        children:[{

            path:'overview/:id',component:OverviewComponent

        },{

          path:'albums/:id',component:AlbumsComponent
        },{

          path:'tracks/:id',component:TracksComponent
        },{

          path:'similar/:id',component:SimilarArtistComponent
        }]
    },
    {path:'album/:id',component:AlbumDetailComponent},
        
{path:'*',component:AppComponent}
    ])
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

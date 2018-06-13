import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { TvshowListComponent } from './tvshow-list/tvshow-list.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { AboutComponent } from './about/about.component';
// import { CompletenessPipe } from './completeness.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieSearchComponent,
    TvshowListComponent,
    // CompletenessPipe,
    LoginComponent,
    WelcomeComponent,
    MovieDetailComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

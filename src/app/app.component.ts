import { Component } from '@angular/core';
import { Movie } from './models/movies.model';
import { TvShow } from './models/tvshows.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'netflix-remake';

  masterMovieList: Movie[] = [
    new Movie('Solo: A Star Wars Story', 'PG-13', 'Action/Thriller/Fantasy', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtLWM5o-y-72inQkOQuCFCM2Yx_kvnOLxSGFdHdQCnb3Wls_3E1NMlCQ'),
    new Movie('Ready Player One', 'PG-13', 'Action/Thriller/Fantasy', 'http://t0.gstatic.com/images?q=tbn:ANd9GcQsdKo9kNvc88uK7_G6cxhPQcqd2pjP5W__NKQ8HNU0-gWn9-fa'),
    new Movie('DeadPool 2', 'R', 'Comedy/Action/Thriller', 'http://t2.gstatic.com/images?q=tbn:ANd9GcTkbXNbwGV0npOKCGSndE-YCGpRb2xQDRV8VyMfGlsEfej-sVMv'),
    new Movie('Oceans 8', 'PG-13', 'Mystery/Comedy/Thriller', 'https://pbs.twimg.com/media/DRBvJVdV4AAKXeO.jpg:large'),
    new Movie('Incredibles 2', 'PG', 'Family/Action', 'http://t1.gstatic.com/images?q=tbn:ANd9GcToVxv9Pjks-gNiQo7xdCsU8kAzgbHfHd3c6PC9tWKe2RgXBlkI'),
    new Movie('Hotel Artemis', 'R', 'Action/Thriller/Comedy', 'http://t0.gstatic.com/images?q=tbn:ANd9GcQcV4REDtRQfcPRgpaEliePGpuYDZ1dUmzpr6o3DutzUv2FJ2TE')
  ];

  masterTvShowList: TvShow[] = [
    new TvShow('Arrested Development', 'TV-MA', 'Comedy', 'http://www.gstatic.com/tv/thumb/tvbanners/9899632/p9899632_b_v8_aa.jpg'),
    new TvShow('13 Reasons Why', 'TV-MA', 'Drama/Mystery/Thriller', 'http://www.gstatic.com/tv/thumb/tvbanners/13762579/p13762579_b_v8_aa.jpg'),
    new TvShow('Stranger Things', 'TV-14', 'Horror/Mystery/Adventure', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_.jpg'),
    new TvShow('Black Mirror', 'TV-MA', 'Horror/Fantasy/Sci-Fi/Thriller', 'https://m.media-amazon.com/images/M/MV5BNTEwYzNiMGUtNzRlYS00MTMzLTliNzgtOGUxZGZiNThlNWYwXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX182_CR0,0,182,268_AL_.jpg'),
    new TvShow('Series of Unfortunate Events', 'PG', 'Family/Mystery/Comedy/Adventure', 'http://www.gstatic.com/tv/thumb/tvbanners/13361301/p13361301_b_v8_ab.jpg'),
    new TvShow('House of Cards', 'TV-MA', 'Drama/Thriller', 'http://www.gstatic.com/tv/thumb/tvbanners/13835596/p13835596_b_v8_aa.jpg')
  ];
}

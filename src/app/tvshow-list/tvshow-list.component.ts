import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TvShow } from '../models/tvshows.model';

@Component({
  selector: 'app-tvshow-list',
  templateUrl: './tvshow-list.component.html',
  styleUrls: ['./tvshow-list.component.css']
})
export class TvshowListComponent {
  @Input() childTvShowList: TvShow[];
  @Output() clickSender = new EventEmitter();

  tvshows: TvShow[] = [
    new TvShow('Arrested Development', 'TV-MA', 'Comedy', 'http://www.gstatic.com/tv/thumb/tvbanners/9899632/p9899632_b_v8_aa.jpg'),
    new TvShow('13 Reasons Why', 'TV-MA', 'Drama/Mystery/Thriller', 'http://www.gstatic.com/tv/thumb/tvbanners/13762579/p13762579_b_v8_aa.jpg'),
    new TvShow('Stranger Things', 'TV-14', 'Horror/Mystery/Adventure', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_.jpg'),
    new TvShow('Black Mirror', 'TV-MA', 'Horror/Fantasy/Sci-Fi/Thriller', 'https://m.media-amazon.com/images/M/MV5BNTEwYzNiMGUtNzRlYS00MTMzLTliNzgtOGUxZGZiNThlNWYwXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX182_CR0,0,182,268_AL_.jpg'),
    new TvShow('Series of Unfortunate Events', 'PG', 'Family/Mystery/Comedy/Adventure', 'http://www.gstatic.com/tv/thumb/tvbanners/13361301/p13361301_b_v8_ab.jpg'),
    new TvShow('House of Cards', 'TV-MA', 'Drama/Thriller', 'http://www.gstatic.com/tv/thumb/tvbanners/13835596/p13835596_b_v8_aa.jpg')
  ];

}

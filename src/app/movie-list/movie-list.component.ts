import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../models/movies.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  @Input() childMovieList: Movie[];
  @Output() clickSender = new EventEmitter();

  tasks: Movie[] = [
    new Movie('Solo: A Star Wars Story', 'PG-13', 'Action/Thriller/Fantasy', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtLWM5o-y-72inQkOQuCFCM2Yx_kvnOLxSGFdHdQCnb3Wls_3E1NMlCQ'),
    new Movie('Ready Player One', 'PG-13', 'Action/Thriller/Fantasy', 'http://t0.gstatic.com/images?q=tbn:ANd9GcQsdKo9kNvc88uK7_G6cxhPQcqd2pjP5W__NKQ8HNU0-gWn9-fa'),
    new Movie('DeadPool 2', 'R', 'Comedy/Action/Thriller', 'http://t2.gstatic.com/images?q=tbn:ANd9GcTkbXNbwGV0npOKCGSndE-YCGpRb2xQDRV8VyMfGlsEfej-sVMv'),
    new Movie('Oceans 8', 'PG-13', 'Mystery/Comedy/Thriller', 'https://pbs.twimg.com/media/DRBvJVdV4AAKXeO.jpg:large'),
    new Movie('Incredibles 2', 'PG', 'Family/Action', 'http://t1.gstatic.com/images?q=tbn:ANd9GcToVxv9Pjks-gNiQo7xdCsU8kAzgbHfHd3c6PC9tWKe2RgXBlkI'),
    new Movie('Hotel Artemis', 'R', 'Action/Thriller/Comedy', 'http://t0.gstatic.com/images?q=tbn:ANd9GcQcV4REDtRQfcPRgpaEliePGpuYDZ1dUmzpr6o3DutzUv2FJ2TE')
  ];


}

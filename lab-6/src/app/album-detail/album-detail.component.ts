import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Albums } from '../albums';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  standalone: false,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  album: Albums = {} as Albums;
  newAlbum: Albums = {} as Albums;
  load: boolean = false;
  error: string | null = null;

  constructor(
    private albumsService: AlbumsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getId();
  }

  getId() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.load = false;
      this.albumsService.getAlbum(id).subscribe({
        next: (album) => {
          this.album = album;
          this.newAlbum.title = album.title; // Initialize newAlbum title
          this.load = true;
        },
        error: (err) => {
          this.error = err.message;
          this.load = true;
        }
      });
    });
  }

  updateAlbum() {  // Ensure this function exists and is correctly named
    if (!this.newAlbum.title) return;

    this.newAlbum.id = this.album.id;
    this.albumsService.updateAlbum(this.newAlbum).subscribe({
      next: (album) => {
        this.album = album;
        this.newAlbum = { ...album }; // Reset newAlbum with updated values
      },
      error: (err) => {
        this.error = err.message;
      }
    });
  }
}

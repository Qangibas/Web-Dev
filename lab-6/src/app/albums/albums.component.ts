import { Component, OnInit } from '@angular/core';
import { Album, AlbumsService } from '../albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  standalone: false,
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];

  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.albumsService.getAlbums()
      .subscribe(albums => this.albums = albums);
  }

  deleteAlbum(id: number): void {
    if (confirm('Are you sure you want to delete this album?')) {
      this.albumsService.deleteAlbum(id)
        .subscribe(() => {
          this.albums = this.albums.filter(album => album.id !== id);
        });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album, AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  standalone: false,
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  editedTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) { }

  ngOnInit(): void {
    this.getAlbum();
  }

  getAlbum(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbumById(id)
      .subscribe(album => {
        this.album = album;
        this.editedTitle = album.title;
      });
  }

  saveAlbum(): void {
    if (this.album) {
      const updatedAlbum = { ...this.album, title: this.editedTitle };
      this.albumsService.updateAlbum(updatedAlbum)
        .subscribe(() => {
          this.album = updatedAlbum;
          alert('Album title updated successfully!');
        });
    }
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }

  goToPhotos(): void {
    if (this.album) {
      this.router.navigate(['/albums', this.album.id, 'photos']);
    }
  }
}

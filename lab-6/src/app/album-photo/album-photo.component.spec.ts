import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPhotosComponent } from './album-photo.component';

describe('AlbumPhotoComponent', () => {
  let component: AlbumPhotosComponent;
  let fixture: ComponentFixture<AlbumPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumPhotosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

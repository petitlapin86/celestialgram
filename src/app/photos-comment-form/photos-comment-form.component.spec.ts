import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosCommentFormComponent } from './photos-comment-form.component';

describe('PhotosCommentFormComponent', () => {
  let component: PhotosCommentFormComponent;
  let fixture: ComponentFixture<PhotosCommentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosCommentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosCommentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

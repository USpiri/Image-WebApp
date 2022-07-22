import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageApiComponent } from './image-api.component';

describe('ImageApiComponent', () => {
  let component: ImageApiComponent;
  let fixture: ComponentFixture<ImageApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

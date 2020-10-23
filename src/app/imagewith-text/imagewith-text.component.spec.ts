import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagewithTextComponent } from './imagewith-text.component';

describe('ImagewithTextComponent', () => {
  let component: ImagewithTextComponent;
  let fixture: ComponentFixture<ImagewithTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagewithTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagewithTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

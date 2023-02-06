import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfinitesliderComponent } from './infiniteslider.component';

describe('InfinitesliderComponent', () => {
  let component: InfinitesliderComponent;
  let fixture: ComponentFixture<InfinitesliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfinitesliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfinitesliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

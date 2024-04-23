import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopVideosComponent } from './top-videos.component';

describe('TopVideosComponent', () => {
  let component: TopVideosComponent;
  let fixture: ComponentFixture<TopVideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TopVideosComponent]
    });
    fixture = TestBed.createComponent(TopVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

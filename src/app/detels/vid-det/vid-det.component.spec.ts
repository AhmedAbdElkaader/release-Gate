import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VidDetComponent } from './vid-det.component';

describe('VidDetComponent', () => {
  let component: VidDetComponent;
  let fixture: ComponentFixture<VidDetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VidDetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VidDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

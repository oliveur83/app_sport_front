import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentationStravaComponent } from './alimentation-strava.component';

describe('AlimentationStravaComponent', () => {
  let component: AlimentationStravaComponent;
  let fixture: ComponentFixture<AlimentationStravaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlimentationStravaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlimentationStravaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

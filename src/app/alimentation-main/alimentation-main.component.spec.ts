import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentationMainComponent } from './alimentation-main.component';

describe('AlimentationMainComponent', () => {
  let component: AlimentationMainComponent;
  let fixture: ComponentFixture<AlimentationMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlimentationMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlimentationMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

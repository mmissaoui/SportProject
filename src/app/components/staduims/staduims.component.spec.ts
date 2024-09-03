import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaduimsComponent } from './staduims.component';

describe('StaduimsComponent', () => {
  let component: StaduimsComponent;
  let fixture: ComponentFixture<StaduimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaduimsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaduimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

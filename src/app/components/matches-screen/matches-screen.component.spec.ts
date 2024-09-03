import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesScreenComponent } from './matches-screen.component';

describe('MatchesScreenComponent', () => {
  let component: MatchesScreenComponent;
  let fixture: ComponentFixture<MatchesScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchesScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

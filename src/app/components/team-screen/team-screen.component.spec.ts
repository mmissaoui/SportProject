import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamScreenComponent } from './team-screen.component';

describe('TeamScreenComponent', () => {
  let component: TeamScreenComponent;
  let fixture: ComponentFixture<TeamScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

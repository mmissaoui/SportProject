import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersScreenComponent } from './players-screen.component';

describe('PlayersScreenComponent', () => {
  let component: PlayersScreenComponent;
  let fixture: ComponentFixture<PlayersScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPalyerComponent } from './edit-palyer.component';

describe('EditPalyerComponent', () => {
  let component: EditPalyerComponent;
  let fixture: ComponentFixture<EditPalyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPalyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPalyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

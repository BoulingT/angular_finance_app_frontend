import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourcesDisplayComponent } from './ressources-display.component';

describe('RessourcesDisplayComponent', () => {
  let component: RessourcesDisplayComponent;
  let fixture: ComponentFixture<RessourcesDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RessourcesDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RessourcesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

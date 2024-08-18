import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepartitionDiagramComponent } from './repartition-diagram.component';

describe('RepartitionDiagramComponent', () => {
  let component: RepartitionDiagramComponent;
  let fixture: ComponentFixture<RepartitionDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepartitionDiagramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepartitionDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

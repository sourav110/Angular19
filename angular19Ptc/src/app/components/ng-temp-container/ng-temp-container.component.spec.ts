import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTempContainerComponent } from './ng-temp-container.component';

describe('NgTempContainerComponent', () => {
  let component: NgTempContainerComponent;
  let fixture: ComponentFixture<NgTempContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgTempContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTempContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

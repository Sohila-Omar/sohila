import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserverComponent } from './observer.component';

describe('ObserverComponent', () => {
  let component: ObserverComponent;
  let fixture: ComponentFixture<ObserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObserverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

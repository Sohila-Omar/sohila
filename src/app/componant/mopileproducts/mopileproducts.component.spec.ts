import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MopileproductsComponent } from './mopileproducts.component';

describe('MopileproductsComponent', () => {
  let component: MopileproductsComponent;
  let fixture: ComponentFixture<MopileproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MopileproductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MopileproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

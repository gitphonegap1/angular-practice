import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraComponentComponent } from './pra-component.component';

describe('PraComponentComponent', () => {
  let component: PraComponentComponent;
  let fixture: ComponentFixture<PraComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PraComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PraComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

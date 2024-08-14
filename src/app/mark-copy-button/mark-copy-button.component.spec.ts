import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkCopyButtonComponent } from './mark-copy-button.component';

describe('MarkCopyButtonComponent', () => {
  let component: MarkCopyButtonComponent;
  let fixture: ComponentFixture<MarkCopyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkCopyButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkCopyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

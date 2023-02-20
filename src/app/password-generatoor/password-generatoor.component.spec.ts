import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordGeneratoorComponent } from './password-generatoor.component';

describe('PasswordGeneratoorComponent', () => {
  let component: PasswordGeneratoorComponent;
  let fixture: ComponentFixture<PasswordGeneratoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordGeneratoorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordGeneratoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModesHomeComponent } from './modes-home.component';

describe('ModesHomeComponent', () => {
  let component: ModesHomeComponent;
  let fixture: ComponentFixture<ModesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModesHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

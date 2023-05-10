import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraSuperiorDesktopComponent } from './barra-superior-desktop.component';

describe('BarraSuperiorDesktopComponent', () => {
  let component: BarraSuperiorDesktopComponent;
  let fixture: ComponentFixture<BarraSuperiorDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraSuperiorDesktopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraSuperiorDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

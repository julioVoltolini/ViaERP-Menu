import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloDesktopComponent } from './modelo-desktop.component';

describe('ModeloDesktopComponent', () => {
  let component: ModeloDesktopComponent;
  let fixture: ComponentFixture<ModeloDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeloDesktopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeloDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugCampoComponent } from './debug-campo.component';

describe('DebugCampoComponent', () => {
  let component: DebugCampoComponent;
  let fixture: ComponentFixture<DebugCampoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebugCampoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugCampoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

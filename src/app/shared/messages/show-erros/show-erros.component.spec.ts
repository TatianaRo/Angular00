import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowErrosComponent } from './show-erros.component';

describe('ShowErrosComponent', () => {
  let component: ShowErrosComponent;
  let fixture: ComponentFixture<ShowErrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowErrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowErrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

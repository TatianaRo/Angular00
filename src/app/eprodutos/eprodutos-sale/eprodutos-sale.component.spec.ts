import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EprodutosSaleComponent } from './eprodutos-sale.component';

describe('EprodutosSaleComponent', () => {
  let component: EprodutosSaleComponent;
  let fixture: ComponentFixture<EprodutosSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EprodutosSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EprodutosSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

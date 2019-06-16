import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTituloComponent } from './search-titulo.component';

describe('SearchTituloComponent', () => {
  let component: SearchTituloComponent;
  let fixture: ComponentFixture<SearchTituloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTituloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

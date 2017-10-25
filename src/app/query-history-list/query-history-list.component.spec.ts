import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryHistoryListComponent } from './query-history-list.component';

describe('QueryHistoryListComponent', () => {
  let component: QueryHistoryListComponent;
  let fixture: ComponentFixture<QueryHistoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryHistoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

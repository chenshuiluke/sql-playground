import { Component, OnInit } from '@angular/core';
import { QueryProcessor } from '../query-processor.service';

@Component({
  selector: 'query-history-list',
  templateUrl: './query-history-list.component.html',
  styleUrls: ['./query-history-list.component.css']
})
export class QueryHistoryListComponent implements OnInit {
  queryList:String[];
  constructor(private queryProcessor: QueryProcessor) {
    this.queryProcessor.getQueryHistoryObservable().subscribe((list) => {
      this.queryList = list;
    });
   }

  ngOnInit() {
  }

}

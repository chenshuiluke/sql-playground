import { Component, OnInit } from '@angular/core';
import { ResultProcessor } from '../result-processor.service';
@Component({
  selector: 'result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent implements OnInit {
  columns:String[];
  constructor(private resultProcessor:ResultProcessor) { 
    this.resultProcessor.getSubject().subscribe((result) => {
      this.columns = this.resultProcessor.getColumns();
    });
  }

  ngOnInit() {
  }

}

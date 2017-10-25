import { Component, OnInit } from '@angular/core';
import { ResultProcessor } from '../result-processor.service';
@Component({
  selector: 'result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent implements OnInit {
  columns:String[];
  rows:any[];
  constructor(private resultProcessor:ResultProcessor) { 
    this.resultProcessor.result.subscribe((result) => {
      try{
        this.columns = this.resultProcessor.getColumns();
        this.rows = this.resultProcessor.getRowResults();
      }
      catch(err){
        this.columns = undefined;
        this.rows = undefined;
        console.log(err);
      }    
    });
  }

  ngOnInit() {
  }

}

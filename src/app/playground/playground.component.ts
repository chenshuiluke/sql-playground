import { Component, OnInit } from '@angular/core';
import { ResultProcessor } from '../result-processor.service';
@Component({
  selector: 'playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  error:String;
  result:any;
  constructor(private resultProcessor:ResultProcessor) {
  }

  ngOnInit() {
  }

  execute(query:String){
    console.log(query);
    alasql.promise(query)
      .then((data) => {
        this.result = data;
        console.log(this.result);
        this.resultProcessor.setResult(this.result);
        this.error = undefined;
      })
      .catch((error) => {
        console.log(error.message);
        this.error = error.message;
      });
  }
}

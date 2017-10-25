import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ResultProcessor } from '../result-processor.service';
import { QueryProcessor } from '../query-processor.service';

@Component({
  selector: 'playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  @ViewChild('editor') editor:ElementRef;
  error:String;
  result:any;
  constructor(private resultProcessor: ResultProcessor, private queryProcessor: QueryProcessor) {
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
        this.queryProcessor.storeQuery(query);
        this.error = undefined;
      })
      .catch((error) => {
        console.log(error.message);
        this.error = error.message;
      });
  }

  executeDemoQuery(){
    let demo:String = `CREATE TABLE IF NOT EXISTS demo (id INT AUTOINCREMENT, name VARCHAR);
    INSERT INTO demo (name) VALUES ("hi"), ("hello"), ("sup"); SELECT * FROM demo;`;
    this.editor.nativeElement.value = demo;
    this.execute(demo);
  }
}

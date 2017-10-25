import { BehaviorSubject } from 'rxjs/BehaviorSubject';
export class ResultProcessor{
    result:BehaviorSubject<any> = new BehaviorSubject({});

    getColumns(){
        let columns:String[] = [];
        let result = this.result.getValue();
        //An array of results...could be result codes for queries like CREATE DATABASE or an array of objects from SELECT
        console.log(result);
        for(let counter = 0; counter < result.length; counter++){
            let item = result[counter];
            //Ignore all items that aren't arrays - only select queries will return column names and they return arrays of objects
            if(item.constructor === Array){
                console.log(item);
                for(let select_result_counter = 0; select_result_counter < item.length; select_result_counter++){
                    let select_result_item = item[select_result_counter];
                    console.log(select_result_item);
                    console.log("here");

                    for(let key in select_result_item){
                        console.log(key);
                        console.log(columns.indexOf(key) < 0);
                        if(columns.indexOf(key) < 0){
                            columns.push(key);
                        }
                    }
                }
            }

        }
        console.log(columns)
        return columns;

    }

    setResult(newResult){
        this.result.next(newResult);
    }

    getSubject(){
        return this.result;
    }
}
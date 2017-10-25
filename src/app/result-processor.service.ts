import { BehaviorSubject } from 'rxjs/BehaviorSubject';
export class ResultProcessor{
    public result:BehaviorSubject<any> = new BehaviorSubject({});

    allElementsHaveSameType(array_res){
        console.log(array_res);
        for(let counter = 0; counter < array_res.length; counter++){
            let item = array_res[counter];
            if(typeof item !== typeof array_res[0]){
                return false;
            }
        }
        return true;
    }

    getRowResults(){
        let result = this.result.getValue();
        let row_results:any[] = [];
        //An array of results...could be result codes for queries like CREATE DATABASE or an array of objects from SELECT
        console.log(result);
        console.log(this.allElementsHaveSameType(result));
        if(this.allElementsHaveSameType(result)){
            console.log(result);
            if(typeof result[0] !== "object"){
                return undefined;
            }
            return result;
        }
        else{
            for(let counter = 0; counter < result.length; counter++){
                let item = result[counter];
                //Ignore all items that aren't arrays - only select queries will return column names and they return arrays of objects
                if(item.constructor === Array){
                    console.log(item);
                    for(let select_result_counter = 0; select_result_counter < item.length; select_result_counter++){
                        let select_result_item = item[select_result_counter];
                        row_results.push(select_result_item);
                    }
                }
    
            }
            console.log(row_results);
            return row_results;
        }

        
    }

    getColumns(){
        let columns:String[] = [];
        let result = this.getRowResults();
        if(result === undefined){
            return undefined;
        }
        for(let counter = 0; counter < result.length; counter++){
            let select_result_item = result[counter];
            for(let key in select_result_item){
                console.log(key);
                console.log(columns.indexOf(key) < 0);
                if(columns.indexOf(key) < 0){
                    columns.push(key);
                }
            }
        }

        return columns;

    }

    setResult(newResult){
        this.result.next(newResult);
    }
}
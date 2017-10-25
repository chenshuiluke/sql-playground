import { BehaviorSubject } from 'rxjs/BehaviorSubject'; 
export class QueryProcessor{
    queryHistory:BehaviorSubject<any> = new BehaviorSubject([]);
    
    constructor(){
        alasql.promise('SET AUTOCOMMIT ON ; CREATE localStorage DATABASE IF NOT EXISTS sql_playground')
        .then(alasql.promise('ATTACH localStorage DATABASE sql_playground AS sql_playground_db'))
        .then(alasql.promise('CREATE TABLE IF NOT EXISTS sql_playground_db.queries (query_text LONGTEXT)'))
        .then((res) => {
            this.getQueryHistoryList();
        })
        .catch((err) => {
            console.log(err.message);
        });
    }

    storeQuery(query:String){
        alasql('INSERT INTO sql_playground_db.queries (?);', [query]);
        this.getQueryHistoryList();
    }

    getQueryHistoryObservable(){
        return this.queryHistory;
    }

    getQueryHistoryList(){
        let result = alasql('SELECT query_text FROM sql_playground_db.queries');
        let list:String[] = [];
        console.log(`result: ` + result);
        for(let counter = 0; counter < result.length; counter++){
            list.push(result[counter].query_text);
        }
        this.queryHistory.next(list);
    }
}
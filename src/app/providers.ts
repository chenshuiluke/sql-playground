import { Provider } from '@angular/core';
import { ResultProcessor } from './result-processor.service';
import { QueryProcessor } from './query-processor.service';
export const providers:Provider[] = [
    {
        provide: ResultProcessor, useClass:ResultProcessor
    },
    {
        provide: QueryProcessor, useClass:QueryProcessor
    }
];
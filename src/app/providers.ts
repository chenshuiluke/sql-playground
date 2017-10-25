import { Provider } from '@angular/core';
import { ResultProcessor } from './result-processor.service';
export const providers:Provider[] = [
    {
        provide: ResultProcessor, useClass:ResultProcessor
    }
];
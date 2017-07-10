import { InMemoryDbService } from 'angular-in-memory-web-api';
import {createTestCustomers} from './test-data';
import { LoggerService } from './logger.service';
import { Customer} from './model';

export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    return {
      customers: createTestCustomers(),
      states: ['California', 'Quebec', 'Jalisco', 'Illinois']
    };
  }
  

}

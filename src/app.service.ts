/**
 * contain core business logic of your application
 * 
 * it main service of your application
 * 
 */

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { Users } from '../users.entity';

@Injectable()
export class UsersInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<Users[]>): Observable<any> {
    console.log(context.getClass())
    return next.handle().pipe(map((data)=>(data.map(({password,...users})=>users))))
  }
}

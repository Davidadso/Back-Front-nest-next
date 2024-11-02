import { CanActivate, ExecutionContext, Get, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(
    context: ExecutionContext
  ): Promise<boolean> {

    const request = context.switchToHttp().getRequest();
    console.log(request.headers.authorization);

    return true;
  }


}
 
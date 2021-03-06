import { ExecutionContext, Injectable } from "@nestjs/common";
import { ExecutionContextHost } from "@nestjs/core/helpers/execution-context-host";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";

type ContextType = boolean | Promise<boolean> | Observable<boolean>;

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    canActivate(context: ExecutionContext): ContextType {
        const ctx = GqlExecutionContext.create(context);
        const { req } = ctx.getContext();
        return super.canActivate(new ExecutionContextHost([req]));
    }
}
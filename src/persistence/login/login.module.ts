import { DatabaseModule } from '@database/database.module';
import { Module } from '@nestjs/common';
import { LoginRepositoryProvider } from './login.provider';

@Module({
    imports: [DatabaseModule],
    providers: [LoginRepositoryProvider],
    exports: [LoginRepositoryProvider]
})
export class LoginRepositoryModule {}

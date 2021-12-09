import { DatabaseModule } from '@database/database.module';
import { Module } from '@nestjs/common';
import { UserRepositoryProvider } from '@persistence/user/user.provider';

@Module({
    imports: [DatabaseModule],
    providers: [UserRepositoryProvider],
    exports: [UserRepositoryProvider]
})
export class UserRepositoryModule {}

import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './shared/auth.service';
import { JwtStrategy } from './shared/jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.AUTH_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService, JwtStrategy]
})
export class AuthModule {}

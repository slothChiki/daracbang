import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RenderModule } from 'nest-next';
import Next from 'next';

let nextDev = false;
if (process.env.NODE_ENV) {
  switch (process.env.NODE_ENV) {
    // @ts-ignore
    case 'default':
    // @ts-ignore
    case 'local':
    // @ts-ignore
    case 'jest': {
      nextDev = true;
    }
  }
}

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

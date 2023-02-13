import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://biplob:biplob123@cluster0.4aca7jg.mongodb.net/?retryWrites=true&w=majority',
    ),
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

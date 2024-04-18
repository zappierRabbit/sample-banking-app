import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BookingModule } from './booking/booking.module';
import { PaymentModule } from './payment/payment.module';
import { ReviewModule } from './review/review.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [UserModule, BookingModule, PaymentModule, ReviewModule, NotificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

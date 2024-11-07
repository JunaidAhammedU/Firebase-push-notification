// src/notification/notification.module.ts
import { Module } from '@nestjs/common';
import { FcmService } from './firebase.service';
import { NotificationController } from './firebase.controller';
@Module({
  controllers: [NotificationController],
  providers: [FcmService],
})
export class NotificationModule {}

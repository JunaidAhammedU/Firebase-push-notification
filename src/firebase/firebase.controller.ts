// src/notification/notification.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { FcmService } from './firebase.service';
import { NotificationPayload } from './firebase.service';

@Controller('notification')
export class NotificationController {
  constructor(private readonly fcmService: FcmService) {}

  @Post('send')
  async sendNotification(
    @Body('deviceToken') deviceToken: string,
    @Body() payload: NotificationPayload,
  ) {
    return this.fcmService.sendNotification(deviceToken, payload);
  }
}

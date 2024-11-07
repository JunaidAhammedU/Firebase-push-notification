import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

export interface NotificationPayload {
  title: string;
  body: string;
  data?: { [key: string]: string };
}

@Injectable()
export class FcmService {
  constructor() {
    const serviceAccount = 'sas'; // require('../serviceAccountKey.json');

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  async sendNotification(
    deviceToken: string,
    payload: NotificationPayload,
  ): Promise<string> {
    const message = {
      token: deviceToken,
      notification: {
        title: payload.title,
        body: payload.body,
      },
      data: payload.data,
    };

    try {
      const response = await admin.messaging().send(message);
      console.log('Successfully sent message:', response);
      return response;
    } catch (error) {
      console.error('Error sending message:', error);
      throw new Error(error);
    }
  }
}

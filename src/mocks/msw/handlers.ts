import { http, HttpResponse } from 'msw';

export const handlers = [
  http.post(
    'https://api.emailjs.com/api/v1.0/email/send',
    async () => {
      // console.log('Catch & mock "api/v1.0/email/send":', request);
      return HttpResponse.text('OK', {
        status: 200,
        headers: {
          'Content-Type': 'text/plain;',
        },
      });
    },
  ),
];

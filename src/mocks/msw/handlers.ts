import { http, HttpResponse } from 'msw'

export const handlers = [
  http.post('https://api.emailjs.com/api/v1.0/email/send', async ({ request }) => {
    console.log('catch!!!', request)
    return HttpResponse.json({
      "lib_version": "4.4.1",
      "user_id": "Nh92M2gAhq4dQ6xdC",
      "service_id": "service_7r0fpth",
      "template_id": "template_yvjcubu",
      "template_params": {
        "email": "prokopenya.work@gmail.com"
      }
    })
  }),
]

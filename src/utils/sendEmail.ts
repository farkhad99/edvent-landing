import { FormData } from '@/components/program/ProgramForm';

export function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';

  return fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.messages);
    })
    .catch((err) => {
      alert(err);
    });
}
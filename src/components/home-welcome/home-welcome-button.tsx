'use client';

import { useRouter } from 'next/navigation';

import Button from '@/lib/button/button';

export default function HomeWelcomeButton() {
  const router = useRouter();

  const onRedirectClick = () => {
    router.push('/book-appointment');
  };

  return <Button size='medium' onClick={onRedirectClick}>Book Appointment</Button>;
}

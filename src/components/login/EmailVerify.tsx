import { useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { Text, Input, Button, FormElement, PressEvent, Loading } from '@nextui-org/react';
import { Lock, Mail } from 'react-feather';

export const EmailVerify = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '' });
  const [isLoading, setIsLoading] = useState(false);

  function changeHandler(event: React.ChangeEvent<FormElement>) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  // async function login(event: PressEvent) {
  //   setIsLoading(true);
  //   const result = await signIn('credentials', { redirect: false, email: formData.email });
  //   if (!result?.error) {
  //     router.replace('/dashboard');
  //   }
  // }

  // async function checkUserExists() {
  //   const result = await fetch('/api/auth/exists', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ email: formData.email }),
  //   }).then((res) => res.json());

  //   return result.userExists;
  // }

  // async function redirectToLoginPage() {
  //   const validEmail = await checkUserExists();
  //   if (validEmail) {
  //     if (formData.email && formData.email.trim() !== '') {
  //       router.push(`/login?username=${encodeURIComponent(formData.email)}`);
  //     } else {
  //       router.push('/login');
  //     }
  //   } else {
  //     toast.error('No user found with this email address.');
  //   }
  // }

  return (
    <div className='login-container'>
      <Text h2 style={{ marginBottom: '28px' }}>
        Log in to Continue
      </Text>
      <form className='login-form'>
        <Input placeholder='email' size='lg' aria-label='email' animated={false} />
        <Button icon={<Mail />} size='lg' bordered color='gradient'>
          Magic Verification
        </Button>
        <Button
          icon={!isLoading && <Lock />}
          size='lg'
          disabled={isLoading}
          onClick={() => {
            setIsLoading(true);
            setTimeout(() => {
              setIsLoading(false);
            }, 2500);
          }}>
          {isLoading && <Loading color='currentColor' size='sm' type='points' />}
          {!isLoading && 'Password Verification'}
        </Button>
      </form>
    </div>
  );
};

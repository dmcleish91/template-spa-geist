import { useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Lock, Mail } from 'react-feather';
import { Text, Input, Button, Loading } from '@nextui-org/react';

type FormValues = {
  email: string;
};

export const EmailVerify = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit } = useForm<FormValues>();

  async function checkUserExists(value: string) {
    const result = await fetch('/api/auth/exists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: value }),
    }).then((res) => res.json());

    return result.userExists;
  }

  async function redirectToLoginPage(value: string) {
    if (value === '' || value === undefined) {
      return;
    }

    setIsLoading(true);
    const validEmail = await checkUserExists(value);
    if (validEmail) {
      if (value && value.trim() !== '') {
        router.push(`/login?username=${encodeURIComponent(value)}`);
      } else {
        router.push('/login');
      }
    } else {
      toast.error('No user found with this email address.');
      setIsLoading(false);
    }
  }

  function onSubmit(data: FormValues) {
    redirectToLoginPage(data.email);
  }

  return (
    <div className='login-container'>
      <Text h2 style={{ marginBottom: '28px' }}>
        Log in to Continue
      </Text>
      <form className='login-form' onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          {...register('email', { required: 'Username is required' })}
          id='email'
          shadow={false}
          size='lg'
          placeholder='Enter a valid email'
          aria-label='email input field'
        />
        <Button icon={<Mail />} size='lg' color='gradient' onPress={() => console.log('Magic button pressed')}>
          Magic Verification
        </Button>
        <Button icon={!isLoading && <Lock />} size='lg' disabled={isLoading} flat type='submit'>
          {isLoading && <Loading color='currentColor' size='sm' type='points' />}
          {!isLoading && 'Password Verification'}
        </Button>
      </form>
    </div>
  );
};

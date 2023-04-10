import { useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { Text, Input, Button, Loading, useInput, Spacer } from '@nextui-org/react';
import { Lock, Mail } from 'react-feather';
import { toast } from 'react-toastify';

type status = 'success' | 'error' | 'default' | 'primary' | 'secondary' | 'warning' | undefined;

export const EmailVerify = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { value, bindings } = useInput('');

  async function checkUserExists() {
    const result = await fetch('/api/auth/exists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: value }),
    }).then((res) => res.json());

    return result.userExists;
  }

  async function redirectToLoginPage() {
    if (value === '' || value === undefined) {
      return;
    }

    setIsLoading(true);
    const validEmail = await checkUserExists();
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

  return (
    <div className='login-container'>
      <Text h2 style={{ marginBottom: '28px' }}>
        Log in to Continue
      </Text>
      <form className='login-form'>
        <Input {...bindings} shadow={false} type='email' size='lg' placeholder='Enter a valid email' />
        <Spacer y={0.2} />
        <Button icon={<Mail />} size='lg' bordered color='gradient'>
          Magic Verification
        </Button>
        <Button icon={!isLoading && <Lock />} size='lg' disabled={isLoading} onClick={redirectToLoginPage}>
          {isLoading && <Loading color='currentColor' size='sm' type='points' />}
          {!isLoading && 'Password Verification'}
        </Button>
      </form>
    </div>
  );
};

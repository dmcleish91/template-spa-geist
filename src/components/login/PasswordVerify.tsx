import { useEffect, useRef, useState } from 'react';
import { Lock } from 'react-feather';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { Button, FormElement, Input, Loading, Text } from '@nextui-org/react';

export const PasswordVerify = () => {
  const router = useRouter();
  const { username } = router.query;

  const [formData, setFormData] = useState({ email: (username as string) || '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (passwordRef.current) {
      passwordRef.current.focus();
    }
  }, []);

  function changeHandler(event: React.ChangeEvent<FormElement>) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function login() {
    setIsLoading(true);
    const result = await signIn('credentials', { redirect: false, email: formData.email, password: formData.password });
    if (!result?.error) {
      router.replace('/dashboard');
    }
    setIsLoading(false);
  }

  return (
    <div className='login-container'>
      <Text h2 style={{ marginBottom: '28px' }}>
        Log in to Continue
      </Text>
      <form className='login-form'>
        <Input name='email' placeholder='Email Address' size='lg' value={formData.email} onChange={changeHandler} />
        <Input
          name='password'
          placeholder='Password'
          type='password'
          size='lg'
          value={formData.password}
          onChange={changeHandler}
          ref={passwordRef}
        />
        <Button icon={!isLoading && <Lock />} onClick={login} size='lg' disabled={isLoading}>
          {isLoading && <Loading color='currentColor' size='sm' />}
          {!isLoading && 'Password Verification'}
        </Button>
      </form>
    </div>
  );
};

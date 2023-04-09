import { useState } from 'react';
import { Lock } from 'react-feather';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { Button, FormElement, Input, Loading, Text } from '@nextui-org/react';

export const PasswordVerify = () => {
  const router = useRouter();
  const { username } = router.query;

  const [formData, setFormData] = useState({ email: (username as string) || '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  function changeHandler(event: React.ChangeEvent<FormElement>) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function login(event: React.FormEvent) {
    setIsLoading(true);
    event.preventDefault();
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
      <form className='login-form' onSubmit={login}>
        <Input name='email' placeholder='Email Address' width='300px' value={formData.email} onChange={changeHandler} />
        <Input name='password' placeholder='Password' width='300px' value={formData.password} onChange={changeHandler} />
        <Button icon={<Lock />} style={{ fontWeight: '500', marginBottom: '24px' }} onClick={login} disabled={isLoading}>
          <Loading color='currentColor' size='sm' />
          Password Verification
        </Button>
      </form>
    </div>
  );
};

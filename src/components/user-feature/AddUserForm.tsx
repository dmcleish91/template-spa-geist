import { Button, Card, Checkbox, Input, Spacer, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';

type FormValues = {
  userId: string;
  isSiteAdmin: boolean;
  firstName: string;
  lastName: string;
  title: string;
  phoneNumber: string;
  password: string;
  agreedToTerms: boolean;
  inactive: boolean;
  forcePasswordChange: boolean;
};

export default function AddUserForm() {
  const router = useRouter();
  const { register, handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      userId: '',
      isSiteAdmin: false,
      firstName: '',
      lastName: '',
      title: '',
      phoneNumber: '',
      password: '',
      agreedToTerms: false,
      inactive: false,
      forcePasswordChange: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted', data);
  };

  return (
    <div style={{ width: '1170px', padding: '24px' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
          <Button flat auto>
            Add
          </Button>
          <Button flat auto>
            Edit
          </Button>
          <Button flat auto type='submit'>
            Save
          </Button>
          <Button flat auto>
            Cancel
          </Button>
          <Button flat auto onPress={() => router.back()}>
            Return
          </Button>
        </div>
        <Spacer y={0.5} />
        <div style={{ display: 'flex', gap: '24px', justifyContent: 'space-around' }}>
          <div>
            <Input label='User ID' id='userId' bordered animated={false} {...register('userId')} />
            <Spacer y={0.5} />
            <Controller
              control={control}
              name='isSiteAdmin'
              render={({ field: { onChange, onBlur, value, name, ref } }) => (
                <Checkbox size='sm' onBlur={onBlur} onChange={onChange} name={name} defaultSelected={value} ref={ref}>
                  Is Site Admin
                </Checkbox>
              )}
            />
            <Spacer y={0.5} />
            <Input label='First Name' bordered animated={false} {...register('firstName')} />
            <Spacer y={0.5} />
            <Input label='Last Name' bordered animated={false} {...register('lastName')} />
            <Spacer y={0.5} />
            <Input label='Title' bordered animated={false} {...register('title')} />
            <Spacer y={0.5} />
            <Input label='Phone Number' bordered animated={false} {...register('phoneNumber')} />
            <Spacer y={0.5} />
            <Input label='Password' bordered animated={false} {...register('password')} />
            <Spacer y={0.5} />
            <Controller
              control={control}
              name='forcePasswordChange'
              render={({ field: { onChange, onBlur, value, name, ref } }) => (
                <Checkbox size='sm' onBlur={onBlur} onChange={onChange} defaultSelected={value} name={name} ref={ref}>
                  Force Password Change
                </Checkbox>
              )}
            />
            <Spacer y={0.5} />
            <Input label='Last Password Change' bordered animated={false} readOnly value='02/09/2023' />
            <Spacer y={0.5} />
            <Input label='Agreed to Terms' id='agreedToTerms' bordered animated={false} {...register('agreedToTerms')} />
            <Spacer y={0.5} />
            <Controller
              control={control}
              name='inactive'
              render={({ field: { onChange, onBlur, value, name, ref } }) => (
                <Checkbox size='sm' onBlur={onBlur} onChange={onChange} defaultSelected={value} name={name} ref={ref}>
                  Inactive
                </Checkbox>
              )}
            />
          </div>
          <div style={{ width: '450px', display: 'flex', alignItems: 'flex-end' }}>
            <Card variant='bordered'>
              <Card.Header>
                <Text b>Additional Information</Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body>
                <Text>Added - 02/01/2023 15:44 PM tester@spectrumware.net</Text>
                <Text>Last Login - 03/21/2023 08:36 AM</Text>
                <Text>Saw Intro - 02/01/2023 15:44 PM</Text>
                <Text>Modified - 02/01/2023 15:44 PM cindy@spectrumware.net</Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
}

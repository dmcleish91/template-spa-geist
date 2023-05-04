import { Button, Card, Checkbox, Input, Spacer, Text } from '@nextui-org/react';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';

type FormValues = {
  userId: string;
  isSiteAdmin: boolean;
  firstName: string;
  lastName: string;
  title: string;
  phoneNumber: string;
  agreedToTerms: boolean;
  inactive: boolean;
  forcePasswordChange: boolean;
};

export default function AddUserForm() {
  const router = useRouter();
  const { id } = router.query;
  const { register, handleSubmit, control } = useForm<FormValues>({
    defaultValues: async () => {
      if (!id) {
        return {
          userId: '',
          isSiteAdmin: false,
          firstName: '',
          lastName: '',
          title: '',
          phoneNumber: '',
          agreedToTerms: false,
          inactive: '',
          forcePasswordChange: false,
        };
      }

      const response = await fetch('http://localhost:3000/api/users/dwight@spectrumware.net');
      const data = await response.json();
      console.log(data);

      return {
        userId: data.user.email,
        isSiteAdmin: data.user.admin,
        firstName: data.user.first,
        lastName: data.user.last,
        title: data.user.title,
        phoneNumber: data.user.phone,
        agreedToTerms: false,
        inactive: data.user.inactive,
        forcePasswordChange: false,
      };
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted', data);
  };

  return (
    <div className='user-form-container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='user-form-buttons-container'>
          <Button auto>Add</Button>
          <Button auto>Edit</Button>
          <Button auto type='submit'>
            Save
          </Button>
          <Button auto>Cancel</Button>
          <Button auto onPress={() => router.back()}>
            Return
          </Button>
        </div>
        <Spacer y={0.5} />
        <div className='user-form'>
          <div>
            <Input label='User ID' id='userId' bordered animated={false} {...register('userId')} />
            <Spacer y={0.5} />
            <Controller
              control={control}
              name='isSiteAdmin'
              render={({ field: { onChange, onBlur, value, name, ref } }) => (
                <Checkbox size='sm' onBlur={onBlur} onChange={onChange} name={name} isSelected={value} ref={ref}>
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
            <Controller
              control={control}
              name='forcePasswordChange'
              render={({ field: { onChange, onBlur, value, name, ref } }) => (
                <Checkbox size='sm' onBlur={onBlur} onChange={onChange} name={name} isSelected={value} ref={ref}>
                  Force Password Change
                </Checkbox>
              )}
            />
            <Spacer y={0.5} />
            <Input label='Last Password Change' bordered animated={false} readOnly value='02/09/2023' />
            <Spacer y={0.5} />
            <Controller
              control={control}
              name='agreedToTerms'
              render={({ field: { onChange, onBlur, value, name, ref } }) => (
                <Checkbox size='sm' onBlur={onBlur} onChange={onChange} name={name} isSelected={value} ref={ref}>
                  Agreed to Terms
                </Checkbox>
              )}
            />
            <Spacer y={0.5} />
            <Controller
              control={control}
              name='inactive'
              render={({ field: { onChange, onBlur, value, name, ref } }) => (
                <Checkbox size='sm' onBlur={onBlur} onChange={onChange} name={name} isSelected={value} ref={ref}>
                  Inactive
                </Checkbox>
              )}
            />
          </div>
          <div className='additional-info'>
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

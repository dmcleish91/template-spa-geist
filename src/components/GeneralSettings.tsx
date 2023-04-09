import { Button, Card, Input, Text } from '@nextui-org/react';
import { toast } from 'react-toastify';

export const GeneralSettings = () => {
  const notify = (message: string) => {
    toast(message);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Text>Your Username</Text>
          <Text>This is your URL namespace within the company.</Text>
          <Input label='username' />
          <Button auto onClick={() => notify('Username updated sucessfully!')}>
            Save
          </Button>
        </Card.Body>
      </Card>
      {/* <Fieldset>
        <Fieldset.Title>Your Name</Fieldset.Title>
        <Fieldset.Subtitle>Please enter your full name, or a display name you are comfortable with.</Fieldset.Subtitle>
        <Fieldset.Subtitle>
          <Input />
        </Fieldset.Subtitle>
        <Fieldset.Footer>
          Please use 32 characters at maximum.
          <Button auto scale={2 / 3} font='12px'>
            Save
          </Button>
        </Fieldset.Footer>
      </Fieldset>
      <Fieldset>
        <Fieldset.Title>Your Email</Fieldset.Title>
        <Fieldset.Subtitle>Please enter the email address you want to use to log in with Vercel.</Fieldset.Subtitle>
        <Fieldset.Subtitle>
          <Input />
        </Fieldset.Subtitle>
        <Fieldset.Footer>
          We will email you to verify the change.
          <Button auto scale={2 / 3} font='12px'>
            Save
          </Button>
        </Fieldset.Footer>
      </Fieldset> */}
    </>
  );
};

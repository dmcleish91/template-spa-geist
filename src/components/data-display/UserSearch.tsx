import { Button, Checkbox, FormElement, Input, Loading } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { CheckCircle, RotateCcw, Search, UserPlus } from 'react-feather';

export default function UserSearch({
  setInputValue,
  checkboxValue,
  setCheckboxValue,
  loading,
  setLoading,
  setTimeoutId,
}: {
  setInputValue: (value: string) => void;
  checkboxValue: string[];
  setCheckboxValue: (value: string[]) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
  setTimeoutId: (value: NodeJS.Timeout) => void;
}) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<FormElement>) => {
    setLoading(true);
    setTimeoutId(
      setTimeout(() => {
        setInputValue(event.target.value);
        setLoading(false);
      }, 300)
    );
  };

  const handleCheckboxChange = (value: string[]) => {
    setCheckboxValue([...value]);
  };

  const handleReset = () => {
    setInputValue('');
    setCheckboxValue([]);
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  };

  return (
    <div className='searchbar'>
      <div className='input-items'>
        <Input
          ref={inputRef}
          contentLeft={<Search />}
          contentRight={loading ? <Loading type='spinner' size='sm' /> : <CheckCircle />}
          name='inputValue'
          placeholder='Search for user...'
          animated={false}
          shadow={false}
          onChange={handleInputChange}
        />
        <Checkbox.Group value={checkboxValue} orientation='horizontal' size='sm' onChange={handleCheckboxChange}>
          <Checkbox value='Active'>Active</Checkbox>
          <Checkbox value='Inactive'>Inactive</Checkbox>
        </Checkbox.Group>
      </div>
      <div className='input-menu'>
        <Button icon={<RotateCcw />} auto onClick={handleReset} />
        <Button icon={<UserPlus />} auto onClick={() => router.push('/management/useredit')} />
        {checkboxValue}
      </div>
    </div>
  );
}

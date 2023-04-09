import { Button, Checkbox, Input, Spinner } from '@geist-ui/core';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { RotateCcw, Search, UserPlus } from 'react-feather';

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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
        <Input ref={inputRef} icon={<Search />} name='inputValue' placeholder='Search for user...' onChange={handleInputChange} clearable />
        <div className='spinner-box'>{loading && <Spinner />}</div>
        <Checkbox.Group value={checkboxValue} onChange={handleCheckboxChange}>
          <Checkbox value='Active'>Active</Checkbox>
          <Checkbox value='Inactive'>Inactive</Checkbox>
        </Checkbox.Group>
      </div>
      <div className='input-menu'>
        <Button iconRight={<RotateCcw />} auto scale={2 / 3} px={0.6} type='error' onClick={handleReset} />
        <Button iconRight={<UserPlus />} auto scale={2 / 3} px={0.6} type='secondary' onClick={() => router.push('/manage/useredit')} />
      </div>
    </div>
  );
}

import { User } from '@/pages/manage';
import { Card } from '@geist-ui/core';
import { useEffect, useState } from 'react';
import FilteredUserTable from './FilteredUserTable';
import UserSearch from './UserSearch';

export type Params = { inputValue: string; checkbox: string[] };

export default function UserView({ userData }: { userData: User[] | undefined }) {
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [checkboxValue, setCheckboxValue] = useState<string[]>([]);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();
  const [isActive, setIsActive] = useState<string[]>([]);
  const [data, setData] = useState<User[] | undefined>(userData);

  useEffect(() => {
    return () => clearTimeout(timeoutId);
  }, [timeoutId]);

  return (
    <div className='dashboard-content'>
      <UserSearch
        inputValue={inputValue}
        setInputValue={setInputValue}
        checkboxValue={checkboxValue}
        setCheckboxValue={setCheckboxValue}
        loading={loading}
        setLoading={setLoading}
        setTimeoutId={setTimeoutId}
      />
      {!loading && (
        <Card>
          <FilteredUserTable data={data} inputValue={inputValue} checkboxValue={checkboxValue} />
        </Card>
      )}
    </div>
  );
}

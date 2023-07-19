import { useEffect, useState } from 'react';
import FilteredUserTable from './filteredusertable';
import UserSearch from './usersearch';
import { Card } from '@nextui-org/react';

export type Params = { inputValue: string; checkbox: string[] };

export default function UserView({ userData }: { userData: any | undefined }) {
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [checkboxValue, setCheckboxValue] = useState<string[]>([]);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();

  useEffect(() => {
    return () => clearTimeout(timeoutId);
  }, [timeoutId]);

  return (
    <div className='dashboard-content'>
      <UserSearch
        setInputValue={setInputValue}
        checkboxValue={checkboxValue}
        setCheckboxValue={setCheckboxValue}
        loading={loading}
        setLoading={setLoading}
        setTimeoutId={setTimeoutId}
      />
      {!loading && (
        <Card>
          <FilteredUserTable data={userData} inputValue={inputValue} checkboxValue={checkboxValue} />
        </Card>
      )}
    </div>
  );
}

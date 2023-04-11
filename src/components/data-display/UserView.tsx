import { useEffect, useState } from 'react';
import FilteredUserTable from './FilteredUserTable';
import UserSearch from './UserSearch';
import { Card } from '@nextui-org/react';

export type Params = { inputValue: string; checkbox: string[] };

export default function UserView({ userData }: { userData: any | undefined }) {
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [checkboxValue, setCheckboxValue] = useState<string[]>([]);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();
  const [isActive, setIsActive] = useState<string[]>([]);
  const [data, setData] = useState<any[] | undefined>(userData);

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
          <FilteredUserTable data={data} inputValue={inputValue} checkboxValue={checkboxValue} />
        </Card>
      )}
    </div>
  );
}

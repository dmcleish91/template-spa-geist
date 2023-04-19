import { useState, useEffect } from 'react';

export default function useLocalStorage<T extends string>(keyName: string, initialValue: T) {
  const [value, setValue] = useState(JSON.parse(localStorage.getItem(keyName) || initialValue));

  useEffect(() => {
    localStorage.setItem(keyName, JSON.stringify(value)), [value, keyName];
  });

  return [value, setValue];
}

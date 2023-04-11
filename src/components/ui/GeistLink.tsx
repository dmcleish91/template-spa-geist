import { Text } from '@nextui-org/react';
import { ReactNode } from 'react';

export const GeistLink: React.FC<{ onClick?: () => void; children: ReactNode }> = ({ onClick, children }) => {
  return (
    <div className='geist-link' role={'button'} onClick={onClick}>
      <Text>{children}</Text>
    </div>
  );
};

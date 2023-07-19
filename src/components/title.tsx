import { ReactNode } from 'react';

export const Title: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='title-container'>
      <div className='title-width'>
        <p className='title-text'>{children}</p>
      </div>
    </div>
  );
};

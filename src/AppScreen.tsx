import type { FC, PropsWithChildren } from 'react';

const AppScreen: FC<PropsWithChildren> = ({ children }) => {
  return <section className='h-screen p-8 grid place-items-stretch'>{children}</section>;
};

export default AppScreen;

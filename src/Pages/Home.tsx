import * as React from 'react';
import { Sidebar } from './Sidebar';

export interface IAppProps {
}

export default function Home (props: IAppProps) {
  return (
    <div>
      <Sidebar onClick={function (): void {
        throw new Error('Function not implemented.');
      } }/>
    </div>
  );
}

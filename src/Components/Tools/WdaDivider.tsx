import { Divider } from '@chakra-ui/react';
import * as React from 'react';

export interface IAppProps {
}

export default function WdaDivider (props: IAppProps) {
  return (
    <div style={{maxWidth: "80%", marginLeft: "auto", marginRight: "auto"}}>
        <Divider orientation='horizontal'/>
    </div>
  );
}

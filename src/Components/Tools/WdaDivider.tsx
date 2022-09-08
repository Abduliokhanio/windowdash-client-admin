import { Divider } from '@chakra-ui/react';
import * as React from 'react';

export interface IAppProps {
  maxWidth : string
}

export default function WdaDivider (props: IAppProps) {
  return (
    <div style={{maxWidth: `${props.maxWidth}`, marginLeft: "auto", marginRight: "auto", paddingTop: "1em", paddingBottom: "1em"}}>
        <Divider orientation='horizontal' borderColor="gray.400" />
    </div>
  );
}

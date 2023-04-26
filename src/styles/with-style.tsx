import * as React from 'react';
import { StyleProps, extractStyle } from './style';

export function withStyle<Props>(Component: React.ComponentType<Props>) {
  return (props: Props & StyleProps) => {
    const [style, rest] = extractStyle(props);

    // @ts-expect-error - TODO: improve typechecking
    return <Component {...rest} style={style} />;
  };
}

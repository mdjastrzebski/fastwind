import * as React from 'react';
import { extractStyle } from './style';
import type { StyleProps } from './style';

export function withStyle<Props>(Component: React.ComponentType<Props>) {
  return (props: Props & StyleProps) => {
    const [style, rest] = extractStyle(props);
    // @ts-expect-error - TODO: improve typechecking
    return <Component {...rest} style={style} />;
  };
}

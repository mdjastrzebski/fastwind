import type { ViewStyle } from 'react-native';
import { MarginStyleProps, marginPropsMap } from './margins';
import { PaddingStyleProps, paddingPropsMap } from './paddings';

export type StyleProps = MarginStyleProps & PaddingStyleProps;

export const propsMap = {
  ...marginPropsMap,
  ...paddingPropsMap,
} as const;

export function extractStyle<T extends StyleProps>(
  props: T
): [ViewStyle, Omit<T, keyof StyleProps>] {
  const style = {};
  const restProps = {};

  Object.entries(props).forEach(([key, value]) => {
    // @ts-expect-error - TS doesn't know the type of propsMap[key]
    const propMapper = propsMap[key];
    if (propMapper != null) {
      Object.assign(style, propMapper(value));
      return;
    }

    // @ts-expect-error - TS cannot check restProps type
    restProps[key] = value;
  });

  // @ts-expect-error - TS cannot check restProps type
  return [style, restProps];
}

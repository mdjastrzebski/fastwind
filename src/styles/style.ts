import type { ViewStyle } from 'react-native';
import { MarginStyleProps, marginPropsMap } from './margins';
import { PaddingStyleProps, paddingPropsMap } from './paddings';
import { FlexStyleProps, flexPropsMap } from './flex';

export type StyleProps = MarginStyleProps & PaddingStyleProps & FlexStyleProps;

export const propsMap = {
  ...marginPropsMap,
  ...paddingPropsMap,
  ...flexPropsMap,
} as const;

export function extractStyle<T extends StyleProps>(
  props: T
): [ViewStyle, Omit<T, keyof StyleProps>] {
  const style = {};
  const restProps = {};
  let hasStyles = false;

  Object.entries(props).forEach(([key, value]) => {
    // @ts-expect-error
    const propMapper = propsMap[key];
    if (propMapper != null) {
      Object.assign(style, propMapper(value));
      hasStyles = true;
      return;
    }

    // @ts-expect-error - TS cannot check restProps type
    restProps[key] = value;
  });

  // @ts-expect-error - TS cannot check restProps type
  return [hasStyles ? style : null, restProps];
}

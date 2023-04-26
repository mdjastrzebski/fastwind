import type { ViewStyle } from 'react-native';
import { Spacing, spacing } from './theme';

export interface StyleProps {
  m?: Spacing;
  mx?: Spacing;
  my?: Spacing;
  mt?: Spacing;
  mb?: Spacing;
  ml?: Spacing;
  mr?: Spacing;
}

const propMap = {
  m: (value: Spacing) => ({ margin: spacing[value] }),
  mx: (value: Spacing) => ({ marginHorizontal: spacing[value] }),
  my: (value: Spacing) => ({ marginVertical: spacing[value] }),
  mt: (value: Spacing) => ({ marginTop: spacing[value] }),
  mb: (value: Spacing) => ({ marginBottom: spacing[value] }),
  ml: (value: Spacing) => ({ marginLeft: spacing[value] }),
  mr: (value: Spacing) => ({ marginRight: spacing[value] }),
} as const;

export function extractStyle<T extends StyleProps>(
  props: T
): [ViewStyle, Omit<T, keyof StyleProps>] {
  const style = {};
  const restProps = {};

  Object.entries(props).forEach(([key, value]) => {
    // @ts-expect-error - TS doesn't know the type of propMap[key]
    const propMapper = propMap[key];
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

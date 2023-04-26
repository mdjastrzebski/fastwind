import type { ViewStyle } from 'react-native';
import { Spacing, spacing } from '../theme';

export interface MarginStyleProps {
  // Margin
  m?: Spacing;

  /** Margin Horizontal */
  mx?: Spacing;

  /** Margin Vertical */
  my?: Spacing;

  /** Margin Top */
  mt?: Spacing;

  /** Margin Bottom */
  mb?: Spacing;

  /** Margin Left */
  ml?: Spacing;

  /** Margin Right */
  mr?: Spacing;

  /** Margin Start */
  ms?: Spacing;

  /** Margin End */
  me?: Spacing;
}

export const marginPropsMap = {
  m: (value: Spacing) => ({ margin: spacing[value] }),
  mx: (value: Spacing) => ({ marginHorizontal: spacing[value] }),
  my: (value: Spacing) => ({ marginVertical: spacing[value] }),
  mt: (value: Spacing) => ({ marginTop: spacing[value] }),
  mb: (value: Spacing) => ({ marginBottom: spacing[value] }),
  ml: (value: Spacing) => ({ marginLeft: spacing[value] }),
  mr: (value: Spacing) => ({ marginRight: spacing[value] }),
  ms: (value: Spacing) => ({ marginStart: spacing[value] }),
  me: (value: Spacing) => ({ marginEnd: spacing[value] }),
} as const satisfies Record<
  keyof MarginStyleProps,
  (value: Spacing) => ViewStyle
>;

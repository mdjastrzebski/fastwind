import type { ViewStyle } from 'react-native';
import { Spacing, spacing } from '../theme';

export interface PaddingStyleProps {
  /** Padding */
  p?: Spacing;

  /** Padding Horizontal */
  px?: Spacing;

  /** Padding Vertical */
  py?: Spacing;

  /** Padding Top */
  pt?: Spacing;

  /** Padding Bottom */
  pb?: Spacing;

  /** Padding Left  */
  pl?: Spacing;

  /** Padding Right  */
  pr?: Spacing;

  /** Padding Start  */
  ps?: Spacing;

  /** Padding End  */
  pe?: Spacing;
}

export const paddingPropsMap = {
  p: (value: Spacing) => ({ padding: spacing[value] }),
  px: (value: Spacing) => ({ paddingHorizontal: spacing[value] }),
  py: (value: Spacing) => ({ paddingVertical: spacing[value] }),
  pt: (value: Spacing) => ({ paddingTop: spacing[value] }),
  pb: (value: Spacing) => ({ paddingBottom: spacing[value] }),
  pl: (value: Spacing) => ({ paddingLeft: spacing[value] }),
  pr: (value: Spacing) => ({ paddingRight: spacing[value] }),
  ps: (value: Spacing) => ({ paddingStart: spacing[value] }),
  pe: (value: Spacing) => ({ paddingEnd: spacing[value] }),
} as const satisfies Record<
  keyof PaddingStyleProps,
  (value: Spacing) => ViewStyle
>;

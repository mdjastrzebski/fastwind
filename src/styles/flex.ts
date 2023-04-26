import type { ViewStyle } from 'react-native';

export interface FlexStyleProps {
  flex?: ViewStyle['flex'];
  items?: ViewStyle['alignItems'];
  justify?: ViewStyle['justifyContent'];
}

export const flexPropsMap = {
  flex: (value: ViewStyle['flex']) => ({ flex: value }),
  items: (value: ViewStyle['alignItems']) => ({ alignItems: value }),
  justify: (value: ViewStyle['justifyContent']) => ({ justifyContent: value }),
};

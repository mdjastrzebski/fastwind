import * as React from 'react';
import { render, screen } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import { Box } from '../box';

test('Box passes remaining props', () => {
  render(
    <Box testID="view" m={0} accessible onAccessibilityTap={() => null} />
  );

  const view = screen.getByTestId('view');
  expect(view).toHaveProp('testID', 'view');
  expect(view).toHaveProp('accessible', true);
  expect(view).toHaveProp('onAccessibilityTap');

  expect(view).not.toHaveProp('m');

  expect(screen.toJSON()).toMatchInlineSnapshot(`
    <View
      accessible={true}
      onAccessibilityTap={[Function]}
      style={
        Object {
          "margin": 0,
        }
      }
      testID="view"
    />
  `);
});

import * as React from 'react';
import { render } from '@testing-library/react-native';
import { Box } from '../box';

function renderJSON(element: React.ReactElement) {
  return render(element).toJSON();
}

test('Box accepts flex props', () => {
  expect(renderJSON(<Box flex={1} />)).toMatchInlineSnapshot(`
    <View
      flex={1}
      style={null}
    />
  `);

  expect(renderJSON(<Box items="center" />)).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "alignItems": "center",
        }
      }
    />
  `);

  expect(renderJSON(<Box justify="flex-start" />)).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "justifyContent": "flex-start",
        }
      }
    />
  `);
});

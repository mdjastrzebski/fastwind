import * as React from 'react';
import { render } from '@testing-library/react-native';
import { Box } from '../box';

function renderJSON(element: React.ReactElement) {
  return render(element).toJSON();
}

test('Box accepts padding props', () => {
  expect(renderJSON(<Box p={0} />)).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "padding": 0,
        }
      }
    />
  `);

  expect(renderJSON(<Box p="px" />)).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "padding": 1,
        }
      }
    />
  `);

  expect(renderJSON(<Box px={1} />)).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "paddingHorizontal": 4,
        }
      }
    />
  `);

  expect(renderJSON(<Box py={2} />)).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "paddingVertical": 8,
        }
      }
    />
  `);

  expect(renderJSON(<Box pt={3} />)).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "paddingTop": 12,
        }
      }
    />
  `);

  expect(renderJSON(<Box pb={4} />)).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "paddingBottom": 16,
        }
      }
    />
  `);

  expect(renderJSON(<Box pl={5} />)).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "paddingLeft": 20,
        }
      }
    />
  `);

  expect(renderJSON(<Box pr={6} />)).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "paddingRight": 24,
        }
      }
    />
  `);

  expect(renderJSON(<Box p={6} px={5} py={4} pt={3} pb={2} pl={1} pr={0} />))
    .toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "padding": 24,
          "paddingBottom": 8,
          "paddingHorizontal": 20,
          "paddingLeft": 4,
          "paddingRight": 0,
          "paddingTop": 12,
          "paddingVertical": 16,
        }
      }
    />
  `);
});

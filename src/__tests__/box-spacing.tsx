import * as React from 'react';
import { render } from '@testing-library/react-native';
import { Box } from '../box';

function renderJSON(element: React.ReactElement) {
  return render(element).toJSON();
}

test('Box accepts margin props', () => {
  expect(renderJSON(<Box m={0} />)).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "margin": 0,
        }
      }
    />
  `);

  expect(renderJSON(<Box m="px" />)).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "margin": 1,
        }
      }
    />
  `);

  expect(renderJSON(<Box mx={1} />)).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "marginHorizontal": 4,
        }
      }
    />
  `);

  expect(renderJSON(<Box my={2} />)).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "marginVertical": 8,
        }
      }
    />
  `);

  expect(renderJSON(<Box mt={3} />)).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "marginTop": 12,
        }
      }
    />
  `);

  expect(renderJSON(<Box mb={4} />)).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "marginBottom": 16,
        }
      }
    />
  `);

  expect(renderJSON(<Box ml={5} />)).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "marginLeft": 20,
        }
      }
    />
  `);

  expect(renderJSON(<Box mr={6} />)).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "marginRight": 24,
        }
      }
    />
  `);

  expect(renderJSON(<Box m={6} mx={5} my={4} mt={3} mb={2} ml={1} mr={0} />))
    .toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "margin": 24,
          "marginBottom": 8,
          "marginHorizontal": 20,
          "marginLeft": 4,
          "marginRight": 0,
          "marginTop": 12,
          "marginVertical": 16,
        }
      }
    />
  `);
});

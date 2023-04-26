/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { measurePerformance } from 'reassure';
import styled from 'styled-components/native';
import { Box as NBBox, NativeBaseProvider } from 'native-base';
import { Box } from '../box';

const scale = 100;

function repeatComponent(count: number, ui: React.ReactElement) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) =>
        React.cloneElement(ui, { key: index })
      )}
    </>
  );
}

test('Box basic rendering', async () => {
  const stats = await measurePerformance(
    repeatComponent(scale, <Box m={10} px={5} />)
  );

  // Hard perf requirements
  expect(stats.meanCount).toBe(1);
  expect(stats.stdevCount).toBe(0);
});

const styles = StyleSheet.create({
  view: {
    margin: 40,
    paddingHorizontal: 20,
  },
});

test('React Native View (stylesheet) basic rendering', async () => {
  await measurePerformance(
    repeatComponent(scale, <View style={styles.view} />)
  );
});

test('React Native View (inline styles) basic rendering', async () => {
  await measurePerformance(
    repeatComponent(
      scale,
      <View style={{ margin: 40, paddingHorizontal: 20 }} />
    )
  );
});

const StaticStyledView = styled.View`
  margin: 40px;
  padding-horizontal: 20px;
`;

test('Styled.View (static tag string) basic rendering', async () => {
  await measurePerformance(repeatComponent(scale, <StaticStyledView />));
});

const DynamicStyledView = styled.View`
  margin: ${() => '40px'};
  padding-horizontal: ${() => '20px'};
`;

test('Styled.View (dynamic tag string) basic rendering', async () => {
  await measurePerformance(repeatComponent(scale, <DynamicStyledView />));
});

const ObjectStyledView = styled.View({
  margin: '40px',
  paddingHorizontal: '20px',
});

test('Styled.View (object styles) basic rendering', async () => {
  await measurePerformance(repeatComponent(scale, <ObjectStyledView />));
});

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

test('NativeBase Box basic rendering', async () => {
  // This provider is require by NativeBase
  const wrapper = (ui: React.ReactElement) => (
    <NativeBaseProvider initialWindowMetrics={inset}>{ui}</NativeBaseProvider>
  );
  await measurePerformance(repeatComponent(scale, <NBBox m={10} px={5} />), {
    wrapper,
  });
});

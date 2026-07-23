/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { Text } from 'react-native';
import App from '../App';
import { useFintechSecurity } from '../src/features/FintechSecurity/aplication/hooks/useFintechSecurity';

jest.mock('react-native-safe-area-context', () => {
  const React = require('react');
  return {
    SafeAreaProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  };
});

jest.mock('../src/features/FintechSecurity/aplication/hooks/useFintechSecurity', () => ({
  useFintechSecurity: jest.fn(),
}));

test('renders challenge title and identifier', async () => {
  const refreshMock = jest.fn();
  (useFintechSecurity as jest.Mock).mockReturnValue({
    identifier: 'device-123',
    isLoading: false,
    error: null,
    refresh: refreshMock,
  });

  let renderer: ReactTestRenderer.ReactTestRenderer;
  await ReactTestRenderer.act(async () => {
    renderer = ReactTestRenderer.create(<App />);
  });

  const textNodes = renderer!.root.findAllByType(Text);
  const renderedText = textNodes
    .map(node => node.props.children)
    .flat()
    .filter(Boolean)
    .join(' ');

  expect(useFintechSecurity).toHaveBeenCalledTimes(1);
  expect(renderedText).toContain('ID del dispositivo');
  expect(renderedText).toContain('device-123');
});

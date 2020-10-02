/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import App from 'ms/App';

jest.mock('react-native-splash-screen', () => ({
  hide: jest.fn(),
}));

describe('App', () => {
  beforeEach(() => {
    SplashScreen.hide.mockClear();
  });

  it('renders correctly without error', () => {
    jest.spyOn(window.console, 'error');

    shallow(<App />);

    expect(window.console.error.mock.calls).toEqual([]);
  });

  it('delays hiding of splash screen on App mount', () => {
    jest.useFakeTimers();

    shallow(<App />);

    expect(SplashScreen.hide.mock.calls).toEqual([]);

    jest.runAllTimers();

    expect(SplashScreen.hide.mock.calls).toEqual([]);
  });
});

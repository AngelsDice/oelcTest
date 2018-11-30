import React from 'react';
import Loader from '..';

function setup() {
  const enzymeWrapper = global.mount(<Loader />);
  return {
    enzymeWrapper
  };
}
describe('components', () => {
  describe('Loader', () => {
    it('should render self', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find(Loader).length).toBe(1);
    });
  });
});

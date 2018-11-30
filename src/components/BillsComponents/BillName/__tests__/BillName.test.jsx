import React from 'react';
import BillName from '..';

function setup() {
  const enzymeWrapper = global.mount(
    <BillName
      name="Vodafone"
      icon="https://pbs.twimg.com/profile_images/915824582455627776/nsyHCFq9.jpg"
    />
  );
  return {
    enzymeWrapper
  };
}
describe('components', () => {
  describe('BillName', () => {
    it('should render self', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find(BillName).length).toBe(1);
    });
  });
});

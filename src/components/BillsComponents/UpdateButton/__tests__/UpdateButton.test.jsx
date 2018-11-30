import React from 'react';
import UpdateButton from '..';

function setup() {
  const enzymeWrapper = global.mount(
    <UpdateButton BillActions={jest.fn()} billId={123} isBill={true} />
  );
  return {
    enzymeWrapper
  };
}
describe('components', () => {
  describe('UpdateButton', () => {
    it('should render self', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find(UpdateButton).length).toBe(1);
    });
  });
});

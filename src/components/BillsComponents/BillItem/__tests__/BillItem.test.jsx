import React from 'react';
import BillItem from '..';

function setup() {
  const enzymeWrapper = global.mount(
    <BillItem
      BillActions={jest.fn()}
      bill={{
        name: 'Vodafone',
        iconUrl:
          'https://pbs.twimg.com/profile_images/915824582455627776/nsyHCFq9.jpg'
      }}
      category={{
        name: 'TV',
        iconUrl:
          'https://s3.eu-west-2.amazonaws.com/cleoassets/images/category_icons/entertainment.png'
      }}
    />
  );
  return {
    enzymeWrapper
  };
}
describe('components', () => {
  describe('BillItem', () => {
    it('should render self', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find(BillItem).length).toBe(1);
    });
  });
});

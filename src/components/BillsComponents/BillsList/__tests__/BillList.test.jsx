import React from 'react';
import BillList from '..';

function setup() {
  const enzymeWrapper = global.mount(
    <BillList
      BillActions={jest.fn()}
      billsList={[
        {
          categoryId: 1,
          iconUrl:
            'https://pbs.twimg.com/profile_images/915824582455627776/nsyHCFq9.jpg',
          id: '5a5caa1efe33900100fd8ed5',
          isBill: false,
          name: 'Vodafone',
          transactions: [
            {
              amount: 12.34,
              date: '2018-01-13',
              id: 36
            }
          ]
        }
      ]}
      billCategories={[
        {
          iconUrl:
            'https://s3.eu-west-2.amazonaws.com/cleoassets/images/category_icons/income.png',
          id: 1,
          name: 'Phone'
        }
      ]}
    />
  );
  return {
    enzymeWrapper
  };
}
describe('components', () => {
  describe('BillList', () => {
    it('should render self', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find(BillList).length).toBe(1);
    });
  });
});

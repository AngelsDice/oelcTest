import React from 'react';
import CategoryName from '..';

function setup() {
  const enzymeWrapper = global.mount(
    <CategoryName
      name="TV"
      icon="https://s3.eu-west-2.amazonaws.com/cleoassets/images/category_icons/entertainment.png"
    />
  );
  return {
    enzymeWrapper
  };
}
describe('components', () => {
  describe('CategoryName', () => {
    it('should render self', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find(CategoryName).length).toBe(1);
    });
  });
});

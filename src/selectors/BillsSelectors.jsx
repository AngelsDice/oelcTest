export const allLoaded = state =>
  !state.billsLoading && !state.categoriesLoading;
export const potentialBills = state => state.bills.filter(b => !b.isBill);
export const realBills = state => state.bills.filter(b => b.isBill);
export const billCategories = state => state.categories;

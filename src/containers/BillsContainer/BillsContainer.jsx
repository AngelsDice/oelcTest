import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Loader from '../../components/SharedComponents/Loader';
import Bills from '../../components/BillsComponents/Bills';
import * as BillActions from '../../actions/billsActions';
import * as BillSelectors from '../../selectors/BillsSelectors';
import * as CategoriesActions from '../../actions/categoriesActions';

export class BillsContainer extends React.Component {
  componentDidMount() {
    const { BillActions, CategoriesActions } = this.props;
    BillActions.loadBills();
    CategoriesActions.loadCategories();
  }
  render() {
    const {
      allLoaded,
      potentialBills,
      realBills,
      BillActions,
      billCategories
    } = this.props;
    if (!allLoaded) {
      return <Loader />;
    }
    return (
      <Bills
        potentialBills={potentialBills}
        realBills={realBills}
        BillActions={BillActions}
        billCategories={billCategories}
      />
      // <div>
      //   Bills - {potentialBills.length} - {realBills.length}
      //   <button onClick={() => BillActions.removeBill()}>Move it</button>
      // </div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    allLoaded: BillSelectors.allLoaded(state.bills),
    potentialBills: BillSelectors.potentialBills(state.bills),
    realBills: BillSelectors.realBills(state.bills),
    billCategories: BillSelectors.billCategories(state.bills)
  };
};

export const mapDispatchToProps = dispatch => ({
  BillActions: bindActionCreators(BillActions, dispatch),
  CategoriesActions: bindActionCreators(CategoriesActions, dispatch)
});

const index = connect(
  mapStateToProps,
  mapDispatchToProps
)(BillsContainer);

export default index;

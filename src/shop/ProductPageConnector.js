import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setPageSize, setSortProperty } from "../data/ActionCreators";

const mapStateToProps = (dataStore, ownProps) => {
  return dataStore;
};
const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(dispatch);
  return {
    setPageSize,
    setSortProperty,
  };
};

const mergeProps = (dataStore, actionCreators, router) => {
  console.log(dataStore);
  console.log(actionCreators);
  console.log(router);
  return {
    ...dataStore,
    ...router,
    ...actionCreators,
    currentPage: Number(router.match.params.page),
    pageCount: Math.ceil(
      (dataStore.products_total || dataStore.pageSize || 5) /
        (dataStore.pageSize || 5)
    ),
    navigateToPage: (page) =>
      router.history.push(
        `/shop/products/${router.match.params.category}/${page}`
      ),
  };
};

export const ProductPageConnector = (PageComponent) =>
  withRouter(
    connect(mapStateToProps, mapDispatchToProps, mergeProps)(PageComponent)
  );

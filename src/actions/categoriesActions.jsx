import * as types from './actionTypes';
import * as CategoriesApi from '../api/categoriesApi';

/*
 * action creators
 */

export const loadCategories = () => dispatch => {
  dispatch(loadingCategories());
  return CategoriesApi.fetchCategories().then(
    response => {
      dispatch(loadedCategories(response));
    },
    () => {
      dispatch(errorCategories());
    }
  );
};

// not exported
const loadingCategories = () => {
  return {
    type: types.LOADING_CATEGORIES
  };
};
const loadedCategories = categories => {
  return {
    type: types.LOADED_CATEGORIES,
    categories
  };
};
const errorCategories = () => {
  return {
    type: types.ERROR_CATEGORIES
  };
};

import { APIConstants } from '../shared/constants';

interface CategoriesObject {
  iconUrl: string;
  id: number;
  name: string;
}

export const fetchCategories = () => {
  return fetch(`${APIConstants.base}/categories`)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json());
};

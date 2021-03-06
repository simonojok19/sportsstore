import { ActionTypes, DataTypes } from "./Types";

export const ShopReducer = (storeData, action) => {
  console.log(`SHOP REDUCER >> ${action.type} << ${new Date().toString()}`);
  switch (action.type) {
    case ActionTypes.DATA_LOAD:
      const state = {
        ...storeData,
        [`${action.payload.dataType}_total`]: action.payload.total,
        [`${action.payload.dataType}_params`]: action.payload.params,
        [action.payload.dataType]: action.payload.data,
      }
      console.log(`LOADING DATA SHOP_REDUCER ${new Date().toString() }`);
      console.log(storeData);
      console.log(action);
      console.log(state);
      return state;
    case ActionTypes.DATA_SET_PAGESIZE:
      console.log(`SETTING PAGE SIZE >> ${action.payload} << ${new Date().toString()}`);
      return { ...storeData, pageSize: action.payload };
    case ActionTypes.DATA_SET_SORT_PROPERTY:
      console.log(`SETTING SORT PROPERTY >> ${action.payload} << ${new Date().toString()}`);
      return { ...storeData, sortKey: action.payload };
    case ActionTypes.DATA_STORE:
      if (action.payload.dataType === DataTypes.ORDERS) {
        return { ...storeData, order: action.payload.data };
      }
      break;
    default:
      return storeData || {};
  }
};

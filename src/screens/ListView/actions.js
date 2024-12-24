export const addItem = (item) => ({
  type: 'ADD_ITEM',
  payload: item,
});

export const editItem = (index, item) => ({
  type: 'EDIT_ITEM',
  payload: { index, item },
});

export const deleteItem = (index) => ({
  type: 'DELETE_ITEM',
  payload: index,
});
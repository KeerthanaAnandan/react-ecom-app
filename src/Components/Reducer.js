export const initialState = {
  basket: [
    /*{
      id: "12267899",
      title: "Jacket for women- winter collection",
      price: "35",
      rating: 3,
      image: threeimg,
    },*/
  ],
  user: null,
};

//selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_CART":
      //logic for adding item o basket
      return {
        ...state, basket: [...state.basket, action.item]
      };
      //break;
    case "REMOVE_FROM_CART":
      //LOGIC FOR REMOVING ITEM IN BASKET

      //we cloned it from the basket
      let newBasket = [...state.basket];
      //we need index to take out the particular item
      const index = state.basket.findIndex(
        (basketitem) => basketitem.id === action.id
      );
      //checking if item match and removing
      if (index >= 0) {
        //item exists so remove it...
        newBasket.splice(index, 1);
      } else {
        console.warn(`can't remove product ( id: ${action.id}`);
      }
      //also set the old basket with the newly spliced or updated basket
      return {
        ...state, basket: newBasket
      };
      //break;
    default:
      return state;
  }
}

export default reducer;
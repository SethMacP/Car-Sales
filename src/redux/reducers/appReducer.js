import {ADD_FEATURE_PRICE, REMOVE_FEATURE_PRICE} from '../actions/action'

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

 export const appReducer = (state = initialState, action) => {

    switch(action.type){
      case ADD_FEATURE_PRICE:
        console.log("state",state)
        console.log("AddPrice",action.payload)
        console.log("InitialPrice: ",state.additionalPrice)
        return{
          ...state,
          additionalPrice: (state.additionalPrice + action.payload.price),
          car: {
            ...state.car,
            features:[...state.car.features, action.payload]
          },
          


        }
      case REMOVE_FEATURE_PRICE:
        return{
          ...state,
          additionalPrice: (state.additionalPrice - action.payload.price),
          car:{
            ...state.car,
            features:state.car.features.filter((item) => item.id !== action.payload.id)
            }
        }
        default:
            return state;
    }
        
    
    
    
  }

  export default appReducer;


//example of state
//example of state
//example of state

// const initialState = {
//     additionalPrice: 0,
//     car: {
//       price: 26395,
//       name: '2019 Ford Mustang',
//       image:
//         'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
//       features: []
//     },
//     additionalFeatures: [
//       { id: 1, name: 'V-6 engine', price: 1500 },
//       { id: 2, name: 'Racing detail package', price: 1500 },
//       { id: 3, name: 'Premium sound system', price: 500 },
//       { id: 4, name: 'Rear spoiler', price: 250 }
//     ]
//   };

//stringed variables
export const ADD_FEATURE_PRICE = "ADD_FEATURE_PRICE"
export const REMOVE_FEATURE_PRICE = "REMOVE_FEATURE_PRICE"

//actions

export const addFeaturePrice = (feature) => {
    return {type:ADD_FEATURE_PRICE, payload: feature}
}
export const removeFeaturePrice = (feature) => {
    return {type:REMOVE_FEATURE_PRICE, payload: feature}
}


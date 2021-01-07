import React from 'react';
import {connect, useDispatch} from 'react-redux'
import {addFeaturePrice} from '../redux/actions/action'


const AdditionalFeature = (props) => {
  
  const dispatch = useDispatch()

  return (
    <li>
      
      <button 
        onClick={()=> dispatch(addFeaturePrice(props.feature))}
        className="button"
        >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};




export default connect(addFeaturePrice)(AdditionalFeature);

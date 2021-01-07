import React from 'react';
import {connect, useDispatch} from 'react-redux'
import { removeFeaturePrice } from '../redux/actions/action';

const AddedFeature = props => {
  console.log("props on added feature", props)

  const dispatch = useDispatch();
  return (
    <li>
      
      <button 
        onClick = {()=>dispatch(removeFeaturePrice(props.feature))}
        className="button">X</button>
      {props.feature.name}
    </li>
  );
};



export default connect(removeFeaturePrice)(AddedFeature);

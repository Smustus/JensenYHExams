import './AddCard.css';
import { Link } from 'react-router-dom';
import CardForm from '../../components/CardForm/CardForm';
import React, { createContext, useState } from 'react'
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';

const CardContext = createContext();
const SetCardContext = createContext();

const AddCard = () => {

  const [formData, setFormData] = useState({
    cardNum: 'XXXX XXXX XXXX XXXX',
    cardholder: 'FIRST NAME LAST NAME',
    valid: 'MM/YY',
    ccv: null,
    vendor: null,
  });

  return (
    <div className='wrapper addCardsWrapper'>
      <Link to='/'>&larr; BACK</Link>
      <Header heading='ADD&nbsp;A&nbsp;NEW BANK&nbsp;CARD'/>
      <CardContext.Provider value={ formData }>
      <SetCardContext.Provider value={ setFormData }>
        <Card data={ formData }/>
        <CardForm /> 
      </SetCardContext.Provider>
      </CardContext.Provider>
      
    </div>
  )
}

export { CardContext, SetCardContext };

export default AddCard;
import './CardForm.css';
import React, { useContext } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCard } from '../../../reducers/handleCardsReducer';
import { SetCardContext } from '../../routes/AddCard/AddCard';
import { CardContext } from '../../routes/AddCard/AddCard';

const CardForm = () => {

  const setCardData = useContext(SetCardContext)
  const cardData = useContext(CardContext)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Format card number input to include spaces
  const formatCardNr = (input) => {
    const array = input.split('');
    for(let i = 4; i < array.length; i += 5){
      array.splice(i, 0, ' ')
    };
    const newFormat = array.join('');
    return newFormat;
  }

  //Format valid input to show a / between month and year input
  const formatValidDate = (input) => {
    const array = input.split('');
    array.splice(2, 0, '/');
    const newFormat = array.join('');
    return newFormat;
  }
  
  //Function to add the form input to the state variable after formatting the input
  const handleInput = (e) => {
    let { id, value } = e.target
    if(id === 'cardNum'){
      value = formatCardNr(value);
    } 
    if(id === 'valid'){
      value = formatValidDate(value);
    }
    if(id === 'cardholder'){
      value = value.toUpperCase();
    } 

    setCardData(prevData => ({
      ...prevData,
      [id] : value
    }));    
  }
  
  //Sends the form data (cardData) to the redux state and navigate back to home if the card doesnt already exists
  const handleSubmit = (e) => {
    e.preventDefault();
    const cards = JSON.parse(localStorage.getItem('cards'));
      if(cards){
        const cardExists = cards.find((card) => {
          return card.cardNum === cardData.cardNum
        });
        if(cardExists){
          alert('Card already exists');
          console.log('Card already exists');
        } else {
          dispatch(addCard(cardData));
          navigate('/');
        };
      } else {
        dispatch(addCard(cardData));
        navigate('/');
      }
  }

  return (
    <form onSubmit={ handleSubmit } action="" className='form'>

      <fieldset className="form__inputContainer">
        <label htmlFor="cardNum">CARD NUMBER</label>
        <input type="text" name='cardNum' id="cardNum" maxLength='16' minLength='16' pattern="\d{16}" title='Please enter a valid credit card number' placeholder='XXXX XXXX XXXX XXXX' onChange={ handleInput } required/>
      </fieldset>

      <fieldset className="form__inputContainer">
        <label htmlFor="cardholder">CARDHOLDER NAME</label>
        <input type="text" name='cardholder' id="cardholder" maxLength='23' pattern="[A-Za-z]+\s[A-Za-z]+" title='Please enter the credit card holders name' placeholder='First name Last name' onChange={ handleInput } required/>
      </fieldset>

      <div className='form__container valid'>
        <fieldset className="form__inputContainer">
          <label htmlFor="valid">VALID THRU</label>
          <input type="text" name='valid' id="valid" maxLength='4' minLength='4' pattern="^(0[1-9]|1[0-2])(2[4-9]|3[0-4])$" title='Please enter a valid expiration date MMYY' placeholder='MMYY' onChange={ handleInput } required/>
        </fieldset>

        <fieldset className="form__inputContainer ccv">
          <label htmlFor="ccv">CCV</label>
          <input type="text" name='ccv' id="ccv" maxLength='3' minLength='3' pattern="\d{3}" title='Please enter ccv (3 digits)' placeholder='XXX' onChange={ handleInput } required/>
        </fieldset>
      </div>

      <fieldset className="form__inputContainer">
        <label htmlFor="cardNum">VENDOR</label>
        <select name="vendor" id="vendor" onChange={ handleInput } required>
          <option value="">-- Select an option --</option>
          <option value="bitcoin">Bitcoin inc.</option>
          <option value="ninja">Ninja bank</option>
          <option value="blockchain">Blockchain inc.</option>
          <option value="evil">Evil corp.</option>
        </select>
      </fieldset>

      <button className='form__submitBtn' type='submit'>ADD CARD</button>
    </form>
  )
}

export default CardForm
import './Home.css';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import { removeCard } from '../../../reducers/handleCardsReducer';
import { selectCard } from '../../../reducers/selectCardReducer';
import { useDispatch, useSelector } from 'react-redux';
import cross from '../../images/close.svg';

const Home = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedCardRedux = useSelector((data) => data.selectedCard);
  console.log(selectedCardRedux);

  const [cardArr, setCardArr] = useState([]);
  const [cardSelected, setCardSelected] = useState();

  //Get all locally stored data upon pageload and saves them in the setCardArr state variable
  useEffect(() => {
    const cardData = JSON.parse(localStorage.getItem('cards'));
    if(cardData){
      setCardArr(cardData);
    }
  }, []);

  //Attaches the chosen class to the selected card whenever its state is updated and then removes it (trigger and allow re-triggering of animation)
  useEffect(() => {
    if(cardSelected){
      document.querySelector('.choosenCard__container').classList.add('chosen');
      setTimeout(() => {
        document.querySelector('.choosenCard__container').classList.remove('chosen');
      }, 100);
    }
  }, [cardSelected]);


  const navAddCard = () => {
    navigate('/addcard');
  }

  //Function to set the selected card and "remove" it from the stack of cards
  const selectedCard = (data) => {
    setCardSelected(data);
    dispatch(selectCard(data))
    const cardData = JSON.parse(localStorage.getItem('cards'));
    const copyArr = [...cardData];
    const updatedCards = copyArr.filter((card) => {
      return card.cardNum !== data.cardNum;
    });
    setCardArr(updatedCards);
  }

  //Function to delete a card and update the state, redux and localstorage
  const handleDelete = () => {
    dispatch(removeCard(cardSelected))    
    const updatedCards = cardArr.filter((card) => {
      return card !== cardSelected});
    setCardArr(updatedCards);
    localStorage.setItem('cards', JSON.stringify(updatedCards));
    setCardSelected(null);
    console.log(cardArr);
  }

  //Render all current cards of the cardArr  
  const cards = cardArr.map((card, index) => {
    return <div key={ index } className={ `card-${index} cardbox` } onClick={ () => selectedCard(card) }>
            <Card data={ card } />
           </div>
  });

  return (
    <div className='wrapper homeWrapper'>
      <Header heading='E-WALLET'/>
      <section className="homeWrapper__choosenCard">
        {cardSelected && (
        <div className={`choosenCard__container`}>
          <button className='deleteBtn' onClick={ handleDelete }><img src={ cross } alt="X" /></button>
          <Card data={ cardSelected } />
        </div>) }
      </section>
      <section className={`${ cardArr.length > 4 ? 'twoCol' : '' } homeWrapper__cardContainer`}>
        { cards }
      </section>
      <button className="homeWrapper__addCardBtn" onClick={ navAddCard }>ADD A NEW CARD</button>
    </div>
  )
}

export default Home;
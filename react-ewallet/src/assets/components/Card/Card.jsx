import './Card.css';
import React, { } from 'react'
import chipD from '../../images/chip-dark.svg';
import chipL from '../../images/chip-light.svg';
import bitcoinLogo from '../../images/vendor-bitcoin.svg';
import blockchainLogo from '../../images/vendor-blockchain.svg';
import evilLogo from '../../images/vendor-evil.svg';
import ninjaLogo from '../../images/vendor-ninja.svg';

const Card = (props) => {

  const { cardNum, cardholder, valid, vendor } = props.data;

  function returnLogo(){
    switch(vendor){
      case 'bitcoin':
        return bitcoinLogo;
      case 'blockchain':
        return blockchainLogo;
      case 'evil':
        return evilLogo;
      case 'ninja':
        return ninjaLogo;
      default:
       return bitcoinLogo;
    }
  }

  function returnChip(){
    switch(vendor){
      case 'bitcoin':
        return chipL;
      case 'blockchain':
        return chipL;
      case 'evil':
        return chipL;
      case 'ninja':
        return chipL;
      default:
       return chipD;
    }
  }

  
  return (
    <article className={`${vendor} card`}>

      <section className="card__imgSection">
        <img src={ returnChip() } alt="" className='chipImg'/>
        <img src={ returnLogo() } alt="" className='logoImg'/>
      </section>
      
      <p className="card__cardNum">{ cardNum ? cardNum : 'XXXX XXXX XXXX XXXX' }</p>

      <div className="card__nameAndValidWrapper">
        <section className='nameAndValidWrapper__nameSection'>
          <h4 className="nameSection__title">CARDHOLDER&nbsp;NAME</h4>
          <p className="nameSection__name">{ cardholder ? cardholder : 'FIRSTNAME LASTNAME' }</p>
        </section>
        <section className='nameAndValidWrapper__validSection'>
          <h4 className="validSection__title">VALID&nbsp;THRU</h4>
          <p className="validSection__date">{ valid ? valid : 'MM/YY' }</p>
        </section>
      </div>

    </article>
  ) 
}

export default Card;
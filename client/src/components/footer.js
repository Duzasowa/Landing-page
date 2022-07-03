import React from 'react';
import '../style/footer.css'
import { Search, StyledInputBase } from '../style/styleComponents';

const Footer = () => {
  return (
    <div class="footer">
      <div class="footer_text">Nie przegap żadnych kodów rabatowych! Zapisz się do Adima już dziś!</div>
      <Search style={{backgroundColor: 'white', borderRadius: 7, height: 50}}>
        <StyledInputBase
          style={{marginTop: 5}}
          placeholder="Twój adres e-mail"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
    </div>
  );
}

export default Footer;

import React from 'react';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';

const ContactButtons = () => {
  const handleWhatsAppClick = () => {
    // Replace 'phoneNumber' with the actual phone number you want to open in WhatsApp
    const phoneNumber = '9566893366';
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, '_blank');
  };

  const handlePhoneClick = () => {
    // Replace 'phoneNumber' with the actual phone number you want to dial
    const phoneNumber = '9566893366';
    const phoneURL = `tel:${phoneNumber}`;
    window.open(phoneURL, '_blank');
  };

  return (
    <div>
      <Fab color="primary" aria-label="WhatsApp" onClick={handleWhatsAppClick}>
        <WhatsAppIcon />
      </Fab>
      <Fab color="secondary" aria-label="Phone" onClick={handlePhoneClick}>
        <PhoneIcon />
      </Fab>
    </div>
  );
};

export default ContactButtons;

import React from 'react';

export const Ubicacion = () => {
  const spacing = 1;
  return (
    <div className="ubi">
      <div style={{ margin: '0 auto', textAlign: 'center', width: '80%' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15230.303958419448!2d-66.2583309!3d-17.3841244!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e30b404d5b97d5%3A0x327246469f7ad4bc!2sCentro%20De%20Salud%20Villa%20Maria!5e0!3m2!1ses-419!2sbo!4v1702425957359!5m2!1ses-419!2sbo"
          width="600"
          height="450"
          style={{ border: 0, display: 'block', margin: '0 auto' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  )
}

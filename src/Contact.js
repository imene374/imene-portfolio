import React from 'react';

function Contact() {
  return (
    <footer style={{ 
      padding: '60px 20px', 
      backgroundColor: '#2ecc71', // لون أخضر جذاب يناسب البورتفوليو
      color: 'white', 
      textAlign: 'center',
      marginTop: '50px' // مسافة فوق الـ Contact
    }}>
      <h2>Let's Connect</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
        Interested in working together or hiring me? Contact me directly!
      </p>
      
     <div style={{ marginTop: '20px' }}>
  <p>Send me an email:</p>
 <a 
  href="https://mail.google.com/mail/?view=cm&fs=1&to=yahiaouiimene91@gmail.com&su=Contact+from+Portfolio&body=Bonjour+Imene," 
  target="_blank" 
  rel="noopener noreferrer"
  style={{ 
    color: 'white', 
    textDecoration: 'none', 
    fontWeight: 'bold', 
    fontSize: '1.3rem',
    border: '2px solid white',
    padding: '10px 20px',
    borderRadius: '5px',
    display: 'inline-block',
    marginTop: '10px'
  }}
>
  yahiaouiimene91@gmail.com
</a>
</div>

      <p style={{ marginTop: '40px', fontSize: '0.8rem', opacity: '0.8' }}>
        © 2026 IMENE YAHIAOUI | Built with React
      </p>
    </footer>
  );
}

export default Contact;
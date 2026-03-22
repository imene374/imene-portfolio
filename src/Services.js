import React from 'react';

function Services() {
const myServices = [
  { 
    title: "Full-Stack Development", 
    desc: "Creating complete web applications from frontend design to backend logic." 
  },
  { 
    title: "Database Administration", 
    desc: "Designing and optimizing SQL & NoSQL databases (Oracle, MongoDB) for better performance." 
  },
  { 
    title: "System Integration", 
    desc: "Connecting web interfaces with complex databases and containerized environments using Docker." 
  }
];

  return (
    <section style={{ padding: '50px', backgroundColor: '#f9f9f9' }}>
      <h2>My Services</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {myServices.map((service, index) => (
          <div key={index} style={{
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '10px',
            width: '200px',
            backgroundColor: 'white',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
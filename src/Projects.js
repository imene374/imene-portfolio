import React from 'react';

function Projects() {
  const myProjects = [
    { name: "Web App Gestion de Personnel", tech: "HTML, CSS, JS, PHP, Oracle SQL", link: "#" ,img:"/gestion_de_personnel.png"},
    { name: "Web App Gestion de Formation", tech: "HTML, CSS, JS, PHP, Oracle SQL", link: "#",img:"/formation.png"},
    { name: "Web Site Fiverr Clone", tech: "HTML & CSS", link: "#",img:"/fiver.png"},
    { name: "Web Site Spotify Clone", tech: "HTML & CSS", link: "#",img:"/spotify.png"},
    { name: "Iris Dataset Visualization & NoSQL", tech: "Docker, WSL, MongoDB", link: "#",img:"/archi_mongos.png"},
    { name: "Responsive web site portfolio", tech: "React.js", link: "#",img:"/portfolio.png"}
  ];

  return (
    <section style={{ padding: '50px', backgroundColor: '#fff' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>My Projects</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '30px' 
      }}>
        {myProjects.map((p, i) => (
          <div key={i} style={{ 
            border: '1px solid #ddd', 
            borderRadius: '15px', 
            overflow: 'hidden', // ضروري لكي تأخذ الصورة زوايا البطاقة
            textAlign: 'left',
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
          }}>
            {/* أضفت لكِ هذا السطر لعرض الصورة */}
            <img 
              src={p.img} 
              alt={p.name} 
              style={{ width: '100%', height: '180px', objectFit: 'cover' }} 
            />
            
            <div style={{ padding: '20px' }}>
              <h3 style={{ color: '#2ecc71', marginTop: '0' }}>{p.name}</h3>
              <p style={{ fontSize: '0.9rem' }}>Built with: <strong>{p.tech}</strong></p>
              <a href={p.link} style={{ color: '#3498db', textDecoration: 'none', fontWeight: 'bold' }}>View Project →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
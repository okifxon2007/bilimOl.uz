import React from 'react';
import '../../Pages/Hometwo/Hometwo.css';
import { useNavigate } from 'react-router-dom';

const kursobj = [
  { kursname: 'Engliz-tili', description: 'bu kursimiz orqali siz bu tilni toliq organasiz', icon: 'fa fa-globe', nav:"Kurseng" },
  { kursname: 'Engliz-tili IELTS', description: 'bu kursimiz orqali siz bu tilni toliq organasiz', icon: 'fa fa-book-open', nav:"Kursengielts" },
  { kursname: 'Nemis-tili', description: 'bu kursimiz orqali siz bu tilni toliq organasiz', icon: 'fa fa-book', nav:"Nemistili" },
  { kursname: 'Rus-tili', description: 'bu kursimiz orqali siz bu tilni toliq organasiz', icon: 'fa fa-users', nav:"Rustili" },
  { kursname: 'SMM', description: 'bu kursimiz orqali siz SMM ni toliq organasiz', icon: 'fa fa-bullhorn', nav:"Smm"},
  { kursname: 'Frontend', description: 'bu kursimiz orqali siz Frontend dasturlashni toliq organasiz', icon: 'fa fa-laptop-code', nav:"Frontend" },
  { kursname: 'Kompyuter-savodxonligi', description: 'bu kursimiz orqali siz Frontend dasturlashni toliq organasiz', icon: 'fa fa-desktop', nav:"Kompyutersavodxonlik"},
];

// Placing the useNavigate inside the component
const Hometwo = () => {
  const navv = useNavigate(); // Moved inside the component

  function handlecard(nav) {
    navv(`/${nav}`);
  }

  return (
    <div className="container">
      <header className="home-header">
        <div className="home-logo">BilimOl.uz</div>
        <div className="home-nav">
          <button className="Logout-button">LogOut</button>
        </div>
      </header>
      <div className='cardflex'>
        <div className='fullcards'>
          <h1>Kurslar</h1>
          <div className="fullcardss">
            {kursobj && kursobj.map((value, index) => (
              <div className="course-card" key={index} onClick={() => handlecard(value.nav)}>
                <i className={value.icon}></i>
                <h3>{value.kursname}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hometwo;

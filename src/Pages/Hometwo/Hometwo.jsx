
import React from 'react';
import '../../Pages/Hometwo/Hometwo.css';

const kursobj = [
  { kursname: 'Engliz-tili', description: 'bu kursimiz orqali siz bu tilni toliq organasiz', icon: 'fa fa-globe' },
  { kursname: 'Koreys-tili', description: 'bu kursimiz orqali siz bu tilni toliq organasiz', icon: 'fa fa-language' },
  { kursname: 'Turk-tili', description: 'bu kursimiz orqali siz bu tilni toliq organasiz', icon: 'fa fa-flag' },
  { kursname: 'Engliz-tili IELTS', description: 'bu kursimiz orqali siz bu tilni toliq organasiz', icon: 'fa fa-book-open' },
  { kursname: 'Nemis-tili', description: 'bu kursimiz orqali siz bu tilni toliq organasiz', icon: 'fa fa-book' },
  { kursname: 'Rus-tili', description: 'bu kursimiz orqali siz bu tilni toliq organasiz', icon: 'fa fa-users' },
  { kursname: 'SMM', description: 'bu kursimiz orqali siz SMM ni toliq organasiz', icon: 'fa fa-bullhorn' },
  { kursname: 'Frontend', description: 'bu kursimiz orqali siz Frontend dasturlashni toliq organasiz', icon: 'fa fa-laptop-code' },
  { kursname: 'Kompyuter-savodxonligi', description: 'bu kursimiz orqali siz Frontend dasturlashni toliq organasiz', icon: 'fa fa-desktop' },
];

const Hometwo = () => {
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
              <div className="course-card" key={index}>
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

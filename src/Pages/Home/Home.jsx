
import React from 'react';
import '../../Pages/Home/Home.css';

const Home = () => {
  const kursobj = [
    { kursname: 'Engliz-tili', description: 'bu kursimiz orqali siz bu tilni toliq organasiz', icon: 'fa fa-globe' },
    { kursname: 'Koreys-tili', description: 'bu kursimiz orqali siz bu tilni toliq organasiz', icon: 'fa fa-language' },
    { kursname: 'Turk-tili', description: 'bu kursimiz orqali siz bu tilni toliq organasiz', icon: 'fa fa-flag' },
    { kursname: 'Engliz-tili IELTS', description: 'bu kursimiz orqali siz bu tilni toliq organasiz', icon: 'fa fa-book-open' },
    { kursname: 'Nemis-tili', description: 'bu kursimiz orqali siz bu tilni toliq organasiz', icon: 'fa fa-book' },
    { kursname: 'Rus-tili', description: 'bu kursimiz orqali siz bu tilni toliq organasiz', icon: 'fa fa-users' },
    { kursname: 'SMM', description: 'bu kursimiz orqali siz SMM ni toliq organasiz', icon: 'fa fa-bullhorn' },
    { kursname: 'Frontend', description: 'bu kursimiz orqali siz Frontend dasturlashni toliq organasiz', icon: 'fa fa-laptop-code' },
    { kursname: 'Kompyuter-savodxonligi', description: 'bu kursimiz orqali siz Frontend dasturlashni toliq organasiz', icon: 'fa fa-desktop' }
  ];

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="home-logo">BilimOl.uz</div>
        <div className="home-nav">
          <button className="home-button"><a href="/Frontend">Kirish</a></button>
        </div>
      </header>

      <section className="home-hero">
        <h1>BilimOl.uz platformasiga xush kelibsiz!</h1>
        <p>
          BilimOl.uz orqali siz repetitorsiz bilim olishingiz mumkin. O‘z sohangizda
          yetakchi bo‘lishingiz uchun barcha imkoniyatlarni taqdim etamiz!
        </p>
        <a href="/hometwo" className="home-cta-button">Kurslarni ko‘rish</a>
      </section>


      <section className="home-about">
        <h2>Nima uchun BilimOl.uz?</h2>
        <p>
          Bizning platformamiz har bir foydalanuvchiga o‘z bilimini oshirish uchun
          qulay imkoniyatlarni taqdim etadi. Barcha darslar zamonaviy texnologiyalar
          asosida ishlab chiqilgan va o‘qituvchi yordamisiz bilim olish uchun mo‘ljallangan.
        </p>
        <ul>
          <li>Eng yangi o‘quv materiallari</li>
          <li>Har bir foydalanuvchiga individual yondashuv</li>
          <li>Foydalanuvchilarga qulay interfeys</li>
          <li>Darslarni o‘zingiz uchun qulay vaqtda o‘rganish</li>
        </ul>
      </section>

      <section id="courses" className="home-courses">
        <h2>Kurslarimiz</h2>
        <div className="course-cards">
          {kursobj && kursobj.map((value, index) => (
            <div className="course-card" key={index}>
              <i className={value.icon} style={{ fontSize: '30px', color: '#4facfe' }}></i>
              <h3>{value.kursname}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="home-footer">
        <p>© 2025 BilimOl.uz - Barcha huquqlar himoyalangan.</p>
      </footer>
    </div>
  );
};

export default Home;

import React from 'react';

export const Home = () => {
  return (
    <div className="home">
      <div className="captains_logbook book">
        <div className="captains_book_back back" />
        <div className="page6" />
        <div className="page5" />
        <div className="page4" />
        <div className="page3" />
        <div className="page2" />
        <div className="page1" />
        <div className="captains_logbook_front front">Captain's Log Book</div>
      </div>

      <div className="ucarikacari book">
        <div className="ucarikacari_back back" />
        <div className="page6">
          Heyy Click here and type a lot more text so we can take up as much
          room as possible
        </div>
        <div className="page5" />
        <div className="page4"></div>
        <div className="page3" />
        <div className="page2" />
        <div className="page1" />
        <div className="ucarikacari_front front">
          {' '}
          Uçarı & Kaçarı{' '}
          <img src="https://source.unsplash.com/100x100/?nature,water" />
        </div>
      </div>
    </div>
  );
};

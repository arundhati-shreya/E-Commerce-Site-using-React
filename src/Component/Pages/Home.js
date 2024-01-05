import React from 'react';


function Home() {
  const tourDates = [
    { date: 'JUL 16', location: 'DETROIT, MI', venue: 'DTE ENERGY MUSIC THEATRE'},
    { date: 'JUL 19', location: 'TORONTO, ON', venue: 'BUDWEISER STAGE'},
    { date: 'JUL 22', location: 'BRISTOW, VA', venue: 'JIGGY LUBE LIVE'},
    { date: 'JUL 29', location: 'PHOENIX, AZ', venue: 'AK-CHIN PAVILION'},
    { date: 'AUG 2', location: 'LAS VEGAS, NV', venue: 'T-MOBILE ARENA'},
    { date: 'AUG 7', location: 'CONCORD, CA', venue: 'CONCORD PAVILION'}
    
  ];

  return (
    <>
      <div>
        <h2 className="text-center mt-4 mb-4">TOURS</h2>
        <div className="container">
          <div className="row">
          {tourDates.map((tour, index) => (
              <div key={index} className="col-md-12 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-3">
                        <h5 className="card-title">{tour.date}</h5>
                      </div>
                      <div className="col-md-3">
                        <h6 className="card-subtitle mb-2 text-muted">{tour.location}</h6>
                      </div>
                      <div className="col-md-3">
                        <p className="card-text">{tour.venue}</p>
                      </div>
                      <div className="col-md-3 mr-1">
                        <a href="#" className="btn btn-primary">BUY TICKETS</a>
                      </div>
                    </div>
                  </div>
                </div>
                {index !== tourDates.length - 1 && <hr />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
import React from 'react';
import './App.css';
import Nav from './nav';
import Presentation from './presentation';
import Services from './services';
import Sponsors from './sps';
import Infos from './infos';
import Pictures from './pictures';
import Footer from './footer';
const tabelist=[
  {
  person:'For patient',
  acts:'Find a doctor, book a visit and solve any health-related doubt',
  image:'https://www.docplanner.com/img/screen-marketplace@2x.png',
  country:true,
  class:false
},
  {
  person:'For doctors',
  acts:'Save time managing visits and cut no-shows by half',
  image:'https://www.docplanner.com/img/screen-saas@2x.png',
  country:false,
  class:true
}]
const spons=['ZnanyLekarz','Doctoralia','MioDottore','DoktorTakvimi','ZnamyLekar']
const  advg=[
  { logo:'https://www.docplanner.com/img/flag.png',
    titre :'Leader in 10 countries',
    info:'Poland, Turkey, Spain, Italy,Czech Republic, Mexico, Brazil,Colombia, Argentina and Chile'
},
{ logo:'https://www.docplanner.com/img/patients.png',
titre :'1.5 million appointments',
info:'booked last month'

},
{ logo:'https://www.docplanner.com/img/visits.png',
titre :'30 million unique patients',
info:'visit us every month'

},
{ logo: 'https://www.docplanner.com/img/doctors.png',
titre :'2 million active doctors',
info:'trust in our solutions'

},
]
const photo=[
  
{
  pic:'https://www.docplanner.com/images/warsaw.png',
    txt:'Warsaw',
    boutton:'SEE OPENINGS',
  },
    {
      pic:'https://www.docplanner.com/images/barcelona.png',
      txt:'Bercelona',
      boutton:'SEE OPENINGS',
    },
      {
        pic:'https://www.docplanner.com/images/istanbul.png',
        txt:'Istanbul',
        boutton:'SEE OPENINGS',
      },
        {
          pic:'https://www.docplanner.com/images/rome.png',
          txt:'Rome',
          boutton:'SEE OPENINGS',
        },
          {
            pic:'https://www.docplanner.com/images/mexico-city.png',
            txt:'Mexico-City',
            boutton:'SEE OPENINGS',
          },
            {
              pic:'https://www.docplanner.com/images/curitiba.png',
              txt:'Curitiba',
              boutton:'SEE OPENINGS',
            },


]

function App() {
  return (
    <div className="App">
      <Nav/>
      <Presentation/>
      <Services Boxs={tabelist}/>
      <Sponsors spons={spons}/>
      <Infos advg={advg}/>
      <Pictures photo={photo}/>
      <Footer/>
      

    </div>
  );
}

export default App;

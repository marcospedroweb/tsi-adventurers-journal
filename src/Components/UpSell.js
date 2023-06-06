import React from 'react';
import styles from './UpSell.module.css';
import AdventureCard from './AdventureCard';
import AirlineTicked from './AirlineTicked';
import { GlobalContext } from '../Context/GlobalStorage';

const UpSell = () => {
  const { completedOrder } = React.useContext(GlobalContext);
  const [hotels, setHotels] = React.useState([
    {
      name: 'Hotel Unique',
      state: 'São Paulo',
      address: 'Av. Brigadeiro Luís Antônio, 4700 - Jardim Paulista',
      price: 250.0,
      about:
        'O Hotel Unique é um hotel de luxo localizado em São Paulo, conhecido por sua arquitetura moderna e única.',
      hotelAmenities: ['Wifi', 'Piscina', 'Academia', 'Spa'],
    },
    {
      name: 'Tivoli Mofarrej São Paulo',
      state: 'São Paulo',
      address: 'Alameda Santos, 1437 - Cerqueira César',
      price: 300.0,
      about:
        'O Tivoli Mofarrej São Paulo é um hotel de luxo situado na região de Cerqueira César, em São Paulo.',
      hotelAmenities: ['Wifi', 'Piscina', 'Restaurante', 'Bar'],
    },
    {
      name: 'Copacabana Palace Hotel',
      state: 'Rio de Janeiro',
      address: 'Av. Atlântica, 1702 - Copacabana',
      price: 600.0,
      about:
        'O Copacabana Palace Hotel é um icônico hotel localizado na famosa praia de Copacabana, no Rio de Janeiro.',
      hotelAmenities: ['Wifi', 'Piscina', 'Academia', 'Spa', 'Salão de beleza'],
    },
  ]);
  const [airlineTicket, setAirlineTicked] = React.useState([
    {
      name: 'Azul Linhas Aéreas',
      image: 'azul.png',
      origin: {
        name: 'SDU',
        time: '16:15',
      },
      destination: {
        name: 'VCP',
        time: '17:45',
      },
      date: '12/06/2023',
      duration: '1h 30min',
      price: 'R$ 650,75',
    },

    {
      name: 'Gol Linhas Aéreas',
      image: 'gol.png',
      origin: {
        name: 'CGH',
        time: '12:45',
      },
      destination: {
        name: 'BSB',
        time: '14:30',
      },
      date: '11/06/2023',
      duration: '1h 45min',
      price: 'R$ 800,50',
    },
    {
      name: 'LATAM Airlines Brasil',
      image: 'latam.png',
      origin: {
        name: 'GRU',
        time: '08:30',
      },
      destination: {
        name: 'GIG',
        time: '10:50',
      },
      date: '10/06/2023',
      duration: '2h 20min',
      price: 'R$ 1.150,99',
    },
  ]);

  return (
    <section className={`${styles.section} container-xl`}>
      <div className={`${styles.divUp} bg-white p-3 rounded`}>
        <h2>Que tal garantir sua hospedagem proximo a aventura?</h2>
        <p>Veja alguns hotéis próximos ás suas aventuras.</p>
        <div>
          {hotels.map((hotel, index) => {
            return (
              <div key={hotel.name}>
                <AdventureCard
                  data={hotel}
                  hotel={true}
                  best={index === 0 ? true : false}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className={`${styles.divUp} bg-white p-3 rounded mt-5`}>
        <h2>Que tal garantir sua passagem até a aventura?</h2>
        <p>Veja voos de avião que te deixarão proximo a sua aventura.</p>
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-lg-11">
            {airlineTicket.map((element, index) => {
              return (
                <div key={element.name} className="mt-3">
                  <AirlineTicked data={element} best={index === 0} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpSell;

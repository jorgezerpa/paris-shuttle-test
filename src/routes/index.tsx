import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { BannerForm } from '~/components/shared/bannerForm/bannerForm';
// import type { DocumentHead } from '@builder.io/qwik-city';
// import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  const CARDS = [
    { image: '/images/destination_paris.jpg', title: 'Paris', link: '/' },
    { image: '/images/destination_beauvais.jpg', title: 'Aéroport de Beauvais', link: '/' },
    { image: '/images/destination_cdg.jpg', title: 'Aéroport de Charles de Gaulle (CDG)', link: '/' },
    { image: '/images/destination_disneyland.jpg', title: 'Disneyland', link: '/' },
    { image: '/images/destination_orly.jpg', title: "Aéroport d'Orly", link: '/' },
  ]

  const SERVICES = [
    { image: '/images/picto_voyage.png', title: 'Agence de voyage', text: 'Parishuttle Low cost est un transporteur routier de voyageurs depuis 5 ans. La prestation offerte est le transport VTC en voiture ou navette avec chauffeur privé.' },
    { image: '/images/picto_logo.png', title: 'Pourquoi nous ?', text: "Besoin d'un taxi ou d'un meilleur moyen de transport pour rejoindre Disneyland ? Paris shuttle est situé au centre du val d'Europe, marne la vallée (à 500m du parc). Siège social : First cab, 12 av Maurice Thorez 94200 Ivry sur seine.    " },
    { image: '/images/picto_groupe.png', title: 'Spécial groupe', text: "Toutes vos demandes par mail seront étudiées par notre service client qui vous répondra entre 24H et 48H.  " },
    { image: '/images/picto_services.png', title: '', text: "Notre service de navette est une solution de transport VTC sur mesure facile, pratique et économique pour vos transferts en porte à porte entre tous les aéroports parisiens  , la région parisienne ainsi que Paris centre et tous ses arrondissements ." },
    { image: '/images/picto_vehicule.png', title: "Nos véhicules", text: "Notre flotte est composée de véhicules de 4 places (Caravelle 9 places, Mercedes classe E, C4 grand Picasso) ainsi que d'autres navettes 9 places. Nos chauffeurs de navette parisienne résident aux plus proche d' Eurodisney afin d'optimiser vos déplacements et surtout votre retour.  " },
  ]


  return (
    <div class=''>
      <BannerForm />

      <div class="flex justify-center mt-10">
        <div class='flex justify-center border-b border-b-primary-dark mb-10 w-full max-w-[1300px] '>
          <h4 class='text-3xl text-primary-dark font-thin text-center max-w-[1100px]'>"Paris shuttle" est un service de transport de personnes en Taxi-Navette (VTC) privé ou partagé entre les aéroports parisiens et Disneyland Paris.</h4>
        </div>
      </div>

      <div class="flex justify-center mb-10">
        <div class="flex flex-wrap lg:flex-nowrap px-1 justify-center gap-5 w-full max-w-[1300px] ">
          {CARDS.map((item, index) => (
            <div key={index} style={{ backgroundImage: `url(${item.image})` }} class="bg-center bg-cover bg-no-repeat w-[40%] lg:w-full h-[30vw] min-h-[200px]  sm:h-[300px]  bg-gray-400 flex items-center">
              <div class='w-full py-3 bg-black bg-opacity-80 text-lg text-center text-white'>{item.title}</div>
            </div>
          ))}
        </div>
      </div>

      <div class="flex justify-center mt-10 bg-gray-200" >
        <div class='flex justify-center border-b border-b-primary-dark mb-10 w-full max-w-[1300px] '>
          <h4 class='text-3xl text-primary-dark font-thin text-center max-w-[1100px]'>Profitez de nos promos de Navette Disney pour toute la famille jusqu'à votre hotel à Disneyland Paris ! Les tarifs sont fixes avec un chauffeur privé, dans un véhicule spacieux pour les enfants et bagages.  </h4>
        </div>
      </div>

      <div class="flex justify-center  bg-gray-200 pb-10">
        <div class="flex flex-wrap lg:flex-nowrap px-1  gap-5 w-full max-w-[1300px] ">
          // @ts-ignore
          {[1, 2].map((item, index) => (
            <div key={index} class="pb-3 bg-white">
              <img src="/images/pack-family-cdg_75_l3Raxru.jpg" alt="" />
              <p class="text-primary-dark text-lg text-center py-6 px-1">CHARLES DE GAULLE (CDG) ⇄ DISNEYLAND</p>
              <div class="flex justify-center w-full mb-4">
                <button type='submit' class='bg-[#F1C933] hover:bg-[#e6cd72] text-primary-dark font-bold py-2 px-6 rounded-lg'>
                  En savoir plus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div class='flex flex-col gap-6 py-10 bg-gray-300'>
        <h3 class='text-center inline-block text-2xl font-bold text-gray-700'>Demande de devis</h3>
        <p class='text-center text-gray-500'>Demande de devis sur mesure, rapide et efficace !</p>
        <div class="flex justify-center w-full mb-4">
          <button type='submit' class='bg-gray-700 hover:text-gray-500 text-white font-bold py-2 px-6 rounded-lg'>
            Faire une demande de Devis
          </button>
        </div>
      </div>

      <div class="bg-[#4496BB] py-5 flex flex-col items-center px-2" >
        <div class="flex justify-center ">
          <div class='flex justify-center border-b border-b-white mb-10 w-full max-w-[1300px] '>
            <h4 class='text-3xl text-white font-thin text-center max-w-[1100px]'>Paris Navette : Moin cher que le taxi!</h4>
          </div>
        </div>
        <div class='bg-white max-w-[1300px] w-full'>
          <p class="text-[#000080] py-3 px-4 border-b-2 border-b-gray-400"><span class='font-bold'>Paris shuttle</span> se positionne en tant que <span class='font-bold'>leader</span> sur le marché des <span class='font-bold'>navettes parisiennes</span> et répond aux principales interrogations tel que : </p>
          <p class="text-[#4D9BEE] py-3 px-4 border-b-2 border-b-gray-400">- Quel est le meilleur moyen de transport entre Orly et Disneyland ? </p>
          <p class="text-[#4D9BEE] py-3 px-4 border-b-2 border-b-gray-400">- Comment se rendre à Disneyland depuis l'aéroport  Charles de gaulle ?</p>
          <p class="text-[#4D9BEE] py-3 px-4 border-b-2 border-b-gray-400">-  Quel est le moyen de transport le moins cher pour aller de Beauvais à Disneyland Paris ?  </p>
          <p class="text-[#000080] py-3 px-4 border-b-2 border-b-gray-400">-  Quel est le moyen de transfert le plus rapide entre l'aéroport d' Orly et l'aéroport de Roissy CDG ?             </p>
          <p class="text-[#000080] py-3 px-4 border-b-2 border-b-gray-400">
            <span class='font-bold'>En route vers l'aventure!</span>
            Les<span class='font-bold'> Tarifs</span> sont fixes et le
            <span class='font-bold'>transport</span> est plus confortable qu’un
            <span class='font-bold'>bus, train, Uber</span> ou autre
            <span class='font-bold'>taxi</span> jusqu'au magique
            <span class='font-bold'>parc disneyland</span>  ou Paris.
            <span class='font-bold'>Pourquoi sommes nous les moins cher ? :</span>  Tout simplement parce que nos chauffeurs n'effectuent que des
            <span class='font-bold'>trajets</span> ciblés en
            <span class='font-bold'>navette-aéroport-disneyland-Paris.</span> Avec des
            <span class='font-bold'>prix</span> attractifs, nous optimisons notre planning et évitons ainsi les retours à vide de nos
            <span class='font-bold'>navettes</span> et les attentes pour nos
            <span class='font-bold'>chauffeurs :</span> tous le monde y gagne !
          </p>
          <p class="text-[#000080] py-3 px-4 border-b-2 border-b-gray-400">Un <span class='font-bold'>Chauffeur  VTC</span> pour un voyage à <span class='font-bold'>prix</span> préférentiel. Nos clients sont toujours agréablement surpris de trouver un service de <span class='font-bold'>transport</span> qualitatif si économique ; car nous savons qu' un voyage avec les enfants, poussettes et bagages n'est pas si simple. Nos chauffeurs sont sensibilisés à vous faciliter la tâche pour que vous soyez les plus sereins possible jusqu'à votre <span class='font-bold'>hôtel</span> ou jusqu'à <span class='font-bold'></span>disney.</p>
          <p class="text-[#000080] py-3 px-4 border-b-2 border-b-gray-400"><span class='font-bold'>Paris Shuttle</span> pour une <span class='font-bold'>liaison directe</span> en <span class='font-bold'>taxi</span> ou <span class='font-bold'>navette</span> tous les <span class='font-bold'>hôtels aux alentours</span> du parc <span class='font-bold'>Disney,</span> la gare de Chessy, <span class='font-bold'>Marne la vallée,</span> val d'europe ainsi que le nouveau parc <span class='font-bold'>"village nature"</span> by center parcs (ouvert depuis septembre 2017).</p>
        </div>
      </div>

      <div class="flex justify-center mb-32 lg:mb-10 mt-10">
        <div class=" flex flex-col lg:flex-row items-center px-1 justify-center gap-20 sm:gap-5 lg:gap-5 w-full max-w-[1300px] ">
          {SERVICES.map(item => (
            <div class="lg:w-[40%] w-full px-2 h-[30vw] min-h-[200px] flex items-center flex-col">
              <img src={item.image} alt="" />
              <div class='w-full py-3bg-opacity-80 text-2xl text-center text-gray-800'>{item.title}</div>
              <div class='w-full py-3bg-opacity-80  text-center text-gray-500'>{item.text}</div>
            </div>
          ))}
        </div>
      </div>

      <div class='bg-gray-100 w-full flex items-center justify-center py-20 sm:px-0 px-2'>
        <img src="/images/atour.png" width={440} alt="" />
      </div>


    </div>
  );
});

export const head: DocumentHead = {
  title: 'Paris Shuttle',
  meta: [
    {
      name: 'Home Page',
      content: 'First-shuttle',
    },
  ],
};

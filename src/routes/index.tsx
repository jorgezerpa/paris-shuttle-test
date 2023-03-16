import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { BannerForm } from '~/components/shared/bannerForm/bannerForm';


export default component$(() => {
  
  return (
    <div class=''>
      <BannerForm />

      <div class="md:px-1 px-5 w-full  max-w-6xl mx-auto">
        <div class="w-full py-10 flex items-center justify-center gap-10 lg:flex-row flex-col">
          <div class='w-full'>
            <div class="border-b border-b-primary-dark mb-5">
              <h2 class="lg:text-2xl text-xl text-primary-dark font-bold">TRANSFERTS ENTRE LES AÉROPORTS, PARIS ET DINEYLAND.</h2>
            </div>
            <p class="text-gray-800 ">Notre site vous propose des solutions de transfert (navette privée, voiture avec chauffeur privé, navette partagée, taxi sur mesure) entre les différents aéroports de Paris, Charles de gaulle, Orly et Beauvais afin d'eviter les attentes aux bus, trains et autres taxi onéreux.</p>
          </div>
          <div class='w-full flex justify-center items-center'>
            <img class="min-w-[280px]" src="/images/photo_about.png" alt="" />
          </div>
        </div>
      </div>

      <div class='bg-gray-200'>

        <div class='py-1 w-full  max-w-6xl mx-auto'>
        <div class="border-b border-b-primary-dark mb-5 mt-10 md:mx-2 mx-0">
          <h2 class="lg:text-2xl text-2xl text-white md:text-primary-dark font-bold">NOS PACK FAMILY DISNEYLAND.</h2>
        </div>
        <div class="flex justify-center pb-10">
          <div class="flex flex-col lg:flex-row  items-center justify-center flex-wrap lg:flex-nowrap px-1  gap-5 w-full max-w-[1300px]  ">
            <div class=" bg-white w-full lg:w-auto flex justify-center items-center flex-col">
              <img src="/images/pack-family-cdg_75_Ah7kZWP.jpg" alt="" />
              <p class="text-primary-dark text-[1rem] text-center py-6 px-1 font-bold">CHARLES DE GAULLE (CDG) ⇄ DISNEYLAND</p>
              <div class="flex justify-center w-full">
                <button type='submit' class='bg-primary-dark hover:bg-[#4D5E84] text-white font-bold py-2 w-full'>
                  En savoir plus
                </button>
              </div>
            </div>
            <div class=" bg-white w-full lg:w-auto flex justify-center items-center flex-col">
              <img src="/images/pack-family-orly_75_iUypA8g.jpg" alt="" />
              <p class="text-primary-dark text-[1rem] text-center py-6 px-1 font-bold">ORLY ⇄ DISNEYLAND</p>
              <div class="flex justify-center w-full">
                <button type='submit' class='bg-primary-dark hover:bg-[#4D5E84] text-white font-bold py-2 w-full'>
                  En savoir plus
                </button>
              </div>
            </div>
            <div class=" bg-white w-full lg:w-auto flex justify-center items-center flex-col">
              <img src="/images/pack-family-orly_75_iUypA8g.jpg" alt="" />
              <p class="text-primary-dark text-[1rem] text-center py-6 px-1 font-bold">ORLY ⇄ DISNEYLAND</p>
              <div class="flex justify-center w-full">
                <button type='submit' class='bg-primary-dark hover:bg-[#4D5E84] text-white font-bold py-2 w-full'>
                  En savoir plus
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>


      <div class='py-10'>
        <div class="flex justify-center pb-10">
          <div class="flex flex-col lg:flex-row  items-center justify-center flex-wrap lg:flex-nowrap px-1  gap-5 w-full max-w-6xl  ">
            <div class=" p-5 shadow-sm shadow-[rgba(60,60,60,.5)] bg-white w-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url(/images/background_navette_privee.png)' }} >
              <h2 class="mb-2 text-xl text-primary-dark font-bold">VOITURE PRIVÉE</h2>
              <p class="mb-1 text-gray-600 flex items-center gap-2"><span><img src="/images/plus_list.png" alt="" /></span> Service Chauffeur</p>
              <p class="mb-1 text-gray-600 flex items-center gap-2"><span><img src="/images/plus_list.png" alt="" /></span> Départ immédiat</p>
              <p class="mb-1 text-gray-600 flex items-center gap-2"><span><img src="/images/plus_list.png" alt="" /></span> Voyagez seul à bord</p>
              <p class="mb-1 text-gray-600 flex items-center gap-2"><span><img src="/images/plus_list.png" alt="" /></span> Service de porte à porte</p>
              <p class="mb-1 text-gray-600 flex items-center gap-2"><span><img src="/images/plus_list.png" alt="" /></span> Chauffeur Professionnel</p>
            </div>

            <div class=" p-5 shadow-sm shadow-[rgba(60,60,60,.5)] bg-white w-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url(/images/background_navette_partagee.png)' }} >
              <h2 class="mb-2 text-xl text-primary-dark font-bold">VAN Privé</h2>
              <p class="mb-1 text-gray-600 flex items-center gap-2"><span><img src="/images/plus_list.png" alt="" /></span> Service Confortable</p>
              <p class="mb-1 text-gray-600 flex items-center gap-2"><span><img src="/images/plus_list.png" alt="" /></span> Service porte à porte</p>
              <p class="mb-1 text-gray-600 flex items-center gap-2"><span><img src="/images/plus_list.png" alt="" /></span> Siège bébé</p>
              <p class="mb-1 text-gray-600 flex items-center gap-2"><span><img src="/images/plus_list.png" alt="" /></span> Idéal pour les groupes</p>
              <p class="mb-1 text-gray-600 flex items-center gap-2"><span><img src="/images/plus_list.png" alt="" /></span> Navette de 8 personnes</p>
            </div>

          </div>
        </div>
      </div>

      <div class='bg-gray-100 w-full flex items-center justify-center py-20 sm:px-0 px-2'>
        <img src="/images/insigne.png" width={220} alt="" />
      </div>

    </div>
  );
});

export const head: DocumentHead = {
  title: 'First-Shuttle',
  meta: [
    {
      name: 'Home Page',
      content: 'First-shuttle',
    },
  ],
};

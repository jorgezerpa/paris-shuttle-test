import { component$, useSignal, useVisibleTask$, useResource$, Resource } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { useLocation } from '@builder.io/qwik-city';
import Devis from '~/components/shared/trajet/Devis';
// import MenuO from '~/components/shared/trajet/MenuO';
import OffreMap from '~/components/shared/trajet/OffreMap';
import PackCard from '~/components/shared/trajet/PackCard';
import Services from '~/components/shared/trajet/Services';
import TrajetList from '~/components/shared/trajet/TrajetList';
import { getTrajets } from '~/store/services/mainApi';
import { BannerForm } from '~/components/shared/bannerForm/bannerForm';


export default component$(() => {
  const { params } = useLocation()
  const charge = useSignal('');
  const destination = useSignal('');

  useVisibleTask$(()=>{
    if(params.place){
      charge.value = params.place.split('/')[0]
      destination.value = params.place.split('/')[1]
    }
    if(!params.place){
      charge.value = ''
      destination.value = ''
    }
  })
  

  const trajetsData = useResource$(async()=>{
    return getTrajets()
  })

  
  return (
    <div>
      { params.place && (

        <div class="flex flex-col items-center w-full mx-auto bg-white text-white  justify-center">
          <Resource
            value={trajetsData}
            onResolved={(trajets:any)=>{
              return (
                <div class={'flex flex-col items-center w-full mx-auto bg-white text-white  justify-center'}>
                  <BannerForm charge={params.place ? params.place.split('/')[0] : ''} destination={params.place ? params.place.split('/')[1] : ''}  />
                  {/* <MenuO charge={params.place ? params.place.split('/')[0] : ''} destination={params.place ? params.place.split('/')[1] : ''}/> */}
                  <OffreMap trajets={trajets} charge={params.place ? params.place.split('/')[0] : ''} destination={params.place ? params.place.split('/')[1] : ''}/>
                  <TrajetList trajets={trajets} charge={params.place ? params.place.split('/')[0] : ''} destination={params.place ? params.place.split('/')[1] : ''} />
                  <PackCard/>
                  <Devis/>
                  <div class="flex-1 w-full">
                  <Services/> 
                  </div>
                </div>
              )
            }}                    
          />

          <div class="flex w-full justify-center mt-[30px] py-[30px] bg-[#f5f5f5]">
            <img src="/images/insigne.png" width={220} alt="" />
          </div>

        </div>
      )}
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Accueil First-shuttle',
  meta: [
    {
      name: 'description',
      content: 'First-shuttle',
    },
  ],
};
import { component$, useSignal, useResource$, Resource, useTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { useLocation } from '@builder.io/qwik-city';
import Devis from '~/components/shared/trajet/Devis';
import OffreMap from '~/components/shared/trajet/OffreMap';
import PackCard from '~/components/shared/trajet/PackCard';
import Services from '~/components/shared/trajet/Services';
import TrajetList from '~/components/shared/trajet/TrajetList';
import { getTrajets } from '~/store/services/mainApi';
import { BannerForm } from '~/components/shared/bannerForm/bannerForm';
import { Loader } from '~/components/shared/Loader/Loader';


export default component$(() => {
  const { params } = useLocation()
  const charge = useSignal('');
  const destination = useSignal('');

  
  useTask$(({ track }) => {
    track(() => params);
   
    if (params.place) {
      charge.value = params.place.split('/')[0]
      destination.value = params.place.split('/')[1]
    }
    if (!params.place) {
      charge.value = ''
      destination.value = ''
    }
  });
  

  const trajetsData = useResource$(async()=>{
    const trajets = await getTrajets()
    return trajets
  })


  return (
    <div>
      {params.place && (
        <div class="flex flex-col items-center  w-full mx-auto bg-white text-white  justify-center">
          <Resource
            value={trajetsData}
            onRejected={()=><div>an error happen</div>}
            onPending={()=><Loader />}
            onResolved={(trajets: any) => {
              // console.log(trajets)
              return (
                <div class={'flex flex-col items-center w-full mx-auto bg-white text-white  justify-center'}>
                  <div class="w-full mx-auto max-w-10xl">
                    <BannerForm charge={charge.value} destination={destination.value} />
                  </div>
                  <OffreMap trajets={trajets} charge={charge.value} destination={destination.value}/>
                  <TrajetList trajets={trajets} charge={charge.value} destination={destination.value} />
                  <PackCard />
                  <Devis />
                  <div class="flex-1 w-full">
                    <Services />
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
  title: 'Trajet First-shuttle',
  meta: [
    {
      name: 'description',
      content: 'First-shuttle',
    },
  ],
};
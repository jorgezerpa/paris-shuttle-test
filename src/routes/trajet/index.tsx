import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Devis from '~/components/shared/trajet/Devis';
import MenuO from '~/components/shared/trajet/MenuO';
import OffreMap from '~/components/shared/trajet/OffreMap';
import PackCard from '~/components/shared/trajet/PackCard';
import Services from '~/components/shared/trajet/Services';



export default component$(() => {
  return (
    <div class="flex flex-col items-center w-full mx-auto bg-white text-white  justify-center">

      <MenuO/>

      <OffreMap/>

      <PackCard/>
       
      <Devis/>
      <div class="flex-1 w-full">
      <Services/> 
      </div>


      <div class="flex w-full justify-center mt-[30px] py-[30px] bg-[#f5f5f5]">

        <img src="/images/insigne.png" width={220} alt="" />

      </div>

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

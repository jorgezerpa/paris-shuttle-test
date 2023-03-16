import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (

    <>
    
    <div class="flex flex-col md:flex-row mt-[25px] mx-auto gap-10 sm:gap-30 w-full max-w-6xl ">
        {/* DetailsOffre; */}

        <div class="flex-1 flex-col cursor-pointer sm:min-w-[19rem] max-h-[13rem] object-cover bg-[url('/images/background_navette_privee.png')] bg-no-repeat">

          <h3 class="text-xl text-[#213665] font-bold  mt-2">
            VOITURE PRIVÉE
          </h3>
          <ul class="text-sm text-black mt-3">
            <li class="flex flex-row items-center mb-2"> 
            <img class="w-[15px] h-[15px] mr-[10px] object-cover " src="/images/plus_list.png"  alt="" />Service Chauffeur</li>
            <li class="flex flex-row items-center mb-2">
              <img class="w-[15px] h-[15px] mr-[10px] object-cover " src="/images/plus_list.png" alt="" />Départ immédiat</li>
            <li class="flex flex-row items-center mb-2">
              <img class="w-[15px] h-[15px] mr-[10px] object-cover " src="/images/plus_list.png"  alt="" />Voyagez seul à bord</li>
            <li class="flex flex-row items-center mb-2">
              <img class="w-[15px] h-[15px] mr-[10px] object-cover " src="/images/plus_list.png"  alt="" />Service de porte à porte</li>
            <li class="flex flex-row items-center">
              <img class="w-[15px] h-[15px] mr-[10px] object-cover " src="/images/plus_list.png" alt="" />Chauffeur Professionnel</li>
          </ul>
        </div>
        {/* partie2 */}
        <div class="flex-1 flex-col cursor-pointer w-full sm:min-w-[19rem] max-h-[13rem] bg-[url('/images/background_navette_partagee.png')] bg-no-repeat">
          <h3 class="text-xl text-[#213665] font-bold  mt-2">
            VAN PRIVÉE
          </h3>
          <ul class="text-sm text-black mt-3">
            <li class="flex flex-row items-center mb-2"> <img class="w-[15px] h-[15px] mr-[10px] object-cover " src="/images/plus_list.png"  alt="" />
                Service Confortable</li>
            <li class="flex flex-row items-center mb-2">
              <img class="w-[15px] h-[15px] mr-[10px] object-cover " src="/images/plus_list.png" alt="" />
              Service porte à porte</li>
            <li class="flex flex-row items-center mb-2">
              <img class="w-[15px] h-[15px] mr-[10px] object-cover " src="/images/plus_list.png" alt="" />
              Siège bébé</li>
            <li class="flex flex-row items-center mb-2">
              <img class="w-[15px] h-[15px] mr-[10px] object-cover " src="/images/plus_list.png" alt="" />
              Idéal pour les groupes</li>
            <li class="flex flex-row items-center">
              <img class="w-[15px] h-[15px] mr-[10px] object-cover " src="/images/plus_list.png" alt="" />
              Navette de 8 personnes</li>
          </ul>
        </div>
        
      </div>
    
    </>

    );
});
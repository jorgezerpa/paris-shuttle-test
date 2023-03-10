import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';



export default component$(() => {
  return (
    <div class=" flex flex-col items-center max-w-6xl mx-auto bg-[#f3f3f3] h-auto">

      <div class="mt-15 mx-[4rem] flex flex-col bg-white px-8 py-16">

        <div>
          <h4 class="text-[#56CBF6] text-2xl font-bold">NOS SERVICES</h4>
          <p class="text-xl text-justify mt-5">
              <b> Parishuttle Lowcost</b> est un transporteur routier de voyageurs. La prestation offerte est le transport de voyageurs de porte à porte depuis ou à destination des aéroports d'Orly, Charles de Gaulle Roissy (CDG), Beauvais et de toutes destinations sur Paris et sa proche banlieue, et plus généralement sur toutes destinations négociées de gré à gré. L'entreprise est sise: 12 rue de la source 60270 GOUVIEUX.
          </p>
        </div>

        <div class="mt-5">
          <h4 class="text-[#56CBF6] text-2xl font-bold">NOS AVANTAGES:</h4>

          <ul class=" min-w-[12,5rem] text-xl text-justify mt-5">
            <li>Service 7j/7 et 24h/24. </li>
            <li>Tarifs fixes sur toutes nos lignes. </li>
            <li>Moins cher qu’un taxi. </li>
            <li>Plus confortable et plus rapide que les transports en commun.</li>
            <li>Pas de frais de bagages. </li>
            <li>Pas de tarif de nuit. </li>
            <li>Siège bébé fourni gratuitement sur simple demande. </li>
            <li>Service de porte à porte. </li>
            <li>Une flotte récente de véhicules conforts et climatisées.</li>

          </ul>
        </div>

        <div class="flex flex-row gap-8 mt-5">
          
          <div class="flex-6">
            <h4 class="text-[#56CBF6] text-2xl font-bold">TRANSFERT PARTAGÉE</h4>

            <ul class="md:text-1,5xl text-xl text-justify list-disc marker:text-[#56CBF6] ml-5 mt-5">
              <li>Navette confortable </li>
              <li>Navette climatisée</li>
              <li>Navette de 8 personnes </li>
              <li>Nombre de place limité</li>
              <li>Moins chèr qu'un taxi</li>
              <li>Pas de suppléments bagages </li>
              <li>Idéal pour les groupes</li>
              <li>Service de porte à porte </li>
              <li>Chauffeur Professionnel</li>

            </ul>
          </div>

          <div>
            <h4 class="text-[#56CBF6] text-2xl font-bold">NOS AVANTAGES:</h4>

            <ul class="text-xl text-justify list-disc marker:text-[#56CBF6] ml-5 mt-5">
              <li>Service Chauffeur</li>
              <li>Départ immédiat</li>
              <li>Voyagez seul à bord </li>
              <li>Ne faites plus la queue pour un Tax</li>
              <li>Service de porte à porte</li>
              <li>Chauffeur Professionnel </li>
            </ul>
          </div>
        </div>

        <div class="flex flex-row gap-8 mt-5">
          
          <div>
            <h4 class="text-[#56CBF6] text-2xl font-bold"> TRANSFERT VIP </h4>

            <ul class="md:text-xl text-sm text-justify list-disc marker:text-[#56CBF6] ml-5 max-w-[15,6rem] mt-5">
              <li>Voitures d'exception</li>
              <li>Combinez service chauffeur au luxe des plus belles voitures</li>
              <li>Idéal pour les businessmen et les amoureux du luxe</li>
              <li>Service de porte à porte </li>
              <li>Chauffeur Professionnel</li>
            </ul>
          </div>

          <div>
            <h4 class="text-[#56CBF6] text-2xl font-bold">SPÉCIAL PACK FAMILY</h4>

            <ul class="text-xl  list-disc marker:text-[#56CBF6] ml-5 max-w-[200px] mt-5">
              <li>La formule Family Packs'adresse aux familles composées de deux adultes  et de deux enfants, le Transfert s'effectuant en navette partagée</li>
            </ul>
          </div>
        </div>


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

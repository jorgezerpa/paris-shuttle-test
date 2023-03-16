import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';


export default component$(() => {
    return (
        <>
            <div class='bg-[#F3F3F3] flex flex-col items-center py-10'>
                <h2 class="w-full font-thin text-2xl text-center mb-10">NOS PACKS FAMILY</h2>
                <div class="w-full max-w-[1400px] flex flex-col gap-10 px-5 sm:px-14">
                    <div class='bg-white w-full flex flex-col lg:flex-row p-10 gap-5'>
                        <div class="flex justify-center lg:justify-start">
                            <img src="/images/pack-image.jpg" alt="" />
                        </div>
                        <div class='px-1'>
                            <h2 class='font-bold text-left text-primary-dark mb-4 text-xl'>
                                CHARLES DE GAULLE (CDG) ⇄ DISNEYLAND
                            </h2>
                            <div class='max-w-[700px] text-gray-500 mb-4'>
                                <p>offre exeptionelle en <span class="border-b border-b-gray-700 font-bold">navette privée!</span> Sans attendre.  Vous voyagez seul à bord.</p>
                                <p class='font-bold'>La formule idéale pour les familles composées de 2 adultes et 1 ou 2 enfants</p>
                                <p><span class="text-[#f00]">Prix :<span class='font-bold'>75 € EN PRIVEE,</span> sans aucun supplément et sans limitation de bagages.</span></p>
                            </div>

                            <div class="flex justify-center lg:justify-start">
                                <div class="px-6 py-2 cursor-pointer text-primary-dark font-bold bg-[#F1C933] rounded-md inline-flex justify-center items-center">
                                    Je Réserve
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='bg-white w-full flex flex-col lg:flex-row p-10 gap-5'>
                        <div class="flex justify-center lg:justify-start max-h-[15rem] ">
                            <img src="/images/pack-image.jpg" alt="" />
                        </div>
                        <div class=''>
                            <h2 class='font-bold text-left text-primary-dark mb-4 text-xl'>
                                ORLY ⇄ DISNEYLAND
                            </h2>
                            <div class='max-w-[700px]  h-auto text-gray-500 mb-4'>
                                <p><span class="font-semibold text-[#f00]">Navette privée</span> de Orly à Disneyland en Minivan</p>
                                <p class='font-bold'>Cette formule est  uniquement destinée aux familles composées de 2 adultes et 1 ou 2 enfants. (4 PERSONNES MAX)</p>
                                <p class=''><span class="font-semibold text-[#f00]">Promo : 75€ ,</span> sans aucun suppléments. </p>
                                <p>Votre chauffeur vous attendra à la sortie10A avec une pancarte portant votre nom et vous déposera directement devant le hall de votre hotel  (aucun frais d attente ne sera facturé même si vol retardé).</p>
                                <p>Chaque véhicule dispose de 1 siège-auto ainsi que d' 1 réhausseur mis à votre disposition gratuitement.</p>
                                <p>Pour les groupes plus important, vous pouvez remplir une demande de devis qui sera répondu dans les 48 heures.</p>


                                <p><span class="text-[#f00]">NB : Face à une forte demande, les reservations de derniere minute (avant 24h) ne seront prise en compte qu'apres validation par telephone au +33 6 85 59 94 94 . </span></p>
                            </div>

                            <div class="flex justify-center lg:justify-start">
                                <div class="px-6 cursor-pointer py-2 text-primary-dark font-bold bg-[#F1C933] rounded-md inline-flex justify-center items-center">
                                    Je Réserve
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class='bg-gray-100 w-full flex items-center justify-center py-20 sm:px-0 px-2'>
                <img src="/images/atour.png" width={440} alt="" />
            </div>
        </>
    )
});

export const head: DocumentHead = {
    title: 'Nos Packs Family',
    meta: [
        {
            name: 'description',
            content: 'First-shuttle',
        },
    ],
};

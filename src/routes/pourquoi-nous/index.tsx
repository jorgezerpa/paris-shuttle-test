import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { FaqItem } from "~/components/faqItem/FaqItem";
import { WHY_US } from "~/constants/whyUs";


export default component$(() => {
    return (
        <>
            <div class='bg-[#F3F3F3] flex flex-col items-center py-7'>
                <div class='bg-white max-w-[1350px] w-full min-h-screen py-14 px-8'>
                    <div class='flex'>
                        <div class="w-6"></div>
                        <h2 class='inline-flex flex-col items-center font-semibold text-gray-800 text-3xl'>
                            Pourquoi choisir Paris Shuttle ?
                            <span class='w-full bg-primary-light h-[1px] mb-1'></span>
                            <span class='w-[110%] bg-primary-light h-[1px]'></span>
                        </h2>
                    </div>
                    <p class='mt-6'>Paris Shuttle, c’est une société de transport de personnes pour les voyageurs qui atterrissent aux aéroports CDG, Orly et Beauvais. Disponible 24 heures sur 24 et 7 jours sur 7, c’est une solution sur mesure avec des véhicules de tourisme confortable et avec chauffeur professionnel. Tous les véhicules proposés sont adaptés en fonction du nombre de personnes à transporter et bien évidemment, le volume de bagages. À l’aller comme au retour, le chauffeur VTC s’engage à vous accompagner jusqu’à la destination de votre choix : cela peut être un restaurant, un hôtel, un bureau, un aéroport ou encore Disneyland. </p>

                    <div class="mt-10">
                        <h3 class={`text-lg text-[#2F54B1] mb-6`}>NOUS SOMMES LES SPÉCIALISTES DANS LE TRANSPORT À PARIS !</h3>
                        <p>Qui de mieux pour vous transporter qu’un professionnel ? Paris Shuttle fait partie des leaders dans le domaine du transport de personne. Fort de plusieurs années d’experience, vous tournez vers cette entreprise est un gage de satisfaction. Comprenant exactement ce dont pourra avoir besoin la plupart des voyageurs, les offres répondent efficacement aux attentes et aux besoins de tous. Si ce n’est pas le cas, vous aurez toujours la possibilité de passer par le service de transport sur mesure. De
                            <a href='#' class='text-primary-light inline-block border-b-primary-light border-b'> DG à Disneyland,</a> de
                            <a href='#' class='text-primary-light inline-block border-b-primary-light border-b'> CDG à Paris,</a> de
                            <a href='#' class='text-primary-light inline-block border-b-primary-light border-b'> CDG à Orly</a> ou
                            <a href='#' class='text-primary-light inline-block border-b-primary-light border-b'> de CDG à Beauvais,</a>
                            vous n’aurez plus à faire face à des problèmes de déplacement. </p>
                    </div>

                    {WHY_US.map((item) => {
                        return (
                            <FaqItem
                                title={item.title}
                                description={item.description}
                                items={item.item}
                                small={true}
                            />

                        )
                    })}


                    <p class="mt-10 text-primary-dark text-sm">MEILLEUR RAPPORT QUALITÉ PRIX</p>
                    <p class="mt-6 text-sm"><span class='font-semibold'>Paris shuttle</span> travaille avec tous les hôtels autour du parc Disneyland Resort Paris : Disneyland hotel *****, New-York *****, Newport Bay Club ***, Sequoia Lodge, Santa Fe, Cheyenne **, ainsi que les hôtels Kyriad, Holiday Inn, Vienna International Magic Circus Hotel et Thomas Cook Explorers Hotel.</p>
                    <p class="mt-10 text-sm">Grâce à <span class='font-semibold'>Paris shuttle</span> oubliez donc les taxis onéreux et capricieux ou les transports en commun toujours surchargés; Dès la confirmation de votre réservation vous aurez la certitude d'être transporté à bon port tout en maîtrisant votre budget. Nous fournissons en service de porte à porte très compétitifs.</p>
                    <p class="mt-10 text-sm"><span class='font-semibold'>Avec Paris shuttle pas de surprise Le tarif de votre transfert est fixe et connu à l'avance.</span> De plus nous avons supprimé toutes les taxes habituelles appliquées par nos concurrents! (Pas de suppléments pour vos bagages, Siège auto pour bébé ou pour enfants gratuits et pas de surcoût pour vos transferts de nuit.)</p>
                    <p class="mt-10 text-sm"><span class='font-semibold'>Voila l'engagement et le professionnalisme de Parishuttle Low cost.</span> Besoin de rapidité, d'efficacité Paris shuttle est votre partenaire privilégié pour des vacances ou un séjour à Paris réussi depuis les aéroports de Roissy Charles de Gaulle ou Beauvais ou encore vers le parc Disneyland Resort et Paris.</p>
                    <p class="mt-10 text-sm"><span class='font-semibold'>Paris shuttle</span> opère sur le marché depuis plusieurs année , avec une activité pour les grands événements, du voyage d’affaire pour les hommes d’affaires, aux déplacements organisés pour des touristes en vacances à Paris.<br />Nos valeurs guides sont: qualité, ponctualité, courtoisie et élégance. </p>
                    <p class="mt-10 text-sm">Nous sommes très attentifs aux exigences de tous nos clients, en particulier, à celles d’enfants et de voyageurs handicapés.<br />Du point de vue professionnel, notre force est une flotte de voitures et minibus exclusivement formée par des véhicules de luxe avec tous les conforts disponibles et surtout, à des prix abordables et clairs. C’est crucial pour nous car nous ne voulons pas que nos clients soient surpris au moment du solde.</p>
                    <p class="mt-10 text-sm">Les tarifs comprennent : assurance pour voyageurs et bagages ainsi qu'un chauffeur bilingue et élégant.</p>
                    <p class="mt-10 text-sm">Nous travaillons pour vous offrir le meilleur, et nous sommes si sûrs de réussir que nous vous assurons la garantie “satisfait ou remboursé”. Vous effectuerez en effet le paiement seulement au service conclu, directement à notre chauffeur en espèce ou par carte de crédit.</p>

                </div>
            </div>
            <div class='bg-gray-100 w-full flex items-center justify-center py-20 sm:px-0 px-2'>
                <img src="/images/atour.png" width={440} alt="" />
            </div>
        </>
    )
});

export const head: DocumentHead = {
    title: 'Pourquoi nous ?',
    meta: [
        {
            name: 'description',
            content: 'First-shuttle',
        },
    ],
};
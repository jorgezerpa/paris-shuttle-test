import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { FaqItem } from "~/components/faqItem/FaqItem";
import { RULES } from "~/constants/rules";

export default component$(() => {
    return (
        <>
            <div class="bg-[#F3F3F3] flex items-center flex-col py-7">
                <div class='bg-white max-w-[1350px] w-full min-h-screen py-14 px-8'>
                    <h2 class="font-bold text-[#FF0000] text-2xl mb-8">NOTE SPECIALE CORONAVIRUS :</h2>
                    <p class="mb-3 text-lg">
                        Chers clients, suite aux evenements exceptionnels de crise du coronavirus generant de fortes annulations, nous ne pourrons malheureusement pas maintenir notre activite pour le moment et notre tresorerie ne permettra malheuresement pas de remboursser tout le monde dans l'immediat. Nous vous proposons donc de reporter votre reservation pour plutard, le cas echeant le remboussement ne pourra se faire qu'avec une reprise normale de l'activite.
                    </p>
                    <p class="mb-32 text-lg">
                        Merci de votre compréhension.
                    </p>
                    <p class="mb-10 text-2xl font-bold text-gray-800">
                        L'ACHAT DES PRESTATIONS AUPRÈS DE PARIS SHUTTLE LOWCOST IMPLIQUE L'ENTIÈRE ADHÉSION DU CLIENT AUX CONDITIONS GÉNÉRALES ET L'ACCEPTATION SANS RÉSERVE DE TOUTES LES DISPOSITIONS Y ÉTANT ÉNONCÉES. PARISHUTTLE LOWCOST SE RÉSERVE LE DROIT D'EFFECTUER DES MISES À JOUR À TOUT MOMENT DES CONDITIONS DÉFINIES AUX PRÉSENTES (ÉVOLUTION DE LA RÉGLEMENTATION EN VIGUEUR, TARIFICATION, ETC…). AUSSI, NOUS VOUS INVITONS VIVEMENT À LES CONSULTER RÉGULIÈREMENT.
                    </p>
                    {
                        RULES.map((rule, index) => {
                            return (
                                <div key={index}>
                                    <FaqItem
                                        title={rule.title}
                                        description={rule.description}
                                    />
                                    {
                                        rule.title === "2. RÉSERVATION AVANT 24 HEURES :" && (
                                            <div class="text-xl">
                                                Réservations de dernière minute (moins de 24 heures avant l’heure de prise en charge):<br />
                                                Les réservations doivent être effectuées 48 heures à l’avance ou bien par téléphone ou via le site web.<br />
                                                <span class="text-[f00]">Pour une réservation de dernière minute, il faut appeler la société pour vérifier la disponibilité des véhicules.</span><br />
                                                La société se réserve le droit d’annuler toute réservation effectuée moins de 24 heures à l’avance si elle n’a pas de voitures disponibles à l’heure choisie par le client.<br /><br />
                                                <span class="text-[f00]">Le prix d’une réservation de dernière minutes peut être supérieur au prix indiqué sur le site web.</span><br />
                                            </div>
                                        )
                                    }
                                    {
                                        rule.title === "4. MODIFICATIONS DES RÉSERVATIONS / REMBOURSEMENT ET ANNULATIONS :" && (
                                            <div class="mt-6">
                                                {
                                                    rule.item && rule.item.map((item, index) => (
                                                        <a href="/#" key={index} class="text-lg text-blue-600 flex items-center mb-3">{item}</a>
                                                    ))
                                                }
                                            </div>
                                        )
                                    }
                                </div>
                            )
                        })
                    }
                    <p class="w-full bg-white max-w-[1350px] text-sm italic">Siege social : First cab 12 av Maurice Thorez 94200 Ivry sur seine ; Siret 80872064300010</p>
                </div>
            </div>
            <div class='bg-gray-100 w-full flex items-center justify-center py-20 sm:px-0 px-2'>
                <img src="/images/atour.png" width={440} alt="" />
            </div>
        </>
    );
});

export const head: DocumentHead = {
    title: 'Conditions Générales de Ventes',
    meta: [
        {
            name: 'description',
            content: 'First-shuttle',
        },
    ],
};
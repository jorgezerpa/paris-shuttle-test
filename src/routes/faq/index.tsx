import { component$, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { FaqItem } from "~/components/faqItem/FaqItem";
import { FAQS } from "~/constants/faq";

export default component$(() => {

    const itemFiveExtra = $(() => {
        const values = [
            ['Terminal 1', 'Porte 34 Niveau arrivée'],
            ['Terminal 2A & 2F', 'Porte 7 Niveau arrivées'],
            ['Terminal 2C', 'Porte 16 Niveau arrivées'],
            ['Terminal 2E', 'Porte 7 Niveau arrivées'],
            ['2B & 2D', 'Porte 7 Niveau arrivées'],
            ['2G', 'À la sortie de bagage'],
            ['Terminal 3', 'Sortie principale ORLY'],
            ['SUD Porte L', 'WEST Porte D BEAUVAIS'],
        ];

        return (
            <div class="flex flex-col items-center justify-start py-5">
                <h3 class="mb-3">POINTS DE RENDRE-VOUS CDG (CHARLES DE GAULLE)</h3>
                <div class="w-full max-w-[600px]">
                    {
                        values.map((item, index) => (
                            <div key={index} class="mb-2 flex w-full justify-center">
                                <p class="text-left w-full justify-center">{item[0]}</p>
                                <p class="text-left w-full justify-center">{item[1]}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    });

    return (
        <>
            <div class="bg-[#F3F3F3] flex justify-center py-7">
                <div class="bg-white max-w-[1350px] w-full min-h-screen py-14 px-8">
                    <h2 class="font-bold text-gray-800 text-2xl">QUESTIONS FRÉQUEMMENT POSÉES :</h2>
                    {
                        FAQS.map((faq, index) => {
                            let extra: boolean | (() => any) = false;
                            if (faq.title === "3. Combien de temps à l'avance dois-je réserver ?") extra = $(() => "Nous vous recommandons de contacter notre service client par téléphone au +33 1 84 23 04 75, Cependant nous ferons tout notre possible pour répondre favorablement à vos demandes de réservation de dernière minute.")
                            if (faq.title === "5. OÙ TROUVEZ MON CHAUFFEUR QUAND J'ARRIVE À L'AÉROPORT ?") extra = itemFiveExtra
                            return (
                                <FaqItem
                                    key={index}
                                    title={faq.title}
                                    description={faq.description}
                                    items={faq.item}
                                    extra={extra}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <div class="bg-gray-100 w-full flex items-center justify-center sm:px-0 py-20 px-2">
                <img src="/images/atour.png" width={440} alt="" />
            </div>
        </>
    );
});

export const head: DocumentHead = {
    title: 'Foire aux Questions',
    meta: [
        {
            name: 'description',
            content: 'First-shuttle',
        },
    ],
};
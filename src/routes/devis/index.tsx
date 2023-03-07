import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import Form from '~/components/devis/Form/Form';
import styles from './index.css?inline';

export default component$(() => {
    useStylesScoped$(styles);

    const hoursArray = []
    for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 12; j++) {
            const hours = i < 10 ? `0${i}` : `${i}`
            const minutes = (j * 5) < 10 ? `0${j * 5}` : `${j * 5}`
            const time = `${hours}:${minutes}`
            hoursArray.push(time)
        }
    }
    return (
        <div class="flex items-center flex-col pt-5">
            <div class="max-w-[1100px] w-full px-3">
                <div class='flex justify-center w-full'>
                    <h2 class={`inline-block pt-5 text-3xl text-center border-b-primary-dark border-b text-primary-dark font-bold`}>DEMANDE DE DEVIS</h2>
                </div>
                <Form />
            </div>

            <div class='bg-gray-100 w-full flex items-center justify-center py-20 sm:px-0 px-2'>
                <img src="/images/atour.png" width={440} alt="" />
            </div>

        </div>

    );
});

export const head: DocumentHead = {
    title: 'Demande de Devis',
    meta: [
        {
            name: 'description',
            content: 'First-shuttle',
        },
    ],
};
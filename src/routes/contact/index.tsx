import { component$ } from "@builder.io/qwik";
import Form from "~/components/contact/Form/Form";
import { DocumentHead } from "@builder.io/qwik-city";


export default component$(() => {

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
        <div class="flex items-center flex-col pt-5 bg-gray-200 px-3">
            <div class="max-w-[1400px] w-full px-3 bg-white py-10">
                <div class='flex justify-center w-full'>
                    <h2 class={`px-8 w-full pt-5 text-3xl text-left text-primary-dark font-thin`}>CONTACT</h2>
                </div>
                <Form />
            </div>

            <div class='w-full flex items-center justify-center py-20 sm:px-0 px-2'>
                <img src="/images/atour.png" width={440} alt="" />
            </div>
        </div>

    );
});

export const head: DocumentHead = {
    title: 'Contact || First-shuttle',
    meta: [
        {
            name: 'Contact',
            content: 'First-shuttle',
        },
    ],
};
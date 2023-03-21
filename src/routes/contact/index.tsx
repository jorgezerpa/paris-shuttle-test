import { component$ } from "@builder.io/qwik";
import Form from "~/components/contact/Form/Form";
import type { DocumentHead } from "@builder.io/qwik-city";


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
            <div class="max-w-6xl mx_auto w-full px-3 bg-white py-10">
                <div class='flex justify-center w-full'>
                    <h2 class={`px-8 w-full pt-5 text-3xl text-left text-primary-dark font-thin`}>CONTACT</h2>
                </div>
                <Form />
            </div>

            <div class="flex w-full justify-center mt-[30px] py-[30px] bg-gray-200">
                <img src="/images/insigne.png" width={220} alt="" />
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
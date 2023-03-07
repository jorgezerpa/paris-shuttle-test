import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <div>
            <div class="flex justify-center w-full py-6">
                <img src="/images/404.png" width={270} alt="" />
            </div>

            <div class='bg-gray-100 w-full flex items-center justify-center py-20 sm:px-0 px-2'>
                <img src="/images/atour.png" width={440} alt="" />
            </div>

        </div>
    );
});

export const head: DocumentHead = {
    title: 'Page Not Found',
    meta: [
        {
            name: 'description',
            content: 'First-shuttle',
        },
    ],
};
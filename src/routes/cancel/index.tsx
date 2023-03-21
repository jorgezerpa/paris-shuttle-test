import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <div>
            <div class="flex justify-center w-full py-6">
                <img src="/images/cancel.gif" width={270} alt="" />
            </div>
            <div class="flex justify-center w-full">
                <a href="/" class="flex text-sm text-blueGray-900">Return to the home page</a>
            </div>

            <div class='bg-gray-100 w-full flex items-center justify-center py-12 sm:px-0 px-2'>
                <img src="/images/insigne.png" width={240} alt="" />
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
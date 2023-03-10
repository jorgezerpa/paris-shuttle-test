import { component$, useSignal } from "@builder.io/qwik";
import { useCF7Form } from "~/hooks/useCF7Form";

export default component$(() => {
    const { handleSubmit } = useCF7Form({ siteUrl: 'siteUrl', formId: 'FormID' });
    const formRef = useSignal<HTMLFormElement>();

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
        <div class="flex items-center flex-col">
            <div class="w-full px-3">
                <form ref={formRef} preventdefault:click onSubmit$={() => { console.log('test') }} class={`relative w-full rounded-sm bg-white bg-opacity-40`}>
                    <div class="p-3 pb-10 pt-0 flex w-full flex-col lg:flex-row justify-between flex-wrap items-center lg:justify-start">
                        <div class="w-full lg:w-1/3 px-3">
                            <label for="countries" class="mt-5 block mb-1 text-base font-normal dark:text-black">Nom<span class='text-red-500 text-2xl'>*</span></label>
                            <input type="text" id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                        </div>
                        <div class="w-full lg:w-1/3 px-3">
                            <label for="countries" class="mt-5 block mb-1 text-base font-normal dark:text-black">Courriel<span class='text-red-500 text-2xl'>*</span></label>
                            <input type="text" id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                        </div>
                        <div class="w-full lg:w-1/3 px-3">
                            <label for="countries" class="mt-5 block mb-1 text-base font-normal dark:text-black">Téléphone<span class='text-red-500 text-2xl'>*</span></label>
                            <input type="text" id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                        </div>
                        <div class="w-full px-3 mt-10">
                            <label for="countries" class="block mb-1 text-base font-normal text-gray-600 dark:text-black">Message</label>
                            <textarea class="h-[100px] bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5"></textarea>
                        </div>
                    </div>
                    <div class="flex justify-center w-full py-10 px-7">
                        <button onClick$={() => { handleSubmit(formRef.value as HTMLFormElement) }} type="submit" class="bg-primary-dark font-bold py-2 px-6 text-white rounded-lg hover:bg-primary-dark">
                            ENVOYER
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
})
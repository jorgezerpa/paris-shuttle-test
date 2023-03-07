import { component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import styles from './form.css?inline';
import { useCF7Form } from "~/hooks/useCF7Form";

export default component$(() => {
    useStylesScoped$(styles);
    const { handleSubmit } = useCF7Form({ siteUrl: 'siteUrl', formId: 'FormId' });
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
        <div class="flex items center flex-col">
            <div class="w-full px-3">
                <form ref={formRef} preventdefault:click onSubmit$={() => { console.log('test') }} class={`relative w-full rounded-sm bg-white bg-opacity-40`}>

                    <div class="py-3 pb-0 px-5 w-full">
                        <h2 class={`text-lg font-semibold text-primary-dark border-primary-dark border-b`}>VOS COORDONNÉES</h2>
                    </div>

                    <div class="p-3 pb-10 flex w-full flex-col lg:flex-row justify-between flex-wrap items-center lg:justify-start">
                        <div class="w-full lg:w-1/3 px-3">
                            <label for="countries" class="mt-5 block mb-1 text-base font-normal dark:text-white">Nom<span class='text-red-500 text-2xl'>*</span></label>
                            <input type="text" id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                        </div>
                        <div class="w-full lg:w-1/3 px-3">
                            <label for="countries" class="mt-5 block mb-1 text-base font-normal dark:text-white">Prénom<span class='text-red-500 text-2xl'>*</span></label>
                            <input type="text" id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                        </div>
                        <div class="w-full lg:w-1/3 px-3">
                            <label for="countries" class="mt-5 block mb-1 text-base font-normal dark:text-white">Adresse email<span class='text-red-500 text-2xl'>*</span></label>
                            <input type="text" id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                        </div>
                        <div class="w-full lg:w-1/3 px-3">
                            <label for="countries" class="mt-5 block mb-1 text-base font-normal dark:text-white">Téléphone<span class='text-red-500 text-2xl'>*</span></label>
                            <input type="text" id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                        </div>
                    </div>

                    <div class="py-3 pb-0 px-5 w-full">
                        <h2 class={`text-lg font-semibold text-primary-dark border-primary-dark border-b`}>DÉTAILS DE VOYAGE</h2>
                    </div>
                    <div class="p-3 flex w-full flex-col lg:flex-row justify-between items-center gap-6">
                        <div class="w-full">
                            <label for="countries" class="block mb-1 text-base font-normal text-gray-600 dark:text-white">Nombre de passagers</label>
                            <input type="number" id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                        </div>
                        <div class="w-full">
                            <label for="countries" class="block mb-1 text-base font-normarl text-gray-600 dark:text-white">Nombre des passagers</label>
                            <select id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5">
                                <option value="US" selected>1</option>
                                <option value="US">2</option>
                                <option value="US">3</option>
                                <option value="US">4</option>
                                <option value="US">5</option>
                                <option value="US">6</option>
                                <option value="US">7</option>
                                <option value="US">8</option>
                            </select>
                        </div>
                        <div class="w-full">
                            <label for="countries" class="block mb-1 text-base font-normarl text-gray-600 dark:text-white">Nombre de bagages :</label>
                            <select id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5">
                                <option value="US" selected>1</option>
                                <option value="US">2</option>
                                <option value="US">3</option>
                                <option value="US">4</option>
                                <option value="US">5</option>
                                <option value="US">6</option>
                                <option value="US">7</option>
                                <option value="US">8</option>
                                <option value="US">9</option>
                                <option value="US">10</option>
                                <option value="US">11</option>
                                <option value="US">12</option>
                            </select>
                        </div>
                    </div>

                    <div class="w-full px-3">
                        <label for="countries" class="block mb-1 text-base font-normal text-gray-600 dark:text-white">Message</label>
                        <textarea class="h-[100px] bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5"></textarea>
                    </div>

                    <div class="flex justify-center w-full py-10">
                        <button onClick$={() => { handleSubmit(formRef.value as HTMLFormElement) }} type="submit" class="bg-primary-dark font-bold py-2 px-6 text-white rounded-lg hover:bg-primary-dark">
                            ENVOYER VOTRE DEMANDE
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
})
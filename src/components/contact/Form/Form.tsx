import { component$, useSignal, $ } from "@builder.io/qwik";
import { submitContactForm } from "~/store/services/mainApi";
import { useSubmitForm } from "~/hooks/useSubmitForm";

export default component$(() => {
    const formRef = useSignal<HTMLFormElement>();
    const { handleSubmit, isError, isLoading, isSuccess } = useSubmitForm($(submitContactForm))

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
                <form ref={formRef} preventdefault:submit onSubmit$={() => formRef.value && handleSubmit(formRef.value)} class={`relative w-full rounded-sm bg-white bg-opacity-40`}>
                    <div class="p-3 pb-10 pt-0 flex w-full flex-col lg:flex-row justify-between flex-wrap items-center lg:justify-start">
                        <div class="w-full lg:w-1/3 px-3">
                            <label for="nom" class="mt-5 block mb-1 text-base font-normal dark:text-black">Nom<span class='text-red-500 text-2xl'>*</span></label>
                            <input required name="fullname" type="text" id="nom" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                        </div>
                        <div class="w-full lg:w-1/3 px-3">
                            <label for="courriel" class="mt-5 block mb-1 text-base font-normal dark:text-black">Courriel<span class='text-red-500 text-2xl'>*</span></label>
                            <input required name="email" type="text" id="courriel" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                        </div>
                        <div class="w-full lg:w-1/3 px-3">
                            <label for="telephone" class="mt-5 block mb-1 text-base font-normal dark:text-black">Téléphone<span class='text-red-500 text-2xl'>*</span></label>
                            <input required name="subject" type="text" id="telephone" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                        </div>
                        <div class="w-full px-3 mt-10">
                            <label for="message" class="block mb-1 text-base font-normal text-gray-600 dark:text-black">Message</label>
                            <textarea required name="message" id="message" class="h-[100px] bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5"></textarea>
                        </div>
                    </div>
                    <div class="flex flex-col justify-center items-center w-full py-10 px-7">
                        {isLoading
                            ? <div>Envoie</div>
                            : (
                                <button type="submit" class="bg-primary-dark font-bold py-2 px-6 text-white rounded-lg hover:bg-primary-dark">
                                    ENVOYER
                                </button>
                            )
                        }
                        {isError && <div>une erreur s'est produite. essayez à nouveau</div>}
                        {isSuccess && <div>envoyé avec succès</div>}
                    </div>
                </form>
            </div>
        </div>
    );
})
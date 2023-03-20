import { component$, useSignal, $, useContext} from "@builder.io/qwik";
import { submitDevisForm } from "~/store/services/mainApi";
import { globalContext } from "~/store/context/mainContext";
import { useSubmitForm } from "~/hooks/useSubmitForm";

export default component$(() => {
    const context = useContext(globalContext)
    const formRef = useSignal<HTMLFormElement>();
    const { handleSubmit, isError, isLoading, isSuccess } = useSubmitForm($(submitDevisForm))

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
                <form ref={formRef} preventdefault:submit onSubmit$={()=>formRef.value && handleSubmit(formRef.value)} class={`relative w-full rounded-sm bg-white bg-opacity-40`}>

                    <div class="py-3 pb-0 px-5 w-full">
                        <h2 class={`text-lg font-semibold text-primary-dark border-primary-dark border-b`}>VOS COORDONNÉES</h2>
                    </div>

                    <div class="p-3 pb-10 flex w-full flex-col lg:flex-row justify-between flex-wrap items-center lg:justify-start">
                        <div class="w-full lg:w-1/3 px-3">
                            <label for="first_name" class="mt-5 block mb-1 text-base font-normal dark:text-black">Nom<span class='text-red-500 text-2xl'>*</span></label>
                            <input name="first_name" type="text" id="first_name" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                        </div>
                        <div class="w-full lg:w-1/3 px-3">
                            <label for="surname_name" class="mt-5 block mb-1 text-base font-normal dark:text-black">Prénom<span class='text-red-500 text-2xl'>*</span></label>
                            <input name="surname_name" type="text" id="surname_name" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                        </div>
                        <div class="w-full lg:w-1/3 px-3">
                            <label for="email" class="mt-5 block mb-1 text-base font-normal dark:text-black">Adresse email<span class='text-red-500 text-2xl'>*</span></label>
                            <input type="text" name="email" id="email" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                        </div>
                        <div class="w-full lg:w-1/3 px-3">
                            <label for="phone" class="mt-5 block mb-1 text-base font-normal dark:text-black">Téléphone<span class='text-red-500 text-2xl'>*</span></label>
                            <input name="phone" type="text" id="phone" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                        </div>
                    </div>

                    <div class="py-3 pb-0 px-5 w-full">
                        <h2 class={`text-lg font-semibold text-primary-dark border-primary-dark border-b`}>DÉTAILS DE VOYAGE</h2>
                    </div>
                    <div class="p-3 flex w-full flex-col lg:flex-row justify-between items-center gap-6">
                        
                        <div class="w-full lg:w-1/3 px-3">
                            <label for="passengers" class="block mb-1 text-base font-normal text-gray-600 dark:text-black">Nombre des passagers <span class='text-red-500 text-2xl'>*</span></label>
                            <select name="passengers" id="passengers" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5">
                                <option selected={context.numberOfPassengers==='1'} value="1">1</option>
                                <option selected={context.numberOfPassengers==='2'} value="2">2</option>
                                <option selected={context.numberOfPassengers==='3'} value="3">3</option>
                                <option selected={context.numberOfPassengers==='4'} value="4">4</option>
                                <option selected={context.numberOfPassengers==='5'} value="5">5</option>
                                <option selected={context.numberOfPassengers==='6'} value="6">6</option>
                                <option selected={context.numberOfPassengers==='7'} value="7">7</option>
                                <option selected={context.numberOfPassengers==='8'} value="8">8</option>
                            </select>
                        </div>

                        <div class="w-full lg:w-1/3 px-3">
                            <label for="pickup_address" class="block mb-1 text-base font-normal dark:text-black">Lieu de prise en charge<span class='text-red-500 text-2xl'>*</span> </label>
                            <select name="pickup_address" id="pickup_address" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5">
                                <option value="" >-----</option>
                                <option selected={context.charge==='orly'} value="orly">Orly</option>
                                <option selected={context.charge==='disneyland'} value="disneyland">Disneyland</option>
                                <option selected={context.charge==='paris'} value="paris">Paris</option>
                                <option selected={context.charge==='cdg'} value="cdg">Charles de Gaulle</option>
                                <option selected={context.charge==='beauvais'} value="beauvais">Beauvais</option>
                            </select>
                        </div>

                        <div class="w-full lg:w-1/3 px-3">
                            <label for="dropoff_address" class=" block mb-1 text-base font-normal dark:text-black">Destination<span class='text-red-500 text-2xl'>*</span></label>
                            <select name="dropoff_address" id="dropoff_address" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5">
                            <option value="" >-----</option>
                                <option selected={context.destination==='orly'} value="orly">Orly</option>
                                <option selected={context.destination==='disneyland'} value="disneyland">Disneyland</option>
                                <option selected={context.destination==='paris'} value="paris">Paris</option>
                                <option selected={context.destination==='cdg'} value="cdg">Charles de Gaulle</option>
                                <option selected={context.destination==='beauvais'} value="beauvais">Beauvais</option>
                            </select>
                        </div>

                    </div>

                    <div class="w-full px-3">
                        <label for="message" class="block mb-1 text-base font-normal text-gray-600 dark:text-black">Message</label>
                        <textarea name="message" id="message" class="h-[100px] bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5"></textarea>
                    </div>

                    <div class="flex flex-col justify-center items-center w-full py-10 px-7">
                        { isLoading 
                            ? <div>enviant</div> 
                            : (
                                <button type="submit" class="bg-primary-dark font-bold py-2 px-6 text-white rounded-lg hover:bg-primary-dark">
                                    ENVOYER VOTRE DEMANDE
                                </button>
                            )
                        }
                        { isError &&  <div>une erreur se produit. essayer à nouveau</div>}
                        { isSuccess &&  <div>envoyé avec succès</div>}    
                    </div>

                </form>
            </div>
        </div>
    );
})
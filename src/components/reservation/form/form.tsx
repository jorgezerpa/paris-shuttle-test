import { component$, useSignal, $, useContext, useVisibleTask$ } from '@builder.io/qwik';
import { useSubmitForm } from '~/hooks/useSubmitForm';
import { globalContext } from '~/store/context/mainContext';
import { createOrder } from '~/store/services/mainApi';

export default component$(() => {
    const context = useContext(globalContext)
    const { handleSubmit, isError, isLoading, isSuccess } = useSubmitForm($(createOrder))
    const travelWithReturn = useSignal<boolean>()
    const formRef = useSignal<HTMLFormElement>()

    useVisibleTask$(() => {
        travelWithReturn.value = context.typeVoyage === 'retour'
    })

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
            <div class=" w-full px-3">
                <form preventdefault:submit onSubmit$={() => formRef.value && handleSubmit(formRef.value)} ref={formRef} class={` relative w-full mt-4 py-7 rounded-sm bg-white bg-opacity-40`} >
                    <div class='p-3 flex w-full flex-col lg:flex-row justify-between items-center gap-6'>
                        <div class="w-full">
                            <label for="countries" class="block mb-1 text-base font-normarl text-gray-600 dark:text-black">Type de navette</label>
                            <select required name="type_navette" id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5">
                                <option value="prive" selected>Privé</option>
                                <option value="patagee">Patagée</option>
                            </select>
                        </div>
                        <div class="w-full">
                            <label for="countries" class="block mb-1 text-base font-normarl text-gray-600 dark:text-black">Nombre des passagers</label>
                            <select required name="nombre_passagers" id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5">
                                <option selected={context.numberOfPassengers === '1'} value="1">1</option>
                                <option selected={context.numberOfPassengers === '2'} value="2">2</option>
                                <option selected={context.numberOfPassengers === '3'} value="3">3</option>
                                <option selected={context.numberOfPassengers === '4'} value="4">4</option>
                                <option selected={context.numberOfPassengers === '5'} value="5">5</option>
                                <option selected={context.numberOfPassengers === '6'} value="6">6</option>
                                <option selected={context.numberOfPassengers === '7'} value="7">7</option>
                                <option selected={context.numberOfPassengers === '8'} value="8">8</option>
                            </select>
                        </div>
                        <div class="w-full">
                            <label for="countries" class="block mb-1 text-base font-normarl text-gray-600 dark:text-black">Nombre de bagages :</label>
                            <select required name='nombre_bagage' id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5">
                                <option value="1" selected>1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                        </div>
                    </div>


                    <h2 class={`px-3 text-1xl text-primary-dark font-bold mt-8 my-5 mb-2`}>TYPE DE VOYAGE</h2>
                    <div class="flex items-center justify-start gap-5 mb-4 px-5">
                        <div class="flex items-center">
                            <input required checked={context.typeVoyage === 'retour'} name="type_voyage" onChange$={() => { travelWithReturn.value = true }} id="default-radio-1" type="radio" value="aller_return" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 " />
                            <label for="default-radio-1" class="ml-2 font-normal text-gray-900">Aller / Retour</label>
                        </div>
                        <div class="flex items-center">
                            <input required checked={context.typeVoyage === 'simple'} name="type_voyage" onChange$={() => { travelWithReturn.value = false }} id="default-radio-2" type="radio" value="aller_simple" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-radio-2" class="ml-2 font-normal text-gray-900">Aller Simple</label>
                        </div>
                    </div>



                    <div class="bg-primary-dark py-3 pb-0 px-5 w-full">
                        <h2 class={`text-lg text-white font-semibold border-white border-b`}>VOYAGE ALLER</h2>
                    </div>
                    <div class='p-3 pb-10 pt-0 bg-primary-dark flex w-full flex-col lg:flex-row justify-between flex-wrap items-center lg:justify-start border-b border-b-white'>
                        <div class="w-full lg:w-1/3 px-3">
                            <label for="countries" class="mt-5 block mb-1 text-base font-normal text-white dark:text-black">Lieu de prise en charge<span class='text-red-500 text-2xl'>*</span> </label>
                            <select required name="lieu_de_prise_charge" id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5">
                                <option value="" >-----</option>
                                <option selected={context.charge === 'orly'} value="orly">Orly</option>
                                <option selected={context.charge === 'disneyland'} value="disneyland">Disneyland</option>
                                <option selected={context.charge === 'paris'} value="paris">Paris</option>
                                <option selected={context.charge === 'cdg'} value="cdg">Charles de Gaulle</option>
                                <option selected={context.charge === 'beauvais'} value="beauvais">Beauvais</option>
                            </select>
                        </div>
                        <div class="w-full lg:w-1/3 px-3">
                            <label for="countries" class="mt-5 block mb-1 text-base font-normal text-white dark:text-black">Date de prise en charge<span class='text-red-500 text-2xl'>*</span> </label>
                            <input required name='date_de_prise_charge' type={'date'} id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                        </div>
                        <div class="w-full lg:w-1/3 px-3">
                            <label for="countries" class="mt-5 block mb-1 text-base font-normal text-white dark:text-black">Heure de prise en charge<span class='text-red-500 text-2xl'>*</span></label>
                            <select required name='heure_de_prise_charge' id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5">
                                <option value="" selected></option>
                                {hoursArray.map((hour, index) => <option key={index} value={hour} class="text-lg" >{hour}</option>)}
                            </select>
                        </div>
                        <div class="w-full lg:w-1/3 px-3">
                            <label for="countries" class="mt-5 block mb-1 text-base font-normal text-white dark:text-black">provenance de vol<span class='text-red-500 text-2xl'>*</span></label>
                            <input required name="provenance_vol" type="text" id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                        </div>
                        <div class="w-full lg:w-1/3 px-3">
                            <label for="countries" class="mt-5 block mb-1 text-base font-normal text-white dark:text-black">N° de vol<span class='text-red-500 text-2xl'>*</span></label>
                            <input required type="text" name="numero_vol" id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                        </div>
                    </div>
                    <div class='p-3 py-7 pt-0 bg-primary-dark flex w-full flex-col lg:flex-row justify-between flex-wrap items-center lg:justify-start border-b border-b-white'>
                        <div class="w-full lg:w-1/3 px-3">
                            <label for="countries" class="mt-5 block mb-1 text-base font-normal text-white dark:text-black">Destination<span class='text-red-500 text-2xl'>*</span></label>
                            <select required name="destination" id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5">
                                <option value="" >-----</option>
                                <option selected={context.destination === 'orly'} value="orly">Orly</option>
                                <option selected={context.destination === 'disneyland'} value="disneyland">Disneyland</option>
                                <option selected={context.destination === 'paris'} value="paris">Paris</option>
                                <option selected={context.destination === 'cdg'} value="cdg">Charles de Gaulle</option>
                                <option selected={context.destination === 'beauvais'} value="beauvais">Beauvais</option>
                            </select>
                        </div>
                        <div class="w-full lg:w-1/3 px-3">
                            <label for="countries" class="mt-5 block mb-1 text-base font-normal text-white dark:text-black">Adresse<span class='text-red-500 text-2xl'>*</span></label>
                            <input required name="adresse" type="text" id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                        </div>
                        <div class="w-full lg:w-1/3 px-3">
                            <label for="countries" class="mt-5 block mb-1 text-base font-normal text-white dark:text-black">Code postal<span class='text-red-500 text-2xl'>*</span></label>
                            <input required name="code_postal" type="text" id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                        </div>
                    </div>


                    <div class={`${travelWithReturn.value ? 'scale-y-100' : 'scale-y-0 h-0'} origin-top transition-all`}>
                        <div class=" bg-primary-light py-3 pb-0 px-5 w-full">
                            <h2 class={`text-lg text-white font-semibold border-white border-b`}>VOYAGE RETOUR</h2>
                        </div>
                        <div class='p-3 pb-10 pt-0 bg-primary-light flex w-full flex-col lg:flex-row justify-between flex-wrap items-center lg:justify-start border-b border-b-white'>
                            <div class="w-full lg:w-1/3 px-3">
                                <label for="countries" class="mt-5 block mb-1 text-base font-normal text-white dark:text-black">Lieu de prise en charge<span class='text-red-500 text-2xl'>*</span> </label>
                                <select required={travelWithReturn.value} name="lieu_de_prise_charge_retour" id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5">
                                    <option value="" >-----</option>
                                    <option selected={context.destination === 'orly'} value="orly">Orly</option>
                                    <option selected={context.destination === 'disneyland'} value="disneyland">Disneyland</option>
                                    <option selected={context.destination === 'paris'} value="paris">Paris</option>
                                    <option selected={context.destination === 'cdg'} value="cdg">Charles de Gaulle</option>
                                    <option selected={context.destination === 'beauvais'} value="beauvais">Beauvais</option>
                                </select>
                            </div>
                            <div class="w-full lg:w-1/3 px-3">
                                <label for="countries" class="mt-5 block mb-1 text-base font-normal text-white dark:text-black">Date de prise en charge<span class='text-red-500 text-2xl'>*</span> </label>
                                <input name="date_de_prise_charge_retour" type={'date'} id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                            </div>
                            <div class="w-full lg:w-1/3 px-3">
                                <label for="countries" class="mt-5 block mb-1 text-base font-normal text-white dark:text-black">Heure de prise en charge<span class='text-red-500 text-2xl'>*</span></label>
                                <select required={travelWithReturn.value} name="heure_de_prise_charge_retour" id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5">
                                    <option value="" selected></option>
                                    {hoursArray.map((hour, index) => <option key={index} value={hour} class="text-lg" >{hour}</option>)}
                                </select>
                            </div>
                            <div class="w-full lg:w-1/3 px-3">
                                <label for="countries" class="mt-5 block mb-1 text-base font-normal text-white dark:text-black">Adresse<span class='text-red-500 text-2xl'>*</span></label>
                                <input required={travelWithReturn.value} name='adresse' type="text" id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                            </div>
                            <div class="w-full lg:w-1/3 px-3">
                                <label for="countries" class="mt-5 block mb-1 text-base font-normal text-white dark:text-black">Code postal<span class='text-red-500 text-2xl'>*</span></label>
                                <input required={travelWithReturn.value} name="code_postal" type="text" id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                            </div>
                        </div>
                        <div class='p-3 py-7 pt-0 bg-primary-light flex w-full flex-col lg:flex-row justify-between flex-wrap items-center lg:justify-start border-b border-b-white'>
                            <div class="w-full lg:w-1/3 px-3">
                                <label for="countries" class="mt-5 block mb-1 text-base font-normal text-white dark:text-black">Destination<span class='text-red-500 text-2xl'>*</span></label>
                                <select required={travelWithReturn.value} name='destination_retour' id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5">
                                    <option value="" >-----</option>
                                    <option selected={context.charge === 'orly'} value="orly">Orly</option>
                                    <option selected={context.charge === 'disneyland'} value="disneyland">Disneyland</option>
                                    <option selected={context.charge === 'paris'} value="paris">Paris</option>
                                    <option selected={context.charge === 'cdg'} value="cdg">Charles de Gaulle</option>
                                    <option selected={context.charge === 'beauvais'} value="beauvais">Beauvais</option>
                                </select>
                            </div>
                            <div class="w-full lg:w-1/3 px-3">
                                <label for="countries" class="mt-5 block mb-1 text-base font-normal text-white dark:text-black">Heure de vol<span class='text-red-500 text-2xl'>*</span></label>
                                <input required={travelWithReturn.value} name="heure_de_prise_charge_retour" type="text" id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                            </div>
                        </div>
                    </div>



                    <div class="bg-gray-100 pt-10 px-5 w-full">
                        <h2 class={`text-lg text-primary-dark font-semibold`}>COORDONNÉES</h2>
                    </div>
                    <div class='p-3 pb-7 bg-gray-100 flex w-full flex-col lg:flex-row justify-between flex-wrap items-center lg:justify-start border-b border-b-white'>
                        <div class="w-full lg:w-1/3 px-3">
                            <label for="countries" class="pt-5 block mb-1 text-base font-normal text-primary-dark">Nom<span class='text-red-500 text-2xl'>*</span></label>
                            <input required name='nom' type="text" id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                        </div>
                        <div class="w-full lg:w-1/3 px-3">
                            <label for="countries" class="pt-5 block mb-1 text-base font-normal text-primary-dark">Prénom<span class='text-red-500 text-2xl'>*</span> </label>
                            <input required name='prenom' type="text" id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                        </div>
                        <div class="w-full lg:w-1/3 px-3">
                            {/* SPACING DIV  */}
                        </div>
                        <div class="w-full lg:w-1/3 px-3">
                            <label for="countries" class="pt-5 block mb-1 text-base font-normal text-primary-dark">Adresse Email<span class='text-red-500 text-2xl'>*</span></label>
                            <input required name='email' type="text" id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                        </div>
                        <div class="w-full lg:w-1/3 px-3">
                            <label for="countries" class="pt-5 block mb-1 text-base font-normal text-primary-dark">Téléphone<span class='text-red-500 text-2xl'>*</span></label>
                            <input required name="phone" type='text' id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
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
    )
});
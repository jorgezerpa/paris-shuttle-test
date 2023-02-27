import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import Dropdown from '../dropdown/dropdown';

export const BannerForm = component$(() => {
    const places = [
        { 'title': 'Francais' },
        { 'title': 'English' },
        { 'title': 'Español' },
        { 'title': 'Italiano' },
    ]

    const { params:{ placeSlug } } = useLocation()

  return (
    <div class='py-10 px-2 lg:px-20'>
        <h2 class={`text-2xl text-center lg:text-left text-primary-dark font-bold`}>SERVICE DE TRANSFERTS AUX AÉROPORTS</h2>
        <p class={`text-2xl text-center lg:text-left text-primary-dark font-extralight`}>{ placeSlug || 'Taxi, vtc ou van économique'}</p>
        <form class={` relative w-full lg:w-[400px] mt-4 py-7 px-9 border border-gray-200 rounded-sm bg-white bg-opacity-40`} >
            <div class="flex items-center justify-start gap-5 mb-4">
                <div class="flex items-center">
                    <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 " />
                    <label for="default-radio-1" class="ml-2 text-sm font-normal text-gray-900 dark:text-gray-300">Aller simple</label>
                </div>
                <div class="flex items-center">
                    <input id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="default-radio-2" class="ml-2 text-sm font-normal text-gray-900 dark:text-gray-300">Aller / Retour</label>
                </div>
            </div>
            <div class='mb-5'>
                <Dropdown items={places} icon="/icons/plane.svg" title='Lieu de Prise en charge'/>
            </div>
            <div class='mb-5'>
                <Dropdown items={places} icon="/icons/place.svg" title='Destination'/>
            </div>
            <div class='mb-5'>
                <Dropdown items={places} icon="/icons/people.svg" title='Nombre des Personnes'/>
            </div>
            <div class="flex justify-center w-full">
                <button type='submit' class='bg-primary-dark hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-lg'>
                    Calculer
                </button>
            </div>
        </form>
    </div>
  )
});
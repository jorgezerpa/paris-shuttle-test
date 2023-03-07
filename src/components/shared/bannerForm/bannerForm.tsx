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

    const { params: { placeSlug }, pathname } = useLocation()

    return (
        <div class='pt-16 bg-center bg-no-repeat bg-cover' style={{ backgroundImage: pathname === '/' ? 'url(/images/visuel_home.jpg)' : '' }}>
            <h2 class={`text-5xl text-center text-white font-bold`}>Paris shuttle.</h2>
            <p>{placeSlug}</p>
            <p class={`text-xl text-center text-white font-normal`}>{placeSlug || 'Transport en navette privée ou partagée économique'}</p>
            <div class="py-4 bg-black bg-opacity-50 mt-36 flex justify-center">
                <form class={` relative w-full lg:w-auto  py-4 px-9 bg-white lg:inline-block`} >
                    <div class="lg:flex justify-center w-full">
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
                        <div class='w-4'></div>
                        <div class='mb-5'>
                            <Dropdown items={places} icon="/icons/plane.svg" title='Lieu de Prise en charge' />
                        </div>
                        <div class='mb-5'>
                            <Dropdown items={places} icon="/icons/place.svg" title='Destination' />
                        </div>
                        <div class='mb-5'>
                            <Dropdown items={places} icon="/icons/people.svg" title='Nombre des Personnes' />
                        </div>
                    </div>
                    <div class="flex justify-center w-full">
                        <button type='submit' class='bg-[#F1C933] hover:bg-[#e6cd72] text-primary-dark font-bold py-2 px-6 rounded-lg'>
                            Calculez
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
});
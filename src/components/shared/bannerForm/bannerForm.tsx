import { component$, useSignal, useClientEffect$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import Dropdown from '../dropdown/dropdown';

export const BannerForm = component$(() => {


    const places = [
        { 'title': ' Lieu de prise en charge' },
        { 'title': 'Orly' },
        { 'title': 'Disneyland' },
        { 'title': 'Paris' },
        { 'title': 'Charles de Gaulle (CDG)' },
        { 'title': 'Beauvais' },
    ]


    const destinations = [
        { 'title': ' Destinations' },
        { 'title': 'Orly' },
        { 'title': 'Disneyland' },
        { 'title': 'Paris' },
        { 'title': 'Charles de Gaulle (CDG)' },
        { 'title': 'Beauvais' },
    ]

    
    const personnes = [
        { 'title': ' Nombre de personnes' },
        { 'title': '1' },
        { 'title': '2' },
        { 'title': '3' },
        { 'title': '4' },
        { 'title': '5' },
        { 'title': '6' },
        { 'title': '7' },
        { 'title': '8' },
    ]
    


    const { params: { placeSlug } } = useLocation()

    const isMobile = useSignal(false)

    useClientEffect$(() => {
        window.addEventListener('resize', () => {
            isMobile.value = window.innerWidth < 768 ? true : false
        })
    })




    return (
        <div class='py-10 px-0 lg:px-20 bg-center bg-no-repeat bg-cover' style={{ backgroundImage: isMobile.value ? 'url(/images/visuel_mobile.jpg)' : 'url(/images/visuel_home.jpg)' }}>
            
            <div class="w-full  py-6  text-gray-900 max-w-6xl mx-auto ">
            <div class="drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)]">
                <h2 class={`text-2xl text-center lg:text-left text-white md:text-primary-dark font-bold font-['gotham-medium'] uppercase`}>SERVICE DE TRANSFERTS AUX AÉROPORTS</h2>
                <p class={`text-2xl text-center lg:text-left text-white md:text-primary-dark font-extralight`}>{placeSlug || 'Taxi, vtc ou van économique'}</p>
            </div>
            <form class={` relative w-full lg:w-[400px] mt-4 py-7 px-9 lg:border border-gray-200 rounded-sm bg-white bg-opacity-40`} >
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
                    <Dropdown items={places} icon="/icons/plane.svg" title='Lieu de Prise en charge' />
                </div>
                <div class='mb-5' >

                

                    <Dropdown items={destinations} icon="/icons/place.svg" title='Destination' />
                </div>
                <div class='mb-5'>
                    <Dropdown items={personnes} icon="/icons/people.svg" title='Nombre des Personnes' />
                </div>
                <div class="flex justify-center w-full">
                    <button type='submit' class='bg-primary-dark hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-lg'>
                        Calculer
                    </button>
                </div>
            </form>

            </div>
        </div>
    )
});
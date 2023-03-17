import { component$, useSignal, useTask$, useVisibleTask$,useResource$,  Resource, useContext, $  } from '@builder.io/qwik';
import { globalContext } from '~/store/context/mainContext';
import { useLocation, useNavigate } from '@builder.io/qwik-city';

import { getTrajets } from '~/store/services/mainApi';
import Dropdown from '../dropdown/dropdown';



export const BannerForm = component$(() => {

    const places = [
        { 'key':'', 'title': ' Lieu de prise en charge' },
        { 'key':'orly', 'title': 'Orly' },
        { 'key':'disneyland', 'title': 'Disneyland' },
        { 'key':'paris', 'title': 'Paris' },
        { 'key':'cdg', 'title': 'Charles de Gaulle (CDG)' },
        { 'key':'beauvais', 'title': 'Beauvais' },
    ]


    const destinations = [
        { 'key':'', 'title': ' Destinations' },
        { 'key':'orly', 'title': 'Orly' },
        { 'key':'disneyland', 'title': 'Disneyland' },
        { 'key':'paris', 'title': 'Paris' },
        { 'key':'cdg', 'title': 'Charles de Gaulle (CDG)' },
        { 'key':'beauvais', 'title': 'Beauvais' },
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

    const showResults = useSignal(false);
    const isIncomplete = useSignal(false);
    const context = useContext(globalContext)
    const { params: { place } } = useLocation()
    const nav = useNavigate()
    const isMobile = useSignal(false)

    const responseData = useResource$(() => {
        //Les trajets
        return getTrajets();
    })

    useVisibleTask$(() => {
        window.addEventListener('resize', () => {
            isMobile.value = window.innerWidth < 768 ? true : false
        })
    })

    useTask$(({track})=>{
      track(()=>[context.charge, context.destination,context.numberOfPassengers])
      isIncomplete.value = false
    })


    return (

        
        <div class='py-10 px-0 lg:px-20 bg-center bg-no-repeat bg-cover h-[29rem]' style={{ backgroundImage: isMobile.value ? 'url(/images/visuel_mobile.jpg)' : 'url(/images/visuel_home.jpg)'}}>
                     
            <div class="w-full max-w-6xl mx-auto py-6  text-gray-900 ">
                <div class="drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)]">
                    <h2 class={`text-2xl text-center lg:text-left text-white md:text-primary-dark font-bold font-['gotham-medium'] uppercase`}>SERVICE DE TRANSFERTS AUX AÉROPORTS</h2>
                    <p class={`text-2xl text-center lg:text-left text-white md:text-primary-dark font-extralight`}>{place || 'Taxi, vtc ou van économique'}</p>
                </div>
                <form preventdefault:submit class={` relative w-full lg:w-[400px] mt-4 py-7 px-9 lg:border border-gray-200 rounded-sm bg-white bg-opacity-40`} >
                  <div class={`${showResults.value ? 'flex' : 'hidden'} p-5  flex-col bg-white z-50 absolute top-0 left-0 right-0 bottom-0 overflow-x-hidden overflow-y-scroll gap-5`}> 
                        <div class={'w-full p-0 flex justify-end'} onClick$={()=>showResults.value=false}>close</div>
                        <div class={'px-2 pb-2 text-primary-dark text-2xl'}>Résultats de l'estimation de prix</div>
                        <Resource 
                            value={responseData}
                            onRejected={() => {
                              return <div class={'px-2 py-5 text-primary-dark font-bold'}>une erreur se produit</div>
                            }}
                            onResolved={(res) => {
                            return res.map((rs:any) => {
                                if (rs.depart.toLowerCase().includes(context.charge.toLowerCase()) && rs.destination.toLowerCase().includes(context.destination.toLowerCase())) {
                                    return (
                                    <>
                                      <div class={'flex justify-between items-center gap-2'}>
                                        <div class=""> {rs.depart} {'-'} {rs.destination} <span class={'font-bold'}>est: {rs.price}€</span></div>
                                        <p onClick$={()=>nav('/reservation')} class='bg-[#213665] font-[Open Sans] text-white font-bold py-2 px-6 rounded-lg'>
                                            Réserver
                                        </p>
                                      </div>
                                    </>
                                    )
                                }
                              })
                            }}
                    />
                    </div>
                    
                    <div class={`${isIncomplete.value ? 'block' : 'hidden'} text-red-600 font-bold p-1 text-center`}>Tous les champs sont requis</div>
                    <div class="flex items-center justify-start gap-5 mb-4">
                        <div class="flex items-center">
                            <input onClick$={()=>context.typeVoyage='simple'}  type="radio" value=""  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 " />
                            <label  class="ml-2 text-sm font-normal text-gray-900 dark:text-black">Aller simple</label>
                        </div>
                        <div class="flex items-center">
                            <input onClick$={()=>context.typeVoyage='retour'} type="radio" value=""  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label  class="ml-2 text-sm font-normal text-gray-900 dark:text-black">Aller / Retour</label>
                        </div>
                    </div>
                    <div class='mb-5'>
                        <Dropdown itemClickHandler={$((currentItem:any)=>{context.charge=currentItem.key})} items={places} icon="/icons/plane.svg" title='Lieu de Prise en charge' defaultValue={(place && place.split('/')[0])?place.split('/')[0]:''} />
                    </div>
                    <div class='mb-5' >

                    

                        <Dropdown itemClickHandler={$((currentItem:any)=>{context.destination=currentItem.key})} items={destinations} icon="/icons/place.svg" title='Destination' defaultValue={(place && place.split('/')[1])?place.split('/')[1]:''}  />
                    </div>
                    <div class='mb-5'>
                        <Dropdown itemClickHandler={$((currentItem:any)=>{context.numberOfPassengers=currentItem.title})} items={personnes} icon="/icons/people.svg" title='Nombre des Personnes' />
                    </div>
                    <div class="flex justify-center w-full">
                    <button  
                      onClick$={() => {
                        if(context.charge && context.destination && context.typeVoyage) {
                          showResults.value=true
                          return
                        }
                        isIncomplete.value = true 
                        
                      }} 
                      type="submit" class='bg-primary-dark hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-lg'>
                            Calculer
                    </button>
                    </div>
                    
                </form>

            </div>
        </div>

    )


});
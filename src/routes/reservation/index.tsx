import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './index.css?inline'

export default component$(() => {
    useStylesScoped$(styles)

    const hoursArray = []
    for(let i = 0; i<24; i++){
        for(let j = 0; j<12; j++){ 
            const hours = i<10 ? `0${i}` : `${i}`  
            const minutes = (j*5)<10 ? `0${j*5}` : `${j*5}`  
            const time = `${hours}:${minutes}` 
            hoursArray.push(time) 
        } 
    }


  return  (
    <div class="flex items-center flex-col">
      <div class="max-w-[1000px] w-full px-3">
        <h2 class={`pt-5 mb-2 text-2xl text-center border-b-primary-dark border-b text-primary-dark font-bold`}>DÉTAILS RÉSERVATION</h2>
      
        <form class={` relative w-full mt-4 py-7 rounded-sm bg-white bg-opacity-40`} >
          <div class='p-3 flex w-full flex-col lg:flex-row justify-between items-center gap-6'>
            <div class="w-full">
                <label for="countries" class="block mb-1 text-base font-normarl text-gray-600 dark:text-white">Type de navette</label>
                <select id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5">
                    <option value="US" selected>Privé</option>
                    <option value="CA">Patagée</option>
                </select>
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


            <h2 class={`px-3 text-1xl text-primary-dark font-bold mt-8 my-5 mb-2`}>TYPE DE VOYAGE</h2>
            <div class="flex items-center justify-start gap-5 mb-4 px-5">
                <div class="flex items-center">
                    <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 " />
                    <label for="default-radio-1" class="ml-2 font-normal text-gray-900">Aller simple</label>
                </div>
                <div class="flex items-center">
                    <input id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="default-radio-2" class="ml-2 font-normal text-gray-900">Aller / Retour</label>
                </div>
            </div>



            <div class="bg-primary-dark py-3 pb-0 px-5 w-full">
                <h2 class={`text-lg text-white font-semibold border-white border-b`}>VOYAGE ALLER</h2>
            </div>
            <div class='p-3 pb-10 pt-0 bg-primary-dark flex w-full flex-col lg:flex-row justify-between flex-wrap items-center lg:justify-start border-b border-b-white'>
                <div class="w-full lg:w-1/3 px-3">
                    <label for="countries" class="mt-5 block mb-1 text-base font-normal text-white dark:text-white">Lieu de prise en charge<span class='text-red-500 text-2xl'>*</span> </label>
                    <select id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5">
                        <option value="US" >-----</option>
                        <option value="CA" selected>Orly</option>
                        <option value="CA">Paris</option>
                    </select>
                </div>
                <div class="w-full lg:w-1/3 px-3">
                    <label for="countries" class="mt-5 block mb-1 text-base font-normal text-white dark:text-white">Date de prise en charge<span class='text-red-500 text-2xl'>*</span> </label>
                    <input type={'date'} id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                </div>
                <div class="w-full lg:w-1/3 px-3">
                    <label for="countries" class="mt-5 block mb-1 text-base font-normal text-white dark:text-white">Heure de prise en charge<span class='text-red-500 text-2xl'>*</span></label>
                    <select id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5">
                        <option value="" selected></option>
                        {hoursArray.map(hour=> <option value="00:00" class="text-lg" >{ hour }</option> )}
                    </select>
                </div>            
                <div class="w-full lg:w-1/3 px-3">
                    <label for="countries" class="mt-5 block mb-1 text-base font-normal text-white dark:text-white">provenance de vol<span class='text-red-500 text-2xl'>*</span></label>
                    <input type="text" id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                </div>            
                <div class="w-full lg:w-1/3 px-3">
                    <label for="countries" class="mt-5 block mb-1 text-base font-normal text-white dark:text-white">N° de vol<span class='text-red-500 text-2xl'>*</span></label>
                    <input type="text" id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                </div>            
            </div>
            <div class='p-3 py-7 pt-0 bg-primary-dark flex w-full flex-col lg:flex-row justify-between flex-wrap items-center lg:justify-start border-b border-b-white'>
                <div class="w-full lg:w-1/3 px-3">
                    <label for="countries" class="mt-5 block mb-1 text-base font-normal text-white dark:text-white">Destination<span class='text-red-500 text-2xl'>*</span></label>
                    <select id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5">
                        <option value="US" >-----</option>
                        <option value="CA" selected>Orly</option>
                        <option value="CA">Paris</option>
                    </select>
                </div>
                <div class="w-full lg:w-1/3 px-3">
                    <label for="countries" class="mt-5 block mb-1 text-base font-normal text-white dark:text-white">Adresse<span class='text-red-500 text-2xl'>*</span></label>
                    <input type="text" id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                </div>
                <div class="w-full lg:w-1/3 px-3">
                    <label for="countries" class="mt-5 block mb-1 text-base font-normal text-white dark:text-white">Code postal<span class='text-red-500 text-2xl'>*</span></label>
                    <input type="text" id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                </div>                      
            </div>



            <div class="bg-gray-100 pt-10 px-5 w-full">
                <h2 class={`text-lg text-primary-dark font-semibold`}>COORDONNÉES</h2>
            </div>
            <div class='p-3 pb-7 bg-gray-100 flex w-full flex-col lg:flex-row justify-between flex-wrap items-center lg:justify-start border-b border-b-white'>
                <div class="w-full lg:w-1/3 px-3">
                    <label for="countries" class="pt-5 block mb-1 text-base font-normal text-primary-dark dark:text-white">Nom<span class='text-red-500 text-2xl'>*</span></label>
                    <input type="text" id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                </div>
                <div class="w-full lg:w-1/3 px-3">
                    <label for="countries" class="pt-5 block mb-1 text-base font-normal text-primary-dark dark:text-white">Prénom<span class='text-red-500 text-2xl'>*</span> </label>
                    <input type="text" id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                </div>
                <div class="w-full lg:w-1/3 px-3">
                    {/* SPACING DIV  */}
                </div>
                <div class="w-full lg:w-1/3 px-3">
                    <label for="countries" class="pt-5 block mb-1 text-base font-normal text-primary-dark dark:text-white">Adresse Email<span class='text-red-500 text-2xl'>*</span></label>
                    <input type="text" id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                </div>            
                <div class="w-full lg:w-1/3 px-3">
                    <label for="countries" class="pt-5 block mb-1 text-base font-normal text-primary-dark dark:text-white">Téléphone<span class='text-red-500 text-2xl'>*</span></label>
                    <input type='text' id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                </div>                        
            </div>



              <div class="flex justify-center w-full py-10">
                  <button type='submit' class='bg-primary-dark hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-lg'>
                      PASSE LA COMMANDE
                  </button>
              </div>
          </form>
      </div>

    <div class='bg-gray-200 w-full flex flex-col lg:flex-row'>
        <div class='w-full p-10 lg:p-20 text-center lg:text-left'>
            Une fois que vous aurez achevé votre réservation sur notre site, les détails de celle-ci sont envoyés par courrier électronique à notre équipe commerciale qui organisera les préparatifs de vos transferts conformément à votre demande.  Des instructions individuelles figurent sur votre Voucher (confirmation de réservation) envoyée par courrier électronique une fois que vous aurez terminé votre réservation.   
        </div>
        <div class='w-full p-20 flex justify-center items-center'>
            <img src="/images/payment_options.jpg" width={231} alt="" />            
        </div>
    </div>
    <div class='bg-gray-200 pb-10 w-full flex justify-center items-center'>
        <img src="/images/insigne.png" width={220} alt="" />            
    </div>

    </div>
  )
});
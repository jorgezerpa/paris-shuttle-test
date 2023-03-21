import { component$, useSignal, $, useContext } from "@builder.io/qwik";
import { globalContext } from "~/store/context/mainContext";
import { Link } from "@builder.io/qwik-city";
import { getTrajetsPrices } from "~/store/services/mainApi";

export const BannerForm = component$(({ charge, destination }: { charge: string, destination?: string }) => {
  const context = useContext(globalContext)

  const isMobile = useSignal(false);
  const isFront = useSignal(true);
  const formRef = useSignal<HTMLFormElement>()
  const showResults = useSignal<boolean>(false)
  const estimation = useSignal<any>()

  const handleSubmit = $(async() => {
    const formData = new FormData(formRef.value)
    context.typeVoyage = formData.get('type_voyage') as string
    context.charge = formData.get('prise_en_charge') as string
    context.destination = formData.get('prise_en_destination') as string
    context.numberOfPassengers = formData.get('nombre_de_personnes') as string
    const result = await getTrajetsPrices(formData)
    estimation.value = result

    showResults.value = true
  })

  

  
  return (

    
    <div class=' w-full bg-center bg-no-repeat bg-cover  h-[29rem]' style={{ backgroundImage: isMobile.value ? 'url(/images/visuel_mobile.jpg)' : 'url(/images/visuel_home.jpg)' }}>
      <div class="flex flex-col py-4  mx-auto max-w-6xl items-start text-gray-900 ">
        {/* formule */}
       { (isFront)? (
       
       <div class="w-full max-w-6xl mx-auto py-6  text-gray-900 ">
          <div class="drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)]">
              <h2 class={`text-2xl text-center lg:text-left text-white md:text-primary-dark font-bold font-['gotham-medium'] uppercase`}>SERVICE DE TRANSFERTS AUX AÉROPORTS</h2>
              <p class={`text-2xl text-center lg:text-left text-white md:text-primary-dark font-extralight`}> Taxi, vtc ou van économique</p>
          </div>
        </div>
       
       
       ):
        (<div class="flex flex-col drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)]  md:items-start items-center justify-center ">
          <span class=" text-white lg:text-4xl md:text-3xl text-2xl font-extrabold font-['gotham-medium'] uppercase ">COMMENT ALLER ENTRE</span>
          {(destination && destination === 'Charles%20de%20Gaulle%20(CDG)') && (
            <span class="md:text-3xl text-2xl text-white block">{charge}{destination ? ' et ' : ""} Charles de Gaulle(CDG) {destination ? ' ?' : ""}</span>
          )}
          {(destination && destination !== 'Charles%20de%20Gaulle%20(CDG)') && (
            <span class="md:text-3xl text-2xl text-white block">{charge}{destination ? ' et ' : ""} {destination || ''} {destination ? ' ?' : ""}</span>
          )}
        </div>)
        }

        <form preventdefault:submit onSubmit$={handleSubmit} ref={formRef} class="relative bg-opacity-60 bg-white  p-10 pt-5 mt-5 rounded-[5px] border-gray-100 border-2 border-solid lg:w-[25rem] sm:w-[36rem] w-full">
          <div class={`${!showResults.value && 'hidden'} absolute top-0 left-0 bottom-0 right-0 bg-white z-50`}>
            <div onClick$={() => { showResults.value = false }} class={`absolute top-1 right-1 text-black`}><span class="text-primary-dark font-bold text-lg"> X </span></div>
            <h3 class={`text-xl md:text-2xl text-center font-thin text-primary-light py-7`}>Résultats de l'estimation de prix</h3>
            <div class={'flex justify-between px-2'}>
              <p class={'text-black'}>Voiture privée : <span class={'font-bold'}>{estimation.value && estimation.value.price}</span> €</p>
              <Link href="/reservation" class={'text-primary-dark font-bold text-lg'} >Réserver</Link>
            </div>
          </div>

          <ul class="flex flex-row  w-auto md:items-start items-center justify-center">
            <li>
              <input required type="radio" name="type_voyage" id="id_type_voyage_0" value={'simple'} checked/>
              <label class="text-black "><span> Aller Simple</span></label>
            </li>
            <li class="ml-10 list-none">
              <input required type="radio" name="type_voyage" id="id_type_voyage_1" value={'retour'} />
              <label class="text-black"><span> Aller / Retour</span></label>
            </li>
          </ul>
          <ul class="flex flex-col  md:w-[25rem] w-full">
            <li class="flex px-2 items-center border-gray-300 border-[1px] border-solid mt-3 lg:w-[20rem] md:w-full">
              <img class=" w-[22px] text-white relative z-300" src="/icons/avion.png" alt="icon avion" />

              <select required id="id_prise_en_charge" name="prise_en_charge" class="text-black h-[34px]  w-[32rem] md:w-full">
                <option selected={'no-charge'.includes(charge.toLocaleLowerCase())} value="">Lieu de prise en charge</option>
                <option selected={'orly'.includes(charge.toLocaleLowerCase())} value="orly">Orly</option>
                <option selected={'disneyland'.includes(charge.toLocaleLowerCase())} value="dineyland">Disneyland</option>
                <option selected={'paris'.includes(charge.toLocaleLowerCase())} value="paris">Paris</option>
                <option selected={'cdg'.includes(charge.toLocaleLowerCase())} value="cdg">Charles de Gaulle (CDG)</option>
                <option selected={'beauvais'.includes(charge.toLocaleLowerCase())} value="beauvais">Beauvais</option>
              </select>
            </li>
            <li class="flex px-2 items-center border-gray-300 border-[1px] border-solid mt-3 lg:w-[20rem]  md:w-full">
              <img class="w-[15px]" src="/icons/marker.png" alt="icon marker" />
              <select required id="id_prise_en_charge" name="prise_en_destination" class="text-black bg-transparent h-[34px]  w-[32rem] md:w-full">
                <option selected={destination ? 'no-destination'.includes(destination.toLocaleLowerCase()) : false} value="">destination</option>
                <option selected={destination ? 'paris'.includes(destination.toLocaleLowerCase()) : false} value="paris">Paris</option>
                <option selected={destination ? 'orly'.includes(destination.toLocaleLowerCase()) : false} value="orly">Orly</option>
                <option selected={destination ? 'disneyland'.includes(destination.toLocaleLowerCase()) : false} value="disneyland">Disneyland</option>
                <option selected={destination ? 'charles%20de%20gaulle%20(cdg)'.includes(destination.toLocaleLowerCase()) : false} value="cdg"> Charles de Gaulle (CDG)</option>
                <option selected={destination ? 'beauvais'.includes(destination.toLocaleLowerCase()) : false} value="beauvais"> Beauvais</option>
              </select>
            </li>
            <li class="flex flex-1 items-center px-2 border-gray-300 border-[1px] border-solid mt-3  lg:w-[20rem] md:w-full" >

              <img class="w-[22px]" src="/icons/passegers.png" alt="icon passagers" />

              <select required id="id_prise_en_charge" name="nombre_de_personnes" class="text-black  bg-transparent h-[34px] w-[32rem]  md:w-full">
                <option value="" >Nombre de personnes</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4"> 4</option>
                <option value="5"> 5</option>
                <option value="6"> 6</option>
                <option value="7"> 7</option>
                <option value="8"> 8</option>
              </select>
            </li>
          </ul>
          <div class=" flex items-center justify-center">
            <button type="submit"  class="p-1 px-5 rounded-md bg-[#213665] text-white font-bold flex mt-8  ">CALCULER</button>
          </div>

          
        </form>
      </div>
    </div>
  );
});
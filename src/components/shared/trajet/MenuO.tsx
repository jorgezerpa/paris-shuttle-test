import { component$, useSignal, $, useContext } from "@builder.io/qwik";
import { globalContext } from "~/store/context/mainContext";
import { Link } from "@builder.io/qwik-city";

export default component$(({charge, destination}:{charge:string, destination:string}) => {
  const context = useContext(globalContext)
  
  
  const isMobile = useSignal(false);
  const formRef = useSignal<HTMLFormElement>()
  const showResults = useSignal<boolean>(false)

  const handleSubmit = $(() => {
    const formData = new FormData(formRef.value)
    context.typeVoyage = formData.get('type_voyage') as string
    context.charge = formData.get('prise_en_charge') as string
    context.destination = formData.get('prise_en_destination') as string
    context.numberOfPassengers = formData.get('nombre_de_personnes') as string

    showResults.value = true
  })

  return (

    <>
      <div class=' w-full bg-center bg-no-repeat bg-cover' style={{ backgroundImage: isMobile.value ? 'url(/images/visuel_mobile.jpg)' : 'url(/images/visuel_home.jpg)'}}>
     
          <div class="flex flex-col w-full  md:ml-auto lg:ml-8  py-4  mt-5  mx-auto  items-center md:items-start justify-center ">
              {/* formule */}
              <div class="flex flex-col drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)] sm:mx-[30px] ml-[60px] md:items-start items-center justify-center ">
                <span class=" text-white lg:text-4xl md:text-3xl text-2xl font-extrabold font-['gotham-medium'] uppercase ">COMMENT ALLER ENTRE</span>
                <span class="md:text-3xl text-2xl text-white block">{charge}{ destination ?  ' et ' : "" } {destination || ''} { destination ?  ' ?' : "" }</span>
              </div>
              
              <form ref={formRef} class="relative bg-opacity-60 bg-white  p-10 pt-5 mt-5 rounded-[5px] border-gray-100 border-2 border-solid ml-8 lg:w-[25rem] sm:w-[36rem] w-full"> 
                <div class={`${!showResults.value && 'hidden'} absolute top-0 left-0 bottom-0 right-0 bg-white z-50`}>
                  <div onClick$={()=>{showResults.value=false}} class={`absolute top-1 right-1 text-black`}>close</div>
                  <h3 class={`text-xl md:text-2xl text-center font-thin text-primary-light py-7`}>Résultats de l'estimation de prix</h3>
                  <div class={'flex justify-between px-2'}>
                    <p class={'text-black'}>Voiture privée : <span class={'font-bold'}>150</span> €</p>
                    <Link href="/reservation" class={'text-primary-dark font-bold text-lg'} >Réserver</Link>
                  </div>
                </div>
                
                <ul class="flex flex-row  w-auto md:items-start items-center justify-center">
                  <li>
                    <input type="radio" name="type_voyage" id="id_type_voyage_0" value={'simple'} />
                    <label class="text-black "><span> Aller Simple</span></label>
                  </li>
                  <li class="ml-10 list-none">
                    <input type="radio" name="type_voyage" id="id_type_voyage_1" value={'retour'} />
                    <label class="text-black"><span> Aller / Retour</span></label>
                  </li>
                </ul>
                <ul class="flex flex-col  md:w-[25rem] w-full">
                  <li class="flex px-2 items-center border-gray-300 border-[1px] border-solid mt-3 lg:w-[20rem] md:w-full">
                    <img  class=" w-[22px] text-white relative z-300" src="/icons/avion.png" alt="icon avion" />
                    
                    <select id="id_prise_en_charge" name="prise_en_charge" class="text-black h-[34px]  w-[32rem] md:w-full">
                      <option selected={'orly'.includes(charge.toLocaleLowerCase())} value="orly">Orly</option>
                      <option selected={'dineyland'.includes(charge.toLocaleLowerCase())} value="dineyland">Disneyland</option>
                      <option selected={'paris'.includes(charge.toLocaleLowerCase())} value="paris">Paris</option>
                      <option selected={'cdg'.includes(charge.toLocaleLowerCase())} value="cdg">Charles de Gaulle (CDG)</option>
                      <option selected={'beauvais'.includes(charge.toLocaleLowerCase())} value="beauvais">Beauvais</option>
                    </select>
                  </li>
                  <li class="flex px-2 items-center border-gray-300 border-[1px] border-solid mt-3 lg:w-[20rem]  md:w-full">
                    <img class="w-[15px]" src="/icons/marker.png" alt="icon marker" />
                    <select id="id_prise_en_charge" name="prise_en_destination" class="text-black bg-transparent h-[34px]  w-[32rem] md:w-full">
                      <option selected={destination ? 'paris'.includes(destination.toLocaleLowerCase()) : false} value="paris">Paris</option>
                      <option selected={destination ? 'orly'.includes(destination.toLocaleLowerCase()) : false} value="orly">Orly</option>
                      <option selected={destination ? 'dineyland'.includes(destination.toLocaleLowerCase()) : false} value="disneyland">Disneyland</option>
                      <option selected={destination ? 'charles%20de%20gaulle%20(cdg)'.includes(destination.toLocaleLowerCase()) : false} value="cdg"> Charles de Gaulle (CDG)</option>
                      <option selected={destination ? 'beauvais'.includes(destination.toLocaleLowerCase()) : false} value="beauvais"> Beauvais</option>
                    </select>
                  </li>
                  <li class="flex flex-1 items-center px-2 border-gray-300 border-[1px] border-solid mt-3  lg:w-[20rem] md:w-full" >
                  
                    <img class="w-[22px]"  src="/icons/passegers.png" alt="icon passagers" />
                    
                      <select id="id_prise_en_charge" name="nombre_de_personnes" class="text-black  bg-transparent h-[34px] w-[32rem]  md:w-full">
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
                  <button type="button" onClick$={handleSubmit} class="p-1 px-5 rounded-md bg-[#213665] text-white font-bold flex mt-8  ">CALCULER</button>
                </div>
              </form>
              
                
            </div>
      </div>
  </>

);
});
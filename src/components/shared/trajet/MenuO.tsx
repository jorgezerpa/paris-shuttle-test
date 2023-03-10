import { component$, useSignal } from "@builder.io/qwik";

export default component$(() => {

  const isMobile = useSignal(false);
  return (

    <>
      
<div class=' w-full bg-center bg-no-repeat bg-cover' style={{ backgroundImage: isMobile.value ? 'url(/images/visuel_mobile.jpg)' : 'url(/images/visuel_home.jpg)'}}>

    <div class="flex flex-col w-full  md:ml-auto lg:ml-8  py-4  mt-5  mx-auto  items-center md:items-start justify-center ">
        {/* formule */}
        <div class="flex flex-col drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)] sm:mx-[30px] ml-[60px] md:items-start items-center justify-center ">
          <sapn class=" text-white lg:text-4xl md:text-3xl text-2xl font-extrabold font-['gotham-medium'] uppercase ">COMMENT ALLER ENTRE</sapn>
          <span class="md:text-3xl text-2xl text-white block">Orly et Paris ?</span>
        </div>
        
        <form class=" bg-opacity-60 bg-white  p-10 pt-5 mt-5 rounded-[5px] border-gray-100 border-2 border-solid ml-8 lg:w-[25rem] sm:w-[36rem] w-full"> 
          <ul class="flex flex-row  w-auto md:items-start items-center justify-center">
            <li>
              <input type="radio" name="type_voyage" id="id_type_voyage_0" />
              <label class="text-black "><span> Aller Simple</span></label>
            </li>
            <li class="ml-10 list-none">
              <input type="radio" name="type_voyage" id="id_type_voyage_1" />
              <label class="text-black"><span> Aller / Retour</span></label>
            </li>
          </ul>
          <ul class="flex flex-col  md:w-[25rem] w-full">
            <li class="flex px-2 items-center border-gray-300 border-[1px] border-solid mt-3 lg:w-[20rem] md:w-full">
              <img  class=" w-[22px] text-white relative z-300" src="/icons/avion.png" alt="icon avion" />
              
              <select id="id_prise_en_charge" name="prise_en_charge" class="text-black h-[34px]  w-[32rem] md:w-full">s
                <option value="4">Orly</option>
                <option value="6">Disneyland</option>
                <option value="1">Paris</option>
                <option value="2">Charles de Gaulle (CDG)</option>
                <option value="3">Beauvais</option>
              </select>
            </li>
            <li class="flex px-2 items-center border-gray-300 border-[1px] border-solid mt-3 lg:w-[20rem]  md:w-full">
              <img class="w-[15px]" src="/icons/marker.png" alt="icon marker" />
              <select id="id_prise_en_charge" name="prise_en_charge" class="text-black bg-transparent h-[34px]  w-[32rem] md:w-full">
                <option value="1">Paris</option>
                <option value="4">Orly</option>
                <option value="6">Disneyland</option>
                <option value="2"> Charles de Gaulle (CDG)</option>
                <option value="3"> Beauvais</option>
              </select>
            </li>
            <li class="flex flex-1 items-center px-2 border-gray-300 border-[1px] border-solid mt-3  lg:w-[20rem] md:w-full" >
            
              <img class="w-[22px]"  src="/icons/passegers.png" alt="icon passagers" />
              
                <select id="id_prise_en_charge" name="prise_en_charge" class="text-black  bg-transparent h-[34px] w-[32rem]  md:w-full">
                  <option value="" >Nombre de personnes</option>
                  <option value="4">1</option>
                  <option value="6">2</option>
                  <option value="1">3</option>
                  <option value="2"> 4</option>
                  <option value="3"> 5</option>
                  <option value="3"> 6</option>
                  <option value="3"> 7</option>
                  <option value="3"> 8</option>
                </select>
            </li>
          </ul>
          <div class=" flex items-center justify-center">
            <button type="submit" class="p-1 px-5 rounded-md bg-[#213665] text-white font-bold flex mt-8  ">CALCULER</button>
          </div>
        </form>
        
          
      </div>
  </div>
  </>

);
});
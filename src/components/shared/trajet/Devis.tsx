import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (

    <>

        <div class="flex flex-col text-white justify-center w-full bg-[#213665] h-[200px] mt-10 items-center ">
            <h4 class="text-2xl font-bold">DEMANDE DE DEVIS</h4>
            <p class="mt-3">Réponse sous 24h</p>
            <a type="submit" href='/devis' class="p-1 px-5 mt-3 rounded-md bg-white font-[Open Sans] text-[#551A8B] font-bold justify-center cursor-pointer">DEMANDE DE DEVIS</a>
        </div>


    </>

);
});
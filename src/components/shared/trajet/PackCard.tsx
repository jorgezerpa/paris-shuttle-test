import { component$ } from "@builder.io/qwik";


export default component$(() => {
  return (

    <>
    
    <div class="flex md:flex-row ml-0 flex-col  w-full bg-[#e2e2e2]  min-w-[300px] gap-10 py-10  mt-[20px]  md:max-h-[400px]">

      <img class="md:w-[500px] mx-10 max-h-[300px]" src="/images/photos_vehicules.jpg" alt="Photo Véhicule"/>
      
      {/* Les Véhicles */}
      <div class="flex flex-col text-black md:ml-0 ml-10">
        <h3 class="font-extrabold text-2xl">NOS VÉHICULES :</h3>
        <ul class="font-bold">
          <li> Mercedes classe C </li>
          <li> Mercedes Viano </li> 
          <li> Skoda Superb  </li> 
          <li> Volkswagen caravelle </li> 
          <li> Peugeot 508</li> 
        </ul>
        <p class="text-black text-sm mt-5 ">
          Tous nos véhicules sont équipés de siège auto et de réseau wifi. <br /> Des bouteilles d'eau sont également à votre disposition.
        </p>
      </div>

    </div>
    
       
    </>

);
});
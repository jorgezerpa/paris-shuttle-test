import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (

    <>
      <div class="flex flex-col mx-[3rem] bg-white mt-[10px] sm:mx-10">
        {/* InfoOffre; */}
        <h4 class="sm:text-2xl leading-8 text-xl text-[#213665] font-bold md:w-3/5 sm:w-full  border-b-[1px] border-solid border-[#213665] mt-2">
        ORLY ⇄ PARIS
        </h4>
        <div class="flex flex-col sm:flex-col  md:flex-col lg:flex-row gap-5">
          
          <p class="text-black font-opensans font-normal text-base lg:w-3/5 w-full mt-4 ">
              Para evitarle un retraso eventual para sus citas, piense en <b>alquilar un transporte privado</b> . Esto queda <b>fácil</b>  y <b>sin espera</b> contrariamente a otros transportes como los taxis y los transportes públicos.<b>First Shuttle</b>  es el número uno en este dominio. Un <b>traslado barato</b>  entre el <b>Aeropuerto de Orly</b>  y <b>París</b> , es el objetivo de la compañía. Tendrá a disposición un <b>coche de lujo</b> . Cada vehículo cuenta con  <b>2 asientos de bebé</b> . Como el trayecto dura alrededor de 20 minutos, puede disfrutar del <b>Wifi</b> . Tiene también a disposición una agua en el coche
          </p>
          <iframe class="md:mt-0 mt-[2rem] lg:w-2/5 w-full max-h-[200px]" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d335995.64619267266!2d2.34706!3d48.85885900000001!3m2!1i1024!2i768!4f13.1!4m3!3e0!4m0!4m0!5e0!3m2!1sfr!2sus!4v1677491079569!5m2!1sfr!2sus" width="600" height="450" style="border:0;"  loading="lazy"></iframe>
          
        </div>
      </div>
    
    </>

);
});
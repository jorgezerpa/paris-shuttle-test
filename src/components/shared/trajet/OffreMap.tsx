import { component$, useResource$, Resource, useSignal } from '@builder.io/qwik';
import { getTrajets } from '~/store/services/mainApi';

export default component$(({charge, destination}:{charge:string, destination:string}) => {
  const trajets = useSignal<any>([])

  const trajetsData = useResource$(async()=>{
    //...any logic needed before make call
    const trajetsResult = await getTrajets()
    trajets.value = trajetsResult
    return trajets
  })


  return (

    <>
      <div class="flex flex-col mx-[3rem] bg-white mt-[10px] sm:mx-10">
        
        {/* InfoOffre; */}
        <h4 class="sm:text-2xl leading-8 text-xl text-[#213665] font-bold md:w-3/5 sm:w-full  border-b-[1px] border-solid border-[#213665] mt-2">
        { destination 
          ? charge +'⇄' + destination  
          : 'TRANSFERT DEPUIS OU VERS ' + charge
        }
        </h4>

        <div class="flex flex-col sm:flex-col  md:flex-col lg:flex-row gap-5">
          <Resource 
              value={trajetsData}
              onRejected={()=><div class={'text-black'}>error happens</div>}
              onResolved={()=> {
                let index = -1
                if(charge && destination) {
                  index = trajets.value.findIndex((item:any)=> item.depart.toLowerCase() === charge.toLowerCase() && item.destination.toLowerCase() === destination.toLowerCase() )
                }
                return(
                  <p class="text-black font-opensans font-normal text-base lg:w-3/5 w-full mt-4 ">
                      { trajets.value[index] ? trajets.value[index].description : 'Afin de vous éviter une longue attente devant chez vous avec vos bagages, pensez à louer une voiture privée pour un transfert sécurisé. Avec First Shuttle, nous vous proposons un service pas cher pour un transfert de Paris à l’Aéroport de Beauvais. Vous aurez à votre disposition une voiture spacieuse et non-fumeur. Nous vous assurons aussi un voyage au calme pendant votre trajet qui va durer à peu près 1h30min Tous nos véhicules sont climatisés, ce qui est un plus comparé aux taxis et aux transports en commun. Un autre avantage que vous ne trouverez pas chez d’autres transports privés, c’est que nos tarifs sont à moindre coup. Avec First Shuttle, vous n’aurez aucune surprise que ce soit en termes d’entretien de voiture qu’en termes de responsabilité civile. Et comme nous sommes au service de nos clients, nous vous garantirons un confort qui sera à la hauteur de vos attentes.' }                    
                  </p>
                )
              }}
          />  
          <iframe class="md:mt-0 mt-[2rem] lg:w-2/5 w-full max-h-[200px]" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d335995.64619267266!2d2.34706!3d48.85885900000001!3m2!1i1024!2i768!4f13.1!4m3!3e0!4m0!4m0!5e0!3m2!1sfr!2sus!4v1677491079569!5m2!1sfr!2sus" width="600" height="450" style="border:0;"  loading="lazy"></iframe>
        </div>

      </div>
    </>

);
});
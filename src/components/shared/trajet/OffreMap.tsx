import { component$, useTask$, useSignal, useStore, $ } from '@builder.io/qwik';

export default component$(({charge, destination, trajets}:{charge:string, destination:string, trajets:any}) => {
  const description = useSignal<any>('')

  const maps = useStore({
    orly: $(()=><iframe class="md:mt-0 mt-[2rem] lg:w-2/5 w-full max-h-[350px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2631.9139636749455!2d2.363053515196451!3d48.72623561795757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e675b1fa6a3b1d%3A0x9d78ded743db8422!2sAeropuerto%20de%20Par%C3%ADs-Orly!5e0!3m2!1ses!2sve!4v1678965875784!5m2!1ses!2sve" width="600" height="450" style="border:0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>),
    paris:$(()=><iframe class="md:mt-0 mt-[2rem] lg:w-2/5 w-full max-h-[350px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.76457430403!2d2.2769948739278623!3d48.85894658138313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2zUGFyw61zLCBGcmFuY2lh!5e0!3m2!1ses!2sve!4v1678965987780!5m2!1ses!2sve" width="600" height="450" style="border:0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>),
    disneyland:$(()=><iframe class="md:mt-0 mt-[2rem] lg:w-2/5 w-full max-h-[350px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39058.80281698502!2d6.597511900782427!3d43.31294292966098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e735405e169b7f%3A0x7c96766b6714099b!2sDISNEYLAND%20PARIS%20Biglietteria%20Pacchetti%20Viaggio%20Offertissime%20Solo%20On%20Line*21%20Disneyland%20Paris!5e0!3m2!1ses!2sve!4v1678966051326!5m2!1ses!2sve" width="600" height="450" style="border:0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>),
    beauvais:$(()=><iframe class="md:mt-0 mt-[2rem] lg:w-2/5 w-full max-h-[350px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83014.91529105419!2d2.017657648105922!3d49.4426324714697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e7012d2102b553%3A0x33743e4f961c4ef4!2s60000%20Beauvais%2C%20Francia!5e0!3m2!1ses!2sve!4v1678966187739!5m2!1ses!2sve" width="600" height="450" style="border:0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>),
    cdg:$(()=><iframe class="md:mt-0 mt-[2rem] lg:w-2/5 w-full max-h-[350px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.1430615774793!2d2.5485828152075447!3d49.00786319812528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e63e038e4ccf5b%3A0x42be0982f5ba62c!2sAeropuerto%20de%20Par%C3%ADs-Charles%20de%20Gaulle!5e0!3m2!1ses!2sve!4v1678966219993!5m2!1ses!2sve" width="600" height="450" style="border:0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>)
  })

  useTask$(({ track }) => {
    track(() => charge);
    track(() => destination);
    if(charge && destination) {
      const index = trajets.findIndex((trajet:any) => trajet.destination.toLowerCase().includes(destination.toLowerCase()) && trajet.depart.toLowerCase().includes(charge.toLowerCase()) )
      if(index!==-1) description.value = trajets[index].description
      else description.value = "Afin de vous éviter une longue attente devant chez vous avec vos bagages, pensez à louer une voiture privée pour un transfert sécurisé. Avec First Shuttle, nous vous proposons un service pas cher pour un transfert de Paris à l’Aéroport de Beauvais. Vous aurez à votre disposition une voiture spacieuse et non-fumeur. Nous vous assurons aussi un voyage au calme pendant votre trajet qui va durer à peu près 1h30min Tous nos véhicules sont climatisés, ce qui est un plus comparé aux taxis et aux transports en commun. Un autre avantage que vous ne trouverez pas chez d’autres transports privés, c’est que nos tarifs sont à moindre coup. Avec First Shuttle, vous n’aurez aucune surprise que ce soit en termes d’entretien de voiture qu’en termes de responsabilité civile. Et comme nous sommes au service de nos clients, nous vous garantirons un confort qui sera à la hauteur de vos attentes."
    }
    else description.value = "Afin de vous éviter une longue attente devant chez vous avec vos bagages, pensez à louer une voiture privée pour un transfert sécurisé. Avec First Shuttle, nous vous proposons un service pas cher pour un transfert de Paris à l’Aéroport de Beauvais. Vous aurez à votre disposition une voiture spacieuse et non-fumeur. Nous vous assurons aussi un voyage au calme pendant votre trajet qui va durer à peu près 1h30min Tous nos véhicules sont climatisés, ce qui est un plus comparé aux taxis et aux transports en commun. Un autre avantage que vous ne trouverez pas chez d’autres transports privés, c’est que nos tarifs sont à moindre coup. Avec First Shuttle, vous n’aurez aucune surprise que ce soit en termes d’entretien de voiture qu’en termes de responsabilité civile. Et comme nous sommes au service de nos clients, nous vous garantirons un confort qui sera à la hauteur de vos attentes."
  });

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
          <p class="text-black font-opensans font-normal text-base lg:w-3/5 w-full mt-4 ">
            { description }
          </p>
          {/* if theres a destination, render the destination map */}
          { destination && destination.toLowerCase()==='orly' && maps['orly']() }
          { destination && destination.toLowerCase()==='paris' && maps['paris']() }
          { destination && destination.toLowerCase()==='disneyland' && maps['disneyland']() }
          { destination && destination.toLowerCase()==='beauvais' && maps['beauvais']() }
          { destination && destination.toLowerCase()==='cdg' && maps['cdg']() }
          {/* if theres NO a destination, render the charge map */}
          { !destination && charge.toLowerCase()==='orly' && maps['orly']() }
          { !destination && charge.toLowerCase()==='paris' && maps['paris']() }
          { !destination && charge.toLowerCase()==='disneyland' && maps['disneyland']() }
          { !destination && charge.toLowerCase()==='beauvais' && maps['beauvais']() }
          { !destination && charge.toLowerCase()==='cdg' && maps['cdg']() }
        </div>

      </div>
    </>

);
});
import { component$, useTask$, useSignal } from '@builder.io/qwik';

export default component$(({charge, destination, trajets}:{charge:string, destination:string, trajets:any}) => {
    
    const matchedTrajets = useSignal<any[]>([])

    useTask$(({ track }) => {
    track(() => charge);
    track(() => destination);
    if(charge) {
      matchedTrajets.value = trajets.filter((item:any)=>item.depart.toLowerCase().includes(charge.toLowerCase()))
    }
    else matchedTrajets.value = []
  });

  return (
    <div class={`w-full py-20 px-3 ${destination && 'hidden'}`}>
        <h2 class={'text-gray-700 text-center text-4xl font-bold mb-10'}>Nos Trajets</h2>
        <div class={'w-full flex justify-center'}>
          
          <div class={'max-w-[900px] w-full border border-primary-dark p-5'}>
              {matchedTrajets.value.map((trajet:any)=>(
                  //start row
                  <div class={'flex flex-col lg:flex-row w-full justify-between items-center mb-12 lg:mb-5'}>
                      <p class={'text-gray-700'}>{trajet.depart} ⇄ { trajet.destination || '---' }</p>
                      <button class={'px-6 py-3 text-white font-bold bg-primary-dark rounded-lg'}>RÉSERVER CE TRAJET</button>
                  </div>
                  //end row
              ))}
          </div>

        </div>
    </div>
  )
});
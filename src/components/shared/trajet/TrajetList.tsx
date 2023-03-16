import { component$, useResource$, Resource } from '@builder.io/qwik';
import { getTrajets } from '~/store/services/mainApi';

export default component$(({charge, destination}:{charge:string, destination:string}) => {
    const trajetsData = useResource$(()=>{
        //...any logic needed before make call
        return getTrajets()
      })


  return (
    <div class={`w-full py-20 px-3 ${destination && 'hidden'}`}>
        <h2 class={'text-gray-700 text-center text-4xl font-bold mb-10'}>Nos Trajets</h2>
        <div class={'w-full flex justify-center'}>
        
        <Resource 
            value={trajetsData}
            onRejected={()=><div class={'text-black'}>error happens</div>}
            onResolved={(res)=> {
              let filteredResult = []
              if(res && Array.isArray(res) ){
                filteredResult = res.filter((item:any)=>item.depart.toLowerCase().includes(charge))
              }
              return(
                <div class={'max-w-[900px] w-full border border-primary-dark p-5'}>
                    {filteredResult.map((trajet:any)=>(
                        //start row
                        <div class={'flex flex-col lg:flex-row w-full justify-between items-center mb-12 lg:mb-5'}>
                            <p class={'text-gray-700'}>{trajet.depart} ⇄ { trajet.destination || '---' }</p>
                            <button class={'px-6 py-3 text-white font-bold bg-primary-dark rounded-lg'}>RÉSERVER CE TRAJET</button>
                        </div>
                        //end row
                    ))}
                </div>
              )
            }}
        />  
        </div>
    </div>
  )
});
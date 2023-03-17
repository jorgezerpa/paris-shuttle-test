import { component$, useResource$, Resource } from '@builder.io/qwik';
import parse from 'html-react-parser';
import type { DocumentHead } from '@builder.io/qwik-city';
import { getPacks } from '~/store/services/mainApi';

export default component$(() => {
    const packsData = useResource$(()=>{
        return getPacks()
    })


    return (
        <>
            <div class='bg-[#F3F3F3] flex flex-col items-center py-10'>
                <h2 class="w-full font-thin text-2xl text-center mb-10">NOS PACKS FAMILY</h2>
                <Resource 
                    value={packsData}
                    onResolved={(packs)=>{
                        return (
                        <div class="w-full max-w-[1400px] flex flex-col gap-10 px-5 sm:px-14">
                            {packs.map(pack=>(
                                <div key={pack.id+'packFamily'} class='bg-white w-full flex flex-col lg:flex-row p-10 gap-5'>
                                    <div class="flex justify-center lg:justify-start">
                                        <img src={pack.image} alt="" />
                                    </div>
                                    <div class='px-1'>
                                        <h2 class='font-bold text-left text-primary-dark mb-4 text-xl'>
                                            { pack.depart } ⇄ { pack.destination }
                                        </h2>
                                        <div class='max-w-[700px] text-gray-500 mb-4'>
                                            { parse(pack.description) }
                                        <p><span class="text-[#f00]">Prix :<span class='font-bold'>{ pack.price } € </span></span></p>
                                        </div>

                                        <div class="flex justify-center lg:justify-start">
                                            <div class="px-6 py-2 cursor-pointer text-primary-dark font-bold bg-[#F1C933] rounded-md inline-flex justify-center items-center">
                                                Je Réserve
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                        )
                    }}
                />
            </div>

            <div class='bg-gray-100 w-full flex items-center justify-center py-20 sm:px-0 px-2'>
                <img src="/images/atour.png" width={440} alt="" />
            </div>
        </>
    )
});

export const head: DocumentHead = {
    title: 'Nos Packs Family',
    meta: [
        {
            name: 'description',
            content: 'First-shuttle',
        },
    ],
};

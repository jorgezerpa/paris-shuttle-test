import { component$, useResource$, Resource } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { getPacks } from '~/store/services/mainApi';

export default component$(() => {
    const packsData = useResource$(() => {
        return  getPacks()
    })


    return (
        <>
            <div class='bg-[#F3F3F3] flex flex-col items-center py-10'>
                <h2 class="w-full font-thin text-2xl text-center mb-10">NOS PACKS FAMILY</h2>
                <Resource
                    value={packsData}
                    onResolved={(packs) => {
                        return (
                            <div class="max-w-6xl flex flex-col gap-10 px-5 sm:px-14">
                                {packs?.map(pack => (
                                    <div key={pack.id + 'packFamily'} class='bg-white flex flex-col lg:flex-row p-10 gap-5 w-full'>
                                        <div class="flex justify-center lg:justify-start">
                                            <img class="min-w-[12rem] h-[12rem]" src={pack.image} alt="" />
                                        </div>
                                        <div class='px-1'>
                                            <h2 class='font-bold text-left text-primary-dark mb-4 text-xl'>
                                                {pack.depart} ⇄ {pack.destination}
                                            </h2>
                                            <div class='max-w-[42rem] text-gray-500 mb-4' dangerouslySetInnerHTML={pack.description}>
                                                {/* { (()=>parse(pack.description))() } */}
                                                <p><span class="text-[#f00]">Prix :<span class='font-bold'>{pack.price} € </span></span></p>
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

            <div class="flex w-full justify-center mt-[30px] py-[30px] bg-gray-200">
                <img src="/images/insigne.png" width={220} alt="" />
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
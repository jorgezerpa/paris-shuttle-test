import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
    const ITEMS = [
        { title:'Accueil', path:'/accueil' },
        { title:'Devis', path:'' },
        { title:' Affilié', path:'' },
    ]
    const SOCIAL_MEDIA = [
        { image:'icons/facebook-square.png', path:'/' },
        { image:'icons/twitter-square.png', path:'/' },
        { image:'icons/google-plus-square.png', path:'/' },
    ]


  return (
    <>
        <div class='bg-primary-light py-4 px-3 justify-center flex'>
            <div class='max-w-[1350px] w-full flex'>
                <div class=" flex-1 flex justify-start gap-7 text-white text-base font-normal">
                    {ITEMS.map(item=>(
                        <Link key={item.title+item.path+'footer'}>{item.title}</Link>
                    ))}
                </div>
                <div class=" flex-1 justify-end gap-7 text-white text-base font-normal hidden lg:flex">
                    {SOCIAL_MEDIA.map(item=>(
                        <Link key={item.image+item.path+'footer'}>
                            <img src={item.image} alt="" width={30} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
        <div class='bg-[#273c6d] h-10 justify-center flex'></div>
        <div class='bg-[#13203E] min-h-10 justify-center flex flex-col py-1'>
            <p class="text-center text-xs text-white font-thin">Citalium centre d'affaire gare de val d'Europe, 1 avenue de l'Europe 77144 Montevrain, France</p>
            <p class="text-center text-xs text-white font-thin">Copyright 2017</p>
        </div> 
    </>
  )
});
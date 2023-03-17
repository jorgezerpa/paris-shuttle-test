import { component$, Slot, useSignal } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { useLocation } from '@builder.io/qwik-city';
import Header from '~/components/header/header';

import { DrawerMobile } from '~/libs/drawerMobile/drawerMobile';


export default component$(() => {
  const { isNavigating } = useLocation();
  const showMobileMenu = useSignal(false)

    const ITEMS = [
      { title:'Accueil', path:'/' },
      { title:'Devis', path:'/devis' },
      { title:' Affilié', path:'/accounts' },
  ]
  const SOCIAL_MEDIA = [
      { image:'/icons/facebook-square.png', path:'https://www.facebook.com/Firstshuttle/' },
      { image:'/icons/twitter-square.png', path:'https://twitter.com/shuttle75' },
      { image:'/icons/google-plus-square.png', path:'https://plus.google.com/u/1/b/102723066125615013586/+First-shuttle/about' },
  ]

  return (
    <div class='overflow-x-clip'>
      {/* NOT REMOVE 2 HEADER!! One is absolute positioned, the other gives the space in the DOM */}
      <div class={'opacity-0'}>
        <Header showNavbar={showMobileMenu}/>
      </div>
      <div class={'absolute top-0 left-0 right-0 z-50'}>
        <Header showNavbar={showMobileMenu}/>
      </div>
      { isNavigating && (
        <div class={'text-xl text-black min-h-screen justify-center items-center flex'}>
          <div class="lds-facebook"><div></div><div></div><div></div></div>
        </div>

      )}
      { !isNavigating &&  (
        <main >
          <section>
            <Slot />
          </section>
        </main>
      )}
      
      {/* FOOTER  */}
      <>
          <div class='bg-primary-light py-4 px-3 justify-center flex'>
              <div class='w-full max-w-6xl flex'>
                  <div class=" flex-1 flex justify-start gap-7 text-white text-base font-normal cursor-pointer">
                      {ITEMS.map(item=>(
                          <Link href={item.path} key={item.title+item.path+'footer'}>{item.title}</Link>
                      ))}
                  </div>
                  <div class=" flex-1 justify-end gap-7 text-white text-base font-normal hidden lg:flex cursor-pointer">
                      {SOCIAL_MEDIA.map(item=>(
                          <Link href={item.path} target='_blank' key={item.image+item.path+'footer'}>
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


      <DrawerMobile showNavbar={showMobileMenu} />
    </div>
  );
});

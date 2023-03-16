import { component$, Slot, useSignal } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import Header from '~/components/header/header';
import Footer from '~/components/footer/footer';

import { DrawerMobile } from '~/libs/drawerMobile/drawerMobile';


export default component$(() => {
  const { isNavigating } = useLocation();
  const showMobileMenu = useSignal(false)

  return (
    <div class='overflow-x-clip'>
      <Header showNavbar={showMobileMenu}/>
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
      <Footer/>
      <DrawerMobile showNavbar={showMobileMenu} />
    </div>
  );
});

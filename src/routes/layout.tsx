import { component$, Slot, useSignal } from '@builder.io/qwik';
import Footer from '~/components/footer/Footer';
import Header from '~/components/header/header';

import { DrawerMobile } from '~/libs/drawerMobile/drawerMobile';


export default component$(() => {
  const showMobileMenu = useSignal(false)

  return (
    <div class='overflow-x-clip'>
      <main >
        <Header showNavbar={showMobileMenu}/>
        <section>
          <Slot />
        </section>
      </main>
      <Footer/>
      <DrawerMobile showNavbar={showMobileMenu} />
    </div>
  );
});

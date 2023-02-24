import { component$, Slot, useSignal } from '@builder.io/qwik';

import Header from '../commons/header/header';
import Footer from '~/commons/footer/footer';
import { DrawerMobile } from '~/commons/drawerMobile/drawerMobile';


export default component$(() => {
  const showMobileMenu = useSignal(false)

  return (
    <div class='overflow-x-clip'>
      <main >
        <Header showNavbar={showMobileMenu} />
        <section>
          <Slot />
        </section>
      </main>
      <Footer />
      <DrawerMobile showNavbar={showMobileMenu} />
    </div>
  );
});

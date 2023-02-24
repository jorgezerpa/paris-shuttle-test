import { component$, Slot } from '@builder.io/qwik';

import Header from '../commons/header/header';
import Footer from '~/commons/footer/footer';


export default component$(() => {

  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <Footer />
    </>
  );
});

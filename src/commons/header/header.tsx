import { component$ } from '@builder.io/qwik';
import Topbar from '~/components/header/Topbar/topbar';
import NavbarDesktop from '~/components/header/navbarDesktop.tsx/navbarDesktop';
import ContactMobile from '~/components/header/contactMobile/contactMobile';

export default component$(({ showNavbar }: { showNavbar:{value:boolean} }) => {

  return (
    <>
      <header>
        <Topbar showNavbar={showNavbar} />
        <NavbarDesktop />
        <ContactMobile />
      </header>
    </>
  );
});



 {/* <select id="countries" class="bg-gray-100 outline-none  text-white bg-opacity-30 text-sm block w-[142px] p-2.5">
              <option class="text-black transition" selected value="FR">Francais</option>
              <option class="text-black transition" value="CA">English</option>
              <option class="text-black transition" value="FR">Español</option>
              <option class="text-black transition" value="DE">Italiano</option>
  </select> */}
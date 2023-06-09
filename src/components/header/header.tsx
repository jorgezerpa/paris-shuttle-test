import { component$, useSignal, useClientEffect$ } from '@builder.io/qwik';
import Topbar from '~/libs/Topbar/topbar';
import NavbarDesktop from '~/libs/navbarDesktop/navbarDesktop';
import ContactMobile from '~/libs/contactMobile/contactMobile';

export default component$(({ showNavbar }: { showNavbar:{value:boolean} }) => {

  const showFixedNavbar = useSignal(false)

  useClientEffect$(() => {
    window.addEventListener('scroll', ()=>{
      showFixedNavbar.value = window.scrollY>=94 ? true : false 
    })
  });

  return (
    <>
      <header>
        <Topbar showNavbar={showNavbar} />
        <NavbarDesktop />
        { showFixedNavbar.value && <NavbarDesktop isFixed={true} /> }
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
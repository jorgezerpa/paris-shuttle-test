import { component$ } from '@builder.io/qwik';
import LanguageDropdown from '../languageDropdown/languageDropdown';

export default component$(({ showNavbar }: { showNavbar: { value: boolean } }) => {
  return (
    <>
      <div class={`bg-primary-dark w-full hidden lg:flex justify-center items-center py-3 px-2 lg:h-[94px]`}>
        <div class={`w-full max-w-[1350px] flex justify-between items-center`}>

          <div class='flex-1'>
            <a href="#">
              <img src='/images/logo.png' class='h-[70px] flex justify-center' />
            </a>
          </div>

          <div class='flex-1'>
            <h2 class='text-center text-white font-semibold text-2xl font-opensans'>VOYAGEZ EN TOUTE SÉRÉNITÉ !</h2>
            <h4 class='text-center text-white font-opensans font-normal text-base'>Service sur mesure, à tarifs fixes.</h4>
          </div>

          <div class='flex-1 flex justify-end items-center gap-5 text-white'>

            <div class="">
              <LanguageDropdown />
            </div>

            <div>
              <div class="h-[25px] text-gray-600 text-base pr-[10px] bg-white rounded-2xl flex gap-2 items-center">
                <div class="w-[50px] h-full bg-[#3E3E3E] rounded-2xl flex justify-center items-center">
                  <svg height="16px" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M56.5 60C57.5 60 58.3333 59.6667 59 59C59.6667 58.3333 60 57.5 60 56.5V43C60 42.2222 59.75 41.5411 59.25 40.9567C58.75 40.3722 58.1111 39.9978 57.3333 39.8333L45.8333 37.5C45.0556 37.3889 44.2633 37.4589 43.4567 37.71C42.65 37.9611 41.9978 38.3356 41.5 38.8333L33.6667 46.6667C29.4444 44.1111 25.5833 41.0833 22.0833 37.5833C18.5833 34.0833 15.6667 30.3333 13.3333 26.3333L21.3333 18.1667C21.8333 17.6667 22.1533 17.0967 22.2933 16.4567C22.4333 15.8167 22.4467 15.1089 22.3333 14.3333L20.1667 2.66667C20.0556 1.88889 19.6944 1.25 19.0833 0.75C18.4722 0.25 17.7778 0 17 0H3.5C2.5 0 1.66667 0.333333 0.999999 1C0.333332 1.66667 1.43051e-06 2.5 1.43051e-06 3.5C1.43051e-06 10.6667 1.59778 17.6533 4.79333 24.46C7.98889 31.2667 12.2111 37.2944 17.46 42.5433C22.7089 47.7922 28.7367 52.0144 35.5433 55.21C42.35 58.4056 49.3356 60.0022 56.5 60Z" fill="white" />
                  </svg>
                </div>
                <a href="tel:+123456789">+33 1 80 89 30 15</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* MOBILE  */}
      <div class={`bg-primary-dark w-full flex lg:hidden justify-center items-center py-2 px-3`}>
        <div class={`w-full max-w-[1200px] flex justify-between items-center py-3`}>

          <div class='flex-1' onClick$={() => showNavbar.value = !showNavbar.value}>
            <img src='/images/menu.png' class='h-[20px]' />
          </div>

          <div class='flex-1 flex-shrink-0 flex justify-center'>
            <a href="#" >
              <img src='/images/logo.png' class='h-[45px] min-w-[159px]' />
            </a>
          </div>

          <div class="flex-1 flex justify-end">
            <LanguageDropdown />
          </div>

        </div>
      </div>
    </>
  );
});
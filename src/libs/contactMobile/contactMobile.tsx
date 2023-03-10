import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class='bg-[#717171] justify-center lg:hidden flex h-[50px] cursor-pointer'>
        <div class='px-2 max-w-[1350px] w-full flex text-white text-base font-normal justify-start'>
            <div class='flex h-[45px] items-center flex-1' >
                <p class='flex items-center'>
                    <span><img class='w-[30px]' src="/icons/phone-ringing.svg" alt="" /></span>
                    <a href="tel:+123456789">+33 1 80 89 30 15</a>
                </p>
            </div>
            <div class='max-w-[80px] w-[40px] sm:w-full bg-[#343434] h-full' ></div>
            <div class='flex h-[45px] items-center flex-1' >
                <p class='flex items-center px-2'>
                    <span><img class='w-[30px]' src="/icons/email.svg" alt="" /></span>
                    <span><Link href={'/contact'}>Contact </Link></span>
                </p>
            </div>
            
        </div>
    </div>
  )
});
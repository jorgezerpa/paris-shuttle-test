import { component$ } from '@builder.io/qwik';

export const Loader = component$(() => {
  return (
    <div class={'text-xl text-black min-h-screen justify-center items-center flex'}>
        <div class="lds-facebook"><div></div><div></div><div></div></div>
    </div>
  )
});
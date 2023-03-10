import { component$, useSignal } from "@builder.io/qwik";
import { useCF7Form } from "~/hooks/useCF7Form";
import { BannerForm } from '~/components/shared/bannerForm/bannerForm';


export default component$(() => {

  const { handleSubmit } = useCF7Form({ siteUrl: 'siteUrl', formId: 'FormID' });
    const formRef = useSignal<HTMLFormElement>();
  
  return (
    <div class=''>
      <BannerForm />


      <div class="flex items-center w-full mx-auto flex-col">
            <div class=" px-3"> CONNEXION
                <form ref={formRef} preventdefault:click onSubmit$={() => { console.log('test') }} class={`relative w-full rounded-sm bg-white bg-opacity-40`}>
                    <div class="p-3 pb-10 pt-0 flex flex-col lg:flex-row justify-between flex-wrap items-center lg:justify-start">
                        <div class="w-full  px-3">
                            <label for="countries" class="mt-5 block mb-1 text-base font-normal dark:text-black">Identifiant <span class='text-red-500 text-2xl'>*</span></label>
                            <input type="text" id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                        </div>
                        <div class="w-full  px-3">
                            <label for="countries" class="mt-5 block mb-1 text-base font-normal dark:text-black">Mot de passe <span class='text-red-500 text-2xl'>*</span></label>
                            <input type="text" id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
                        </div>
                        <div class="w-full mt-5  px-3">
                            <div>
                            Se souvenir de moi
                            <input type="checkbox" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full -mt-4" />
                            </div>
                            <a  class=" mt-5 block mb-1 text-base font-normal text-gray-600 dark:text-black">Mot de passe oublié </a>
                        </div>
                    </div>
                        
                    <div class="flex justify-center w-full py-10 px-7">
                        <button onClick$={() => { handleSubmit(formRef.value as HTMLFormElement) }} type="submit" class="bg-primary-dark font-bold py-2 px-6 text-white rounded-lg hover:bg-primary-dark">
                            Connexion
                        </button>
                    </div>
                </form>
            </div>
        </div>

      
      
      
      <div class='bg-gray-100 w-full flex items-center justify-center py-20 sm:px-0 px-2'>
        <img src="/images/insigne.png" width={220} alt="" />
      </div>

    </div>
  );
});



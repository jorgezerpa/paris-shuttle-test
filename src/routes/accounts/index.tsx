// import { component$, useSignal } from "@builder.io/qwik";
// import { useSubmitForm } from "~/hooks/useSubmitForm";
// import { BannerForm } from '~/components/shared/bannerForm/bannerForm';


// export default component$(() => {

//   const { handleSubmit } = useSubmitForm();
//   const formRef = useSignal<HTMLFormElement>();
  
//   return (
//     <div class=''>
//       <BannerForm charge="no-charge" destination="no-destination" />


//       <div class="flex items-center w-full mx-auto flex-col">
//             <div class=" px-3"> <p class="mt-2">CONNEXION</p>

//           {/*   <form >
//                     <div class="p-3 pb-10 pt-0 flex flex-col lg:flex-row justify-between flex-wrap items-center lg:justify-start">

                    
                    
//                         <div class="flex items-center">
//                             <input id="default-radio-1" type="checkbox" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " />
//                             <label for="default-radio-1" class="ml-2 text-sm font-normal text-gray-900 dark:text-black">Se souvenir de moi</label>
//                         </div>


//                 </div>
//              </form> */}            
//               <form>
//                     <div class="p-3 pb-10 pt-0 flex flex-col min-w-[25rem] lg:flex-row justify-between flex-wrap items-center lg:justify-start">
//                         <div class="w-full  px-3">
//                             <label for="identifiant" class="mt-5 block mb-1 text-base font-normal dark:text-black">Identifiant <span class='text-red-500 text-2xl'>*</span></label>
//                             <input type="text" id="identifiant" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
//                         </div>
//                         <div class="w-full  px-3">
//                             <label for="password" class="mt-5 block mb-1 text-base font-normal dark:text-black">Mot de passe <span class='text-red-500 text-2xl'>*</span></label>
//                             <input type="text" id="password" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:outline-none focus::border-none block w-full p-2.5" />
//                         </div>

                        

//                         <div class="w-full mt-5  px-3 flex justify-between">

//                             <label for="ckeckbox" >
//                             <input type="checkbox" class=" mr-3" id="ckeckbox "/>
//                               Se souvenir de moi
                              
//                             </label>

//                         <a  class="block mb-1 text-base font-normal text-gray-600 cursor-pointer dark:text-black">Mot de passe oublié </a>
//                         </div>
//                     </div>
                        
//                     <div class="flex justify-center w-full py-10 px-7">
//                         <button onClick$={() => { handleSubmit(formRef.value as HTMLFormElement) }} type="submit" class="bg-primary-dark font-bold py-2 px-6 text-white rounded-lg hover:bg-primary-dark">
//                             Connexion
//                         </button>
//                     </div>
//                 </form> 
//             </div>
//         </div>

      
      
      
//       <div class='bg-gray-100 w-full flex items-center justify-center py-20 sm:px-0 px-2'>
//         <img src="/images/insigne.png" width={220} alt="" />
//       </div>

//     </div>
//   );
// });



import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return <div>Hello Qwik!</div>
});
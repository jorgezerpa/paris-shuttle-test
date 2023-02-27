import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './index.css?inline'
import Form from '~/components/reservation/form/form';

export default component$(() => {
    useStylesScoped$(styles)

    const hoursArray = []
    for(let i = 0; i<24; i++){
        for(let j = 0; j<12; j++){ 
            const hours = i<10 ? `0${i}` : `${i}`  
            const minutes = (j*5)<10 ? `0${j*5}` : `${j*5}`  
            const time = `${hours}:${minutes}` 
            hoursArray.push(time) 
        } 
    }


  return  (
    <div class="flex items-center flex-col pt-5">
        <div class="max-w-[1100px] w-full px-3">
            <h2 class={`pt-5 mb-2 text-3xl text-center border-b-primary-dark border-b text-primary-dark font-bold`}>DÉTAILS RÉSERVATION</h2>
            <Form />
        </div>

        <div class='bg-gray-100 w-full flex items-center flex-col'>
            <div class='w-full max-w-[1100px] flex flex-col lg:flex-row py-10 gap-5 lg:gap-0'>
                <div class='w-full lg:w-[60%] text-center text-[17px] text-gray-800 px-5 lg:px-0 lg:text-left'>
                    Une fois que vous aurez achevé votre réservation sur notre site, les détails de celle-ci sont envoyés par courrier électronique à notre équipe commerciale qui organisera les préparatifs de vos transferts conformément à votre demande.  Des instructions individuelles figurent sur votre Voucher (confirmation de réservation) envoyée par courrier électronique une fois que vous aurez terminé votre réservation.   
                </div>
                <div class='w-full lg:w-[40%] flex justify-center items-center '>
                    <img src="/images/payment_options.jpg" width={231} alt="" />            
                </div>
            </div>
            <div class='pb-10 mt-5 w-full max-w-[1100px] flex justify-center items-center'>
                <img src="/images/insigne.png" width={220} alt="" />            
            </div>
        </div>

    </div>
  )
});
import {
    createContextId,
  } from '@builder.io/qwik';


export type GlobalContext = { 
  numberOfPassengers:string
  typeVoyage:string
  charge:string
  destination:string

};

export const globalContext = createContextId<GlobalContext>('global-context');
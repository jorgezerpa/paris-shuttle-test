import { component$, useContextProvider, useStore } from '@builder.io/qwik';
import { globalContext } from './store/context/mainContext';
import type {  GlobalContext } from './store/context/mainContext';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';
import './global.css';

export default component$(() => {
  const mainContext = useStore<GlobalContext>({
    charge:'',
    destination:'',
    numberOfPassengers:'',
    typeVoyage:'',
    language:'fr'
  })
  useContextProvider(globalContext, mainContext)

  return (
      <QwikCityProvider>
        <head>
          <meta charSet="utf-8" />
          <link rel="manifest" href="/manifest.json" />
          <RouterHead />
        </head>
        <body lang="en">
          <RouterOutlet />
          <ServiceWorkerRegister />
        </body>
      </QwikCityProvider>
  );
});
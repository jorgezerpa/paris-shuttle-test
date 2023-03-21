import { component$, useSignal, useStylesScoped$, useContext } from '@builder.io/qwik';
import { globalContext } from '~/store/context/mainContext';
import styles from './languageDropdown.css?inline';


export default component$(() => {
  const LANGUAGES = [
    { key: 'fr', 'icon': '/icons/france.svg', 'label': 'Francais' },
    { key: 'en', 'icon': '/icons/uk.svg', 'label': 'English' },
    { key: 'es', 'icon': '/icons/spain.svg', 'label': 'Español' },
    { key: 'it', 'icon': '/icons/italy.svg', 'label': 'Italiano' },
  ]

  const context = useContext(globalContext)

  useStylesScoped$(styles)
  const currentLanguage = useSignal(LANGUAGES[0]);
  const showLanguages = useSignal(false);

  return (
    <>
      <div class="group inline-block">
        <button
          onClick$={() => showLanguages.value = !showLanguages.value}
          class="outline-none focus:outline-none px-1 py-1 lg:px-3 lg:py-2 lg:bg-gray-200 bg-white lg:bg-opacity-25 flex justify-between items-center lg:min-w-[140px]"
        >
          <div class="flex gap-1 items-center">
            <span><img src={currentLanguage.value.icon} class='w-[20px] lg:w-[22px]' alt="" /></span>
            <span class="hidden lg:inline-block font-normal flex-1">{currentLanguage.value.label}</span>
          </div>
          <span>
            <svg
              class={`${showLanguages.value && '-rotate-180'} hidden lg:inline-block fill-current h-4 w-4 transform
                transition duration-150 ease-in-out`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </span>
        </button>
        <ul
          class={`${showLanguages.value ? 'scale-100 transition-transform' : 'scale-0 transition-transform'} transition-transform bg-white text-black border transform absolute 
            duration-150 ease-in-out origin-top lg:min-w-[140px]`}
        >
          {LANGUAGES.map((language, index) => (
            <li
              onClick$={() => {
                currentLanguage.value = LANGUAGES[index]
                showLanguages.value = !showLanguages.value
                context.language = language.key as "fr" | "en" | "es" | "it"
              }}
              class="flex items-center gap-2 px-1 py-1 lg:px-3 lg:py-2 hover:bg-gray-100 border-b-2 border-gray-200">
              <span><img src={language.icon} class='w-[20px] lg:w-[22px]' alt="" /></span>
              <span class="hidden lg:inline-block">{language.label}</span>
            </li>
          ))}
        </ul>
      </div>

    </>
  )
});
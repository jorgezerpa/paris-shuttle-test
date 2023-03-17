import { component$, useSignal, useStylesScoped$, useVisibleTask$ } from '@builder.io/qwik';
import styles from './dropdown.css?inline';

type Item = { icon?:string, title:string, key?:string }

export default component$(({ icon, title, items, defaultValue}:{icon:string, title:string, items:Item[], defaultValue?:string}) => {
  useStylesScoped$(styles)
  const currentItem = useSignal<Item|null>(null);
  const showItems = useSignal(false);
  
  useVisibleTask$(()=>{
    if(defaultValue && defaultValue!=='Charles%20de%20Gaulle%20(CDG)'){
      const index = items.findIndex(item=>item.key?.toLowerCase()===defaultValue.toLowerCase())
      if(index!==-1) currentItem.value = items[index]
    }
    if(defaultValue && defaultValue==='Charles%20de%20Gaulle%20(CDG)'){
      const index = items.findIndex(item=>item.key?.toLowerCase()==='cdg')
      if(index!==-1) currentItem.value = items[index]
    }
  })
  
  return (
    <>
        <div class="group block relative w-full">
          <button
          type='button'
            onClick$={()=>showItems.value = !showItems.value}
            class="outline-none border border-gray-300 focus:outline-none px-1 py-1 lg:px-3 lg:py-2 flex justify-between items-center w-full"
          >
            <div class="flex gap-1 items-center">
              <span><img src={icon} class='w-[20px] lg:w-[22px]' alt="" /></span>
              <span class="inline-block font-normal flex-1">{ currentItem.value?.title || title }</span>
            </div>
            <span>
              <svg
                class={`${showItems.value && '-rotate-180'} inline-block fill-current h-4 w-4 transform
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
            class={`${showItems.value ? 'scale-100 transition-transform' : 'scale-0 transition-transform'} transition-transform bg-white text-black border transform absolute 
            duration-150 ease-in-out origin-top w-full z-50`}
          >
            {items.map((item, index)=>(
              <li
              onClick$={()=>{
                
                currentItem.value = items[index]
                showItems.value = !showItems.value
              }} 
              class="bg-white flex items-center   lg:px-3 lg:py-2 hover:bg-gray-100 border-b-2 border-gray-200">
                {/* <span><img src={language.icon} class='w-[20px] lg:w-[22px]' alt="" /></span> */}
                <span class="inline-block">{item.title}</span>
                </li>
            ))}
          </ul>
        </div>

    </>
  )
});
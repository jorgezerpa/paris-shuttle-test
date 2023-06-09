import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export const DrawerMobile = component$(({ showNavbar }: { showNavbar:{value:boolean} }) => {
  const ITEMS = [
    // { title:'Accueil', path:'/' },
    { title:'Orly', path:'/trajet' },
    { title:'Disneyland', path:'/trajet' },
    { title:'Paris', path:'/trajet' },
    { title:'Charles de Gaulle (CDG)', path:'/trajet' },
    { title:'Beauvais', path:'/trajet' },
    { title:'Pack family', path:'/trajet' },
    { title:'Contact', path:'/trajet' },
]

  return (
    <div class={`overflow-y-scroll lg:hidden transition-all fixed top-[85px] bottom-0 left-0 w-[250px] bg-white z-50 ${!showNavbar.value && '-translate-x-[260px]'}`}>
        <div class='px-3 py-3 border-b-gray-200 border-b' onClick$={()=>showNavbar.value=false}>
          <Link href='/'>Accueil</Link>
        </div>
        { ITEMS.map(item=>{
          return(
            <div class='px-3 py-3 border-b-gray-200 border-b'>
              <Link href={item.path} onClick$={()=>showNavbar.value=false}>{ item.title }</Link>
              <div class="px-3 py-3 text-gray-500" onClick$={()=>showNavbar.value=false}>
                <Link href={item.path} class="flex" >
                  { item.title }
                    <img src="/icons/double-arrow.svg" width={15} alt="" />
                  { item.title }
                </Link>
              </div>
              <div class="px-3 py-3 text-gray-500" onClick$={()=>showNavbar.value=false}>
                <Link href={item.path} class="flex">
                  { item.title }
                    <img src="/icons/double-arrow.svg" width={15} alt="" />
                  { item.title }
                </Link>
              </div>
              <div class="px-3 py-3 text-gray-500" onClick$={()=>showNavbar.value=false}>
                <Link href={item.path} class="flex">
                  { item.title }
                    <img src="/icons/double-arrow.svg" width={15} alt="" />
                  { item.title }
                </Link>
              </div>
            </div>
          )
        })}
    </div>
  )
});
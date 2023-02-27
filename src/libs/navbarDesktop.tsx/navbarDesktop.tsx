import { component$, useSignal } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';


export const MenuElement = component$(({ item }: {item:any}) => {
    const showOptions = useSignal(false)

    return(
        <div class='relative h-full py-3' onMouseOver$={()=>showOptions.value=true} onMouseLeave$={()=>showOptions.value=false}>
             <Link href={item.path}>{item.title}</Link>
             <div class={`absolute z-50 border-gray-300 bg-white  border top-full left-0 transition-all origin-top-left ${showOptions.value?'scale-1':'scale-0'}`}>
                {[1,2,3,4,5].map(subItem=>(
                    <div class='py-3 px-3 min-w-[220px] font-normal text-primary-dark text-sm border-b border-b-gray-300'>Item</div>
                ))}
             </div>
        </div>
    )
})


export default component$(({ isFixed=false }:{ isFixed?:boolean }) => {
    const ITEMS = [
        // { title:'Accueil', path:'/' },
        { title:'Orly', path:'/place/orly' },
        { title:'Disneyland', path:'/place/disneyLand' },
        { title:'Paris', path:'/place/paris' },
        { title:'Charles de Gaulle (CDG)', path:'/place/CDG' },
        { title:'Beauvais', path:'/place/beauvais' },
        // { title:'Pack family', path:'/' },
        // { title:'Contact', path:'/' },
    ]


  return (
    <div class={`bg-primary-light pl-2 justify-center hidden lg:flex ${isFixed && 'fixed w-full z-50 top-0'}`}>
        <div class='max-w-[1350px] w-full flex text-white text-lg font-bold justify-start gap-10'>
            <div class='relative h-full py-3'><Link href={'/'}>Accueil</Link></div>
            {ITEMS.map(item=>(
                <MenuElement item={item} />
            ))}
            <div class='relative h-full py-3'><Link href={'/'}>Pack Family</Link></div>
            <div class='relative h-full py-3'><Link href={'/'}>Contact</Link></div>
        </div>
    </div>
  )
});
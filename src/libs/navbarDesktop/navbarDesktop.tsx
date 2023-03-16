import { component$, useSignal } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';


export const MenuElement = component$(({ item }: { item: any }) => {
    const showOptions = useSignal(false)

    return (
        <div class='relative h-full py-3' onMouseOver$={() => showOptions.value = true} onMouseLeave$={() => showOptions.value = false}>
            <Link href={item.path}>{item.title}</Link>
            <div class={`absolute z-50 border-gray-300 bg-white  border top-full left-0 transition-all origin-top-left ${showOptions.value ? 'scale-1' : 'scale-0'}`}>
                {item.subitems.map((subItem:any, index:any) => (
                    <Link href={item.path+'/'+subItem} key={index + item.path}>
                        <div class='py-3 px-3 min-w-[280px] font-normal text-primary-dark text-sm border-b border-b-gray-300 flex cursor-pointer hover:bg-gray-100 transition-all'>
                            {item.title}
                            <img src="/icons/double-arrow.svg" width={15} alt="" />
                            {subItem}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
})


export default component$(({ isFixed = false }: { isFixed?: boolean }) => {
    const ITEMS = [
        // { title:'Accueil', path:'/' },
        { title: 'Orly', path: '/trajet/orly', subitems: ['Paris', 'Disneyland', 'Charles de Gaulle (CDG)', 'Beauvais'] },
        { title: 'Disneyland', path: '/trajet/disneyland', subitems: ['Paris', 'Orly', 'Charles de Gaulle (CDG)', 'Beauvais'] },
        { title: 'Paris', path: '/trajet/paris', subitems: ['Beauvais', 'Orly', 'Charles de Gaulle (CDG)', 'Disneyland'] },
        { title: 'Charles de Gaulle (CDG)', path: '/trajet/cdg', subitems: ['Disneyland', 'Paris', 'Beauvais', 'Orly'] },
        { title: 'Beauvais', path: '/trajet/beauvais', subitems: ['Disneyland', 'Orly', 'Paris', 'Charles de Gaulle (CDG)'] },
    ];


    return (
        <div class={`bg-primary-light pl-2 justify-center hidden lg:flex ${isFixed && 'fixed w-full z-50 top-0'}`}>
            <div class='max-w-[1350px] w-full flex text-white text-lg font-bold justify-start gap-10'>
                <div class='relative h-full py-3'><Link href={'/'}>Accueil</Link></div>
                {ITEMS.map((item, index) => (
                    <MenuElement key={index} item={item} />
                ))}
                <div class='relative h-full py-3'><Link href={'/pack-family'}>Pack Family</Link></div>
                <div class='relative h-full py-3'><Link href={'/contact'}>Contact</Link></div>
            </div>
        </div>
    )
});
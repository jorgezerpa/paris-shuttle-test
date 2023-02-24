import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
    const ITEMS = [
        { title:'Accueil', path:'/' },
        { title:'Orly', path:'/place/orly' },
        { title:'Disneyland', path:'/place/disneyLand' },
        { title:'Paris', path:'/place/paris' },
        { title:'Charles de Gaulle (CDG)', path:'/place/CDG' },
        { title:'Beauvais', path:'/place/beauvais' },
        { title:'Pack family', path:'/' },
        { title:'Contact', path:'/' },
    ]


  return (
    <div class='bg-primary-light py-4 pl-2 justify-center hidden lg:flex'>
        <div class='max-w-[1350px] w-full flex text-white text-lg font-bold justify-start gap-10'>
            {ITEMS.map(item=>(
                <Link href={item.path}>{item.title}</Link>
            ))}
        </div>
    </div>
  )
});
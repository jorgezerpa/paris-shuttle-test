import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
    const ITEMS = [
        { title:'Accueil', path:'/accueil' },
        { title:'Orly', path:'' },
        { title:'Disneyland', path:'' },
        { title:'Paris', path:'' },
        { title:'Charles de Gaulle (CDG)', path:'' },
        { title:'Beauvais', path:'' },
        { title:'Pack family', path:'' },
        { title:'Contact', path:'' },
    ]


  return (
    <div class='bg-primary-light py-4 pl-2 justify-center hidden lg:flex'>
        <div class='max-w-[1350px] w-full flex text-white text-lg font-bold justify-start gap-10'>
            {ITEMS.map(item=>(
                <Link>{item.title}</Link>
            ))}
        </div>
    </div>
  )
});
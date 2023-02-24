import { component$  } from '@builder.io/qwik';
import { useLocation  } from '@builder.io/qwik-city';

export default component$(() => {
    const { params:{ placeSlug } } = useLocation()


  return (
    <div>
        { placeSlug }
    </div>
  )
});
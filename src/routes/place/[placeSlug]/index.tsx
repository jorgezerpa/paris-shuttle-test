import { component$ } from '@builder.io/qwik';
import { BannerForm } from '~/components/shared/bannerForm/bannerForm';
// import type { DocumentHead } from '@builder.io/qwik-city';
// import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class=''>
      <BannerForm />
    </div>
  );
});

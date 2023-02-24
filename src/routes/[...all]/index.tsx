import { component$, useClientEffect$, useStore, useStylesScoped$, Resource, useResource$, _restProps } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';
import { loader$ } from '@builder.io/qwik-city';
import styles from './flower.css?inline';

export const getPathname = loader$((srv) => {
  return srv.url.pathname;
});

export default component$(() => {
  const signal = getPathname.use()
  const test = useResource$<any>(() => {
    return getPage(signal.value);
  });

  useStylesScoped$(styles);
  const loc = useLocation();

  const state = useStore({
    count: 0,
    number: 20,
  });

  useClientEffect$(({ cleanup }) => {
    const timeout = setTimeout(() => (state.count = 1), 500);
    cleanup(() => clearTimeout(timeout));

    const internal = setInterval(() => state.count++, 7000);
    cleanup(() => clearInterval(internal));
  });

  return (
    <>
      {!test.loading && (
          <div>
            {test.value.then((page) => (
                <h2>{page.title.rendered}</h2>
            ))}
          </div>
        )}
      <input
        type="range"
        value={state.number}
        max={50}
        onInput$={(ev) => {
          state.number = (ev.target as HTMLInputElement).valueAsNumber;
        }}
      />
      <div
        style={{
          '--state': `${state.count * 0.1}`,
        }}
        class={{
          host: true,
          pride: loc.query['pride'] === 'true',
        }}
      >
        {Array.from({ length: state.number }, (_, i) => (
          <div
            key={i}
            class={{
              square: true,
              odd: i % 2 === 0,
            }}
            style={{ '--index': `${i + 1}` }}
          />
        )).reverse()}
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Flower',
};

export async function getPage(
  pathname: string
): Promise<{ title: { rendered: string } }> {
  pathname = pathname.replace(/^./, '');
  pathname = pathname.replace(/.$/, '');
  console.log(pathname)
  console.log('FETCH', `http://localhost/first-travel/wp-json/wp/v2/pages`);
  const resp = await fetch(`http://localhost/first-travel/wp-json/wp/v2/pages?slug=${pathname}`, {
  });
  const json = await resp.json();
  console.log(json[0].title)
  // Todo redirect to page 404 when bad page found
  return json[0]
}
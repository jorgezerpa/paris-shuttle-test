import { component$ } from "@builder.io/qwik";

export const FaqItem = component$(({ title, description, items, extra, small = false }: { title: string, description: string, items?: string[], extra?: boolean | (() => any), small?: boolean }) => {
    return (
        <div class="mt-10">
            <h3 class={`${!small ? 'text-xl' : 'text-lg'} ${!small ? 'text-[#49B9EC]' : 'text-[#2F54B1]'} ${!small && 'font-bold'} mb-6`}>{title}</h3>
            <p class={`${!small && 'text-lg'}`}>{description}</p>
            <div class="mt-6">
                {items && items.map((item, index) => (
                    <div key={index} class="text-lg text-gray-500 flex items-center gap-2">
                        <label class="inline-block w-[6px] h-[6px] bg-[#49B9EC]"></label>
                        {item}
                    </div>
                ))}
            </div>
            {extra && typeof extra !== 'boolean' && <div class="text-lg pt-7">{extra()}</div>}
        </div>
    );
})
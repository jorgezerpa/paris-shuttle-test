import { useStore, $ } from "@builder.io/qwik";
import type { PropFunction } from "@builder.io/qwik";

//submitHandler => function that make the request (return a promise)
export function useSubmitForm( submitHandler : PropFunction<(data: FormData) => Promise<any>> ) {

    const queryStatus = useStore<{ isLoading: boolean, isError: boolean, isSuccess: boolean, result: any }>({
        isLoading: false,
        isError: false,
        isSuccess: false,
        result: null
    });

    const handleSubmit = $(async (form: HTMLFormElement) => {
        try {
            queryStatus.isLoading = true;
            const formData = new FormData(form);
            const result = await submitHandler(formData)
            console.log("Form Submitted ", result);
            queryStatus.isLoading = false;
            queryStatus.isSuccess = true;
        } catch (error) {
            console.log(error)
            queryStatus.isLoading = false;
            queryStatus.isError = true;
        }
    });

    return { ...queryStatus, handleSubmit }
}
import { useStore, $ } from "@builder.io/qwik";
//import axios from 'axios';

export function useCF7Form({ siteUrl, formId }: { siteUrl: string, formId: string }) {

    const queryStatus = useStore<{ isLoading: boolean, isError: boolean, isSuccess: boolean, result: any }>({
        isLoading: false,
        isError: false,
        isSuccess: false,
        result: null
    });

    console.log({siteUrl, formId});

    const handleSubmit = $(async (form: HTMLFormElement) => {
        try {
            queryStatus.isLoading = true;
            //const URL = `${siteUrl}/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback/`;
            const formData = new FormData(form);

            await console.log("Form Submitted ", formData);
            queryStatus.isLoading = false;
            queryStatus.isSuccess = true;
        } catch (error) {
            queryStatus.isLoading = false;
            queryStatus.isError = true;
        }
    });

    return { ...queryStatus, handleSubmit }
}
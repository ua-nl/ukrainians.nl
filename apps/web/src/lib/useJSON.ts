import useSwr from 'swr';

const fetchJSON = (url: string) => fetch(url).then((res) => res.json());
export const useJSON = <T>(url: string) => useSwr<T, unknown>(url, fetchJSON);

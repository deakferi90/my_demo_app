import { useEffect } from 'react';

export const useLoginCheck = (navigate) => {
    useEffect(() => {
        const user = localStorage.getItem('USER');
        if(user) {
            navigate('/dashboard');
        }
    });
}

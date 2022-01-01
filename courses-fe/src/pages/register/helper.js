import { useEffect } from 'react';

export const useRegisterCheck = (navigate) => {
    useEffect(() => {
        const user = localStorage.getItem('USER');
        if(user) {
            navigate('/login');
        }
    });
}

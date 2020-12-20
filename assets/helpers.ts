export const debounce = <M extends [], S extends (...args: M) => void>(func: S, waitFor: number): S => {
    const timeout = 0;

    return ((...args: M): void => {
        clearTimeout(timeout);
        setTimeout((): void => {
            func(...args);
        }, waitFor);
    }) as S;
};

export const addZero = (value: number): string => String(value).padStart(2, '0');

export const formatDate = (str: string | number): string => {
    const date = new Date(str);
    return `${addZero(date.getDate())}.${addZero(
        date.getMonth() + 1,
    )}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
};

type IFunction = (...args) => void;
export const throttle = (func: IFunction, time: number): IFunction => {
    let timeout = true;
    return (...args) => {
        if (timeout) {
            timeout = false;
            setTimeout(() => {
                timeout = true;
                func(...args);
            }, time);
        }
    };
};

export const generateTags = (str: string): string[] => {
    const arr = str.trim().toLowerCase().split(' ');
    const cutArr = arr.length > 15 ? arr.slice(0, 15) : arr;
    return cutArr.map(item => (item.length > 15 ? item.slice(0, 25) : item));
};

// decode data from cookie
export const decode = (cookie = ''): string => decodeURI(cookie).replace(/\\"/gi, '');

// get auth token from cookie
export const getToken = (cookie = '"token":""'): string =>
    decode(cookie)
        .split('%2C')
        .find(item => item.includes('"token"'))
        .replace('"token":"', '')
        .replace('"', '') || null;

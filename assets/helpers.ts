import cookie from 'cookie';

export const debounce = <M extends [], S extends (...args: M) => void>(func: S, waitFor: number): S => {
    const timeout = 0;

    return ((...args: M): void => {
        clearTimeout(timeout);
        setTimeout((): void => {
            func(...args);
        }, waitFor);
    }) as S;
};

type IFunction = (...args: unknown[]) => void;
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

export const addZero = (value: number): string => String(value).padStart(2, '0');

export const formatDate = (str: string | number | Date): string => {
    const date = new Date(str);
    return `${addZero(date.getDate())}.${addZero(date.getMonth() + 1)}.${date.getFullYear()} ${addZero(
        date.getHours(),
    )}:${addZero(date.getMinutes())}`;
};

export const generateTags = (str: string): string[] => {
    const arr = str.trim().toLowerCase().split(' ');
    const cutArr = arr.length > 15 ? arr.slice(0, 15) : arr;
    return cutArr.map(item => (item.length > 15 ? item.slice(0, 25) : item));
};

// decode data from cookie
export const decode = (value = ''): string => decodeURI(value).replace(/\\"/gi, '');

// parse cookie on server
interface IParseCookieParams {
    value?: string;
    key?: string;
    parsed?: boolean;
}
export const parseCookie = <T>({ value = '', key = 'blog_auth', parsed = false }: IParseCookieParams): T | null => {
    try {
        return parsed ? cookie.parse(value)[key] || null : JSON.parse(cookie.parse(value)[key]);
    } catch (error) {
        return null;
    }
};

export const bioHTML = (content: string): string =>
    content
        .replace(
            /(\b(https?|):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gi,
            '<a target="_blank" rel="noopener noreferrer" href="$1">$1</a>',
        )
        .replace(
            /(^|[^/])(www\.[\S]+(\b|$))/gim,
            '$1<a target="_blank" rel="noopener noreferrer" href="http://$2">$2</a>',
        )
        .replace(/\n/gi, '<br>');

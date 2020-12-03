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

export const formateDate = (str: string): string => {
    const date = new Date(str);
    return `${addZero(date.getDate())}.${addZero(date.getMonth() + 1)}.${date.getFullYear()}`;
};

export const getDate = (): string => {
    const date = new Date();
    return `${addZero(date.getDate())}.${addZero(date.getMonth() + 1)}.${date.getFullYear()}`;
};

export const generateTags = (str: string): string[] => str.trim().toLowerCase().split(' ');

export const debounce = <F extends (...args: any) => any>(func: F, waitFor: number) => {
    let timeout: number = 0;

    const debounced = (...args: any) => {
        clearTimeout(timeout);
        setTimeout(() => func(...args), waitFor);
    };

    return debounced as (...args: Parameters<F>) => ReturnType<F>;
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

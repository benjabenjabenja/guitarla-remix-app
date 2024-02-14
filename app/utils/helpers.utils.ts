/* eslint-disable @typescript-eslint/no-explicit-any */
export const format_date = (date: string) => {
    const new_date = new Date(date);
    const config : Intl.DateTimeFormatOptions= {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    };
    return new_date.toLocaleDateString('es-AR', config);
}
export const isValidObject = (value: any): boolean => value && Object.values(value).length > 0;
export function uniqueId(): string {
    const id = Math.random().toString(36).substring(2, 9);
    return `${Math.floor(new Date().getTime() / 1000) + id}`;
}

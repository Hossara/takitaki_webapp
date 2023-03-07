export const inputValue = (base: string, name: string): string => (
    document.querySelector(`${base} input[name=${name}]`) as HTMLInputElement
).value
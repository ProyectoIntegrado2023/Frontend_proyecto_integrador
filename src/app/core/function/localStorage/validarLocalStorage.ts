export function existeItemLocalStorage(itemName: string): boolean {
    const existe: boolean = localStorage.getItem(itemName) != null;
    return existe;
}
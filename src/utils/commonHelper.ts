import { toast } from 'react-toastify';

/**
 * This method calculate the size of local storage and only save the data if it has
 * sufficient memory available. We will use this function internally when setting local storage.
 * @returns {number} - size of local storage in bytes
 */
const getLocalStorageSize = (): number => {
    try {
        let totalSize = 0;
        for (const key in localStorage) {
            if (key in localStorage) {
                totalSize += encodeURIComponent(key)?.length ?? 0; // add key size
                totalSize += localStorage.getItem(key)?.length ?? 0; // add value size
            }
        }

        return totalSize;
    } catch (e: any) {
        throw new Error(
            'Something went wrong in calculating local storage space',
            e
        );
    }
};

/**
 * This method will store data in local storage only if memory in available in local storage.
 * Otherwise it will throw an error.
 * @param {string} key - key
 * @param {any} value - value
 * @param {boolean} shouldStringify - shouldStringify
 */
export const setLocalStorage = (
    key: string,
    value: any,
    shouldStringify: boolean = false
) => {
    try {
        let currentItemSize = 0;
        const valueToStore = shouldStringify ? JSON.stringify(value) : value;
        currentItemSize += encodeURIComponent(key).length;
        currentItemSize += valueToStore.length;

        if (getLocalStorageSize() + currentItemSize < 5000000) {
            localStorage.setItem(key, valueToStore);
        }
    } catch (e) {
        // For developers, console.log 'e' to debug issue
        toast.error('Could not store this data');
    }
};

/**
 * To get value from local storage either parsed or as it is
 * @param {string} key - key
 * @param {boolean} shouldParse - shouldParse
 * @param {*} defaultValue - generally null otherwise whatever user has provided
 * @returns {string | object} - return value
 */
export const getLocalStorage = (
    key: string,
    shouldParse: boolean = false,
    defaultValue: any = null
): string | object => {
    const localStoredValue = localStorage.getItem(key);
    if (localStoredValue) {
        return shouldParse ? JSON.parse(localStoredValue) : localStoredValue;
    }

    return defaultValue;
};

/**
 * To delete value from local storage
 * @param {string} key - key
 */
export const deleteLocalStorage = (key: string) => {
    localStorage.removeItem(key);
};

/**
 * To set value in session storage
 * @param {string} key - key
 * @param {any} value - value
 * @param {boolean} shouldStringify - shouldStringify
 */
export const setSessionStorage = (
    key: string,
    value: any,
    shouldStringify: boolean = false
) => {
    sessionStorage.setItem(
        key,
        shouldStringify ? JSON.stringify(value) : value
    );
};

/**
 * To get value from session storage either parsed or as it is
 * @param {string} key - key
 * @param {boolean} shouldParse - shouldParse
 * @returns {string | object} - return value
 */
export const getSessionStorage = (
    key: any,
    shouldParse: boolean = false
): string | object | null => {
    const sessionStoredValue = sessionStorage.getItem(key);
    if (shouldParse) {
        try {
            return sessionStoredValue ? JSON.parse(sessionStoredValue) : null;
        } catch (e) {
            // eslint-disable-next-line no-console
            console.warn('Failed to fetch from session storage', key);
        }
    } else {
        return sessionStoredValue;
    }

    return null;
};

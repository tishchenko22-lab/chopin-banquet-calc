// localStorage functions

/**
 * Saves a value to localStorage.
 * @param {string} key - The key to save the value under.
 * @param {any} value - The value to save.
 */
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Retrieves a value from localStorage.
 * @param {string} key - The key of the value to retrieve.
 * @returns {any} - The retrieved value or null if not found.
 */
function getFromLocalStorage(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
}

/**
 * Removes a value from localStorage.
 * @param {string} key - The key of the value to remove.
 */
function removeFromLocalStorage(key) {
    localStorage.removeItem(key);
}

/**
 * Clears all data from localStorage.
 */
function clearLocalStorage() {
    localStorage.clear();
}
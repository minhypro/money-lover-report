const localStorageKey = 'money-lover-report::options';

export function saveToLS(key: string, value: unknown) {
  if (window.localStorage) {
    const localStorageData = window.localStorage.getItem(localStorageKey) || '{}';
    const dataToSave = { ...JSON.parse(localStorageData), [key]: value };
    window.localStorage.setItem(localStorageKey, JSON.stringify(dataToSave));
  }
}

export function getFromLS(key: string) {
  if (window.localStorage) {
    try {
      const localStorageData = window.localStorage.getItem(localStorageKey) || '{}';
      return JSON.parse(localStorageData)[key];
    } catch (e) {
      return null;
    }
  } else {
    return null;
  }
}

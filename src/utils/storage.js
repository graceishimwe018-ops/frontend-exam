export function loadData(key, fallback) {
  try {
    const value = localStorage.getItem(key)
    if (value !== null) return JSON.parse(value)
  } catch (error) { console.error(`Could not load ${key}`, error) }
  localStorage.setItem(key, JSON.stringify(fallback))
  return fallback
}
export const saveData = (key, value) => {
  try { localStorage.setItem(key, JSON.stringify(value)) } catch (error) { console.error(`Could not save ${key}`, error) }
}

const PREFIX = 'compass:'

export function loadList(key) {
  try {
    const raw = localStorage.getItem(PREFIX + key)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function saveList(key, list) {
  localStorage.setItem(PREFIX + key, JSON.stringify(list))
}

export function addEntry(key, entry) {
  const list = loadList(key)
  const withId = { id: crypto.randomUUID(), createdAt: new Date().toISOString(), ...entry }
  const next = [withId, ...list]
  saveList(key, next)
  return next
}

export function removeEntry(key, id) {
  const next = loadList(key).filter((e) => e.id !== id)
  saveList(key, next)
  return next
}

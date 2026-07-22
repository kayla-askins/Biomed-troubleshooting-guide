import { knowledgeBase } from '../data/knowledgeBase.js'

function scoreEntry(inputLower, entry) {
  let score = 0
  for (const kw of entry.keywords) {
    if (inputLower.includes(kw.toLowerCase())) {
      score += kw.split(' ').length
    }
  }
  return score
}

// Returns the best-matching knowledge base entry, or null if nothing scored.
export function matchSymptom(input) {
  if (!input || !input.trim()) return null
  const inputLower = input.toLowerCase()
  let best = null
  let bestScore = 0
  for (const entry of knowledgeBase) {
    const score = scoreEntry(inputLower, entry)
    if (score > bestScore) {
      bestScore = score
      best = entry
    }
  }
  return best
}

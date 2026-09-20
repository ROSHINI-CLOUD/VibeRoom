export type Candidate = {
  title: string
  artist: string
  score: number
  reasons: string[]
}

export function explainCandidate(candidate: Candidate): string[] {
  return candidate.reasons.slice(0, 3)
}

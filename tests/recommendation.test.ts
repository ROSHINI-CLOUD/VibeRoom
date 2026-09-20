import { describe, expect, it } from 'vitest'
import { explainCandidate, type Candidate } from '../src/domain/recommendation'

describe('recommendation explanations', () => {
  it('keeps explanations grounded in the score facts', () => {
    const candidate: Candidate = {
      title: 'Midnight City',
      artist: 'M83',
      score: 0.92,
      reasons: ['It keeps the room moving', 'Bridges the energy gap', 'Gives Maya a moment', 'Hidden detail'],
    }

    expect(explainCandidate(candidate)).toEqual([
      'It keeps the room moving',
      'Bridges the energy gap',
      'Gives Maya a moment',
    ])
  })
})

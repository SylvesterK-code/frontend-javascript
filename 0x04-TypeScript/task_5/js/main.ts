// Define MajorCredits and MinorCredits using nominal typing (branding)
interface MajorCredits {
  credits: number;
  readonly __brand: 'major';
}

interface MinorCredits {
  credits: number;
  readonly __brand: 'minor';
}

// Functions to sum credits and return the correct type
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, __brand: 'major' };
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, __brand: 'minor' };
}

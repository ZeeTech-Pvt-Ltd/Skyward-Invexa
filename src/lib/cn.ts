/**
 * Tiny className joiner. Keeps conditional class lists readable without
 * pulling in a dependency.
 */
export function cn(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(' ')
}

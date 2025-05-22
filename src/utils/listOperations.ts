/**
 * Parse a string into an array of items based on the specified format.
 */
export const parseList = (input: string, format: string): string[] => {
  if (!input.trim()) return [];

  let separator: RegExp;
  switch (format) {
    case 'comma':
      separator = /\s*,\s*/;
      break;
    case 'newline':
      separator = /\n+/;
      break;
    case 'space':
      separator = /\s+/;
      break;
    case 'tab':
      separator = /\t+/;
      break;
    default:
      separator = /\s*,\s*/;
  }

  return input
    .split(separator)
    .map(item => item.trim())
    .filter(item => item !== '');
};

/**
 * Find the union of two arrays.
 * The union includes all unique elements from both arrays.
 */
export const findUnion = <T,>(list1: T[], list2: T[]): T[] => {
  const unionSet = new Set([...list1, ...list2]);
  return Array.from(unionSet);
};

/**
 * Find the intersection of two arrays.
 * The intersection includes only elements that exist in both arrays.
 */
export const findIntersection = <T,>(list1: T[], list2: T[]): T[] => {
  const set1 = new Set(list1);
  return list2.filter(item => set1.has(item));
};

/**
 * Find the difference between two arrays (list1 - list2).
 * The difference includes elements from list1 that don't exist in list2.
 */
export const findDifference = <T,>(list1: T[], list2: T[]): T[] => {
  const set2 = new Set(list2);
  return list1.filter(item => !set2.has(item));
};
export function increase() {
  console.log('increase');
  return { type: 'count:increase' };
}

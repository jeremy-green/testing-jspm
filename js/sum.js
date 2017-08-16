import Debug from 'debug';
import reduce from "./reduce";
import add from "./add";

const debug = Debug('sum');

export default function sum(list) {
  debug('list')
  return reduce(list, add, 0);
}

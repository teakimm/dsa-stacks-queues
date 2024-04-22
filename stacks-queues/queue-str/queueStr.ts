import { LLStr } from "../common/ll";

/** QueueStr: can remove from start or add to end */

class QueueStr {
  _queue: LLStr;

  constructor(initial: string[] = []) {
    this._queue = new LLStr(initial);
  }

  /** enqueue(val): add val to end. Returns undefined. */
  enqueue(val: string): void {
    return this._queue.push(val);
  }

  /** dequeue(): remove & return item from start.
   * Throws error if empty. */
  dequeue(): string {
    return this._queue.shift();
  }

  /** peek(): return the value of top. */
  peek(): string {
    return this._queue.getAt(0);
  }

  /** isEmpty(): is the queue empty? */
  isEmpty(): boolean {
    return this._queue.length === 0;
  }
}


export { QueueStr };

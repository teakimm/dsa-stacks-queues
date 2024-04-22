import { IndexError } from "../common/ll";

/** StackStr: can remove from the top or add to the top. */

class StackStr {
  _stack: string[];

  constructor(initial: string[] = []) {
    this._stack = initial;
  }


  /** push(val): add val to top. Returns undefined. */
  push(val: string): void {
    this._stack.push(val);
  }

  /** pop(): remove and return item from top.
   * Throws error if empty. */
  pop(): string {
    if (this._stack.length === 0) {
      throw new IndexError();
    }
    return this._stack.pop()!;
  }

  /** peek(): return the value of first item. */
  peek(): string {
    if (this._stack.length === 0) {
      throw new IndexError();
    }
    return this._stack[this._stack.length - 1];
  }

  /** isEmpty(): is the stack empty? */
  isEmpty(): boolean {
    return this._stack.length === 0;
  }
}


export { StackStr };

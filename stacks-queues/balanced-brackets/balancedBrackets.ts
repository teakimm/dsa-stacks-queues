/** Does this string have balanced brackets? Returns true/false. */

function balancedBrackets(str: string): boolean {
  const opposites: { "}": string, ")": string, "]": string; } = {
    "}": "{",
    ")": "(",
    "]": "["
  };
  const stack: string[] = [];

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];

    if (stack.length !== 0 && opposites[currentChar] === stack[stack.length - 1])
  }
}


export { balancedBrackets };
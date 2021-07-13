import { createInterface } from "readline";
import { promisify } from "util";

interface Questioner {
  ask(text: string): Promise<string>;
  finishUp(): void;
}

export function createQuestioner(): Questioner {
  const rlInterface = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const ask = promisify(rlInterface.question).bind(rlInterface) as unknown as (text: string) => Promise<string>;

  const finishUp = () => {
    rlInterface.close();
  };

  return {
    ask,
    finishUp,
  };
}

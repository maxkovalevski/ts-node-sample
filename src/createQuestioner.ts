import { createInterface } from "readline";
import { promisify } from "util";

export interface Questioner {
  ask(text: string): Promise<string>;
  finishUp(): void;
}

export function createQuestioner(): Questioner {
  const rlInterface = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // const ask = promisify(rlInterface.question).bind(rlInterface);
  const ask = (message: string) =>
    new Promise<string>((resolve) => {
      rlInterface.question(message, (data) => {
        resolve(data);
      });
    });

  const finishUp = () => {
    rlInterface.close();
  };

  return {
    ask,
    finishUp,
  };
}

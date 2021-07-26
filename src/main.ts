import { Buildable } from "./Buildable";
import { createQuestioner } from "./createQuestioner";

async function main() {
  try {
    const questioner = createQuestioner();
    const transactionId = await questioner.ask("Type the transaction ID: ");

    type loggerFn = (id: number | string) => void;

    const logTransaction: loggerFn = (id: string) => {
      console.log(`[${new Date().toDateString()}] ${id.trim()}`);
    };

    logTransaction(transactionId);

    questioner.finishUp();
  } catch (e) {
    console.error(e);
  }
}

main();

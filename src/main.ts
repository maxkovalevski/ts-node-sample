import { createQuestioner } from "./createQuestioner";
import { greeting } from "./greeting";
import { createMerchant } from "./merchant";

async function main() {
  try {
    const questioner = createQuestioner();
    const username = await questioner.ask("Type your username: ");
    const level = await questioner.ask("Type your level: ");

    greeting(username);

    const merchant = createMerchant("Trader 1", questioner);

    merchant.startDialog({ name: username, level });
  } catch (e) {
    console.error(e);
  }
}

main();

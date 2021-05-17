import { createQuestioner } from "./createQuestioner";
import { greeting } from "./greeting";

async function main() {
  try {
    const questioner = createQuestioner();
    const firstName = await questioner.ask("Type your first name: ");
    const username = await questioner.ask("Type your username: ");

    greeting(firstName, username);

    questioner.finishUp();
  } catch (e) {
    console.error(e);
  }
}

main();

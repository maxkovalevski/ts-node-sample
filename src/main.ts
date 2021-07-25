import { createQuestioner } from "./createQuestioner";
import { greeting } from "./greeting";

import inventory from "./inventory.json";

async function main() {
  try {
    const questioner = createQuestioner();
    const username = await questioner.ask("Type your username: ");

    greeting(username);

    const itemName = await questioner.ask(
      "Type the name of the inventory item: "
    );

    const foundItem = inventory.find((item) => item.name === itemName);

    console.log(
      `You've chosen an item: ${foundItem.icon} ${foundItem.name} (lvl ${foundItem.level})`
    );

    questioner.finishUp();
  } catch (e) {
    console.error(e);
  }
}

main();

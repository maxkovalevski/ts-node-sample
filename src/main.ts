import { createQuestioner } from "./createQuestioner";
import { greeting } from "./greeting";
import usersDB from './users.json';

async function main() {
  try {
    const questioner = createQuestioner();
    const username = await questioner.ask("Type your name: ");

    const registeredUsers = usersDB.find((user) => user.username === username);

    greeting(registeredUsers);

    questioner.finishUp();
  } catch (e) {
    console.error(e);
    process.exit();
  }
}

main();

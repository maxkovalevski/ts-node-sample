import { Questioner } from "./createQuestioner";

export function createMerchant(name: string, questioner: Questioner) {
  async function greeting(caller: { name: string; level: number }) {
    console.log("\nDid you complete the quest? \n 1) yes \n 2) no");
    const answer = await questioner.ask("\nYour answer: ");

    if (answer === "1") {
      console.log(`\nExcellent! Now your level is: ${caller.level + 1}`);
    } else {
      console.log("\nSee ya later");
    }

    questioner.finishUp();
  }

  const character = {
    name,
    startDialog: function (caller: { name: string; level: string }) {
      console.log("[This character is busy now]");
      setTimeout(greeting.bind(this, caller), 2000);
    },
  };

  return character;
}

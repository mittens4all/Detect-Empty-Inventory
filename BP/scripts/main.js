import { system, world, EntityComponentTypes } from "@minecraft/server";

const objEmpty = world.scoreboard.getObjective("detect:empty") ?? world.scoreboard.addObjective("detect:empty");

function emptyInventory() {
  const allPlayers = world.getPlayers();
  for (const player of allPlayers) {
    const container = player.getComponent(EntityComponentTypes.Inventory).container;
    const head = player.getComponent("equippable").getEquipment("Head");
    const chest = player.getComponent("equippable").getEquipment("Chest");
    const legs = player.getComponent("equippable").getEquipment("Legs");
    const feet = player.getComponent("equippable").getEquipment("Feet");
    const offhand = player.getComponent("equippable").getEquipment("Offhand");

    if (container.emptySlotsCount === container.size && head?.typeId === undefined && chest?.typeId === undefined && legs?.typeId === undefined && feet?.typeId === undefined && offhand?.typeId === undefined) {
      objEmpty.setScore(player, 1);
    } else {
      objEmpty.setScore(player, 0);
    };
  };
};
system.runInterval(emptyInventory, 1);
import { RuneRollerApp, rollRuneAndChat } from "./rune-roller.js";

Hooks.once("init", () => {
  console.log("Vers le Ragnarök | Initialisation du module");

  // Expose l'API publique pour les macros Foundry
  game.versLeRagnarok = {
    RuneRollerApp,
    rollRune: rollRuneAndChat,
    openRuneRoller: () => new RuneRollerApp().render(true)
  };

  // Raccourci clavier Alt+R pour ouvrir le lanceur de runes
  game.keybindings.register("vers-le-ragnarok", "openRuneRoller", {
    name: "VLR.keybindings.openRuneRoller",
    hint: "VLR.keybindings.openRuneRollerHint",
    editable: [{ key: "KeyR", modifiers: ["Alt"] }],
    onDown: () => {
      new RuneRollerApp().render(true);
      return true;
    }
  });
});

Hooks.once("ready", () => {
  console.log("Vers le Ragnarök | Module prêt");
});

// Commande de chat : taper /rune lance les dés directement
Hooks.on("chatMessage", (_chatLog, message, _data) => {
  const cmd = message.trim().toLowerCase();
  if (cmd === "/rune") {
    rollRuneAndChat();
    return false;
  }
  if (cmd === "/rune dialog" || cmd === "/runes") {
    new RuneRollerApp().render(true);
    return false;
  }
});

// Bouton dans les contrôles de scène (groupe "token")
Hooks.on("getSceneControlButtons", (controls) => {
  if (!Array.isArray(controls)) return;
  const tokenGroup = controls.find(c => c.name === "token");
  if (!tokenGroup?.tools) return;
  tokenGroup.tools.push({
    name: "rune-roller",
    title: game.i18n.localize("VLR.runeRoller.title"),
    icon: "fas fa-dice-d20",
    button: true,
    onClick: () => new RuneRollerApp().render(true)
  });
});

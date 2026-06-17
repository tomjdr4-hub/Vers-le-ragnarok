import { RUNES, AETTS } from "./rune-data.js";

const { ApplicationV2, HandlebarsApplicationMixin } = foundry.applications.api;

export class RuneRollerApp extends HandlebarsApplicationMixin(ApplicationV2) {

  static DEFAULT_OPTIONS = {
    id: "vers-le-ragnarok-rune-roller",
    classes: ["vers-le-ragnarok", "rune-roller-app"],
    tag: "div",
    window: {
      title: "Divination par les Runes",
      icon: "fas fa-eye",
      resizable: false
    },
    position: {
      width: 440,
      height: "auto"
    },
    actions: {
      rollRune: RuneRollerApp._onRollRune,
      sendToChat: RuneRollerApp._onSendToChat,
      rollAgain: RuneRollerApp._onRollRune
    }
  };

  static PARTS = {
    content: {
      template: "modules/vers-le-ragnarok/templates/rune-roller.hbs"
    }
  };

  constructor(options = {}) {
    super(options);
    this._result = null;
    this._rolling = false;
  }

  async _prepareContext(options) {
    return {
      rolling: this._rolling,
      result: this._result,
      hasResult: !!this._result
    };
  }

  /** @this {RuneRollerApp} */
  static async _onRollRune(event, _target) {
    this._rolling = true;
    this._result = null;
    await this.render();

    const runeRoll = await new Roll("1d24").evaluate();
    const orientationRoll = await new Roll("1d2").evaluate();

    const rune = RUNES[runeRoll.total - 1];
    const rawInverted = orientationRoll.total === 2;
    const isInverted = rawInverted && rune.hasInverse;
    const reading = isInverted ? rune.inverted : rune.upright;
    const aett = AETTS[rune.aett];

    // Pause dramatique pendant l'animation CSS
    await new Promise(resolve => setTimeout(resolve, 900));

    this._result = { rune, isInverted, reading, aett };
    this._rolling = false;
    await this.render();
  }

  /** @this {RuneRollerApp} */
  static async _onSendToChat(event, _target) {
    if (!this._result) return;
    await postRuneToChat(this._result);
    this.close();
  }
}

// Lance directement une rune et l'envoie en discussion (pour macros/raccourcis)
export async function rollRuneAndChat() {
  const runeRoll = await new Roll("1d24").evaluate();
  const orientationRoll = await new Roll("1d2").evaluate();

  const rune = RUNES[runeRoll.total - 1];
  const isInverted = (orientationRoll.total === 2) && rune.hasInverse;
  const reading = isInverted ? rune.inverted : rune.upright;
  const aett = AETTS[rune.aett];

  await postRuneToChat({ rune, isInverted, reading, aett });
}

async function postRuneToChat(data) {
  const content = await renderTemplate(
    "modules/vers-le-ragnarok/templates/rune-chat-card.hbs",
    data
  );
  await ChatMessage.create({
    speaker: ChatMessage.getSpeaker(),
    content,
    flags: {
      "vers-le-ragnarok": { type: "rune-result", runeNumber: data.rune.number }
    }
  });
}

const Settings = {
  alternateRolls:"alternateRolls",
};

export const registerSystemSettings = () => {
    game.settings.register(CONFIG.Vaarn.systemName, Settings.alternateRolls, {
    name: "대안 판정",
    hint: "선택시 PC는 1d20 대신 2d10으로 판정합니다",
    scope: "world",
    config: true,
    type: Boolean,
    default: false,
    });
};


const getSetting = (setting) => {
    console.log(CONFIG.Vaarn.systemName, setting)
  return game.settings.get(CONFIG.Vaarn.systemName, setting);
};

const setSetting = (setting, value) => {
  return game.settings.set(CONFIG.Vaarn.systemName, setting, value);
};

export const alternateRolls = () => {
  return getSetting(Settings.alternateRolls);
};
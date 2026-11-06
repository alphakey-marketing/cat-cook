// 暗黑食堂成更狀態：懷疑度、黑錢彩池、combo；開更 reset
export const SUS_MAX = 5;
export const DARK = { suspicion: 0, pot: 0, combo: 1, persona: null, exposes: 0, raid: null, earned: 0, active: false };
export const resetDark = () => Object.assign(DARK, { suspicion: 0, pot: 0, combo: 1, persona: null, exposes: 0, raid: null, earned: 0, active: true });
export const addSus = (n) => { DARK.suspicion = Math.max(0, Math.min(SUS_MAX, DARK.suspicion + n)); };

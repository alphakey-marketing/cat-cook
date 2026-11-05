// A single active clock keeps every cooking timer fair across menus and app switches.
const reasons = new Set();
let pausedAt = null, pausedTotal = 0, activity = 0, countdown;
export const isPaused = () => reasons.size > 0;
export const gameNow = () => (pausedAt ?? performance.now()) - pausedTotal;
function change(reason, on) {
  const was = isPaused();
  if (on) reasons.add(reason); else reasons.delete(reason);
  if (!was && isPaused()) {
    pausedAt = performance.now();
    document.dispatchEvent(new Event('gamepause'));
  } else if (was && !isPaused()) {
    pausedTotal += performance.now() - pausedAt;
    pausedAt = null;
  }
  document.body.classList.toggle('game-paused', isPaused());
}
export function pause(reason, on) {
  if (on) {
    change(reason, true);
    clearInterval(countdown);
    change('resume', false);
    document.querySelector('#resume-countdown')?.remove();
  } else {
    // Set the countdown reason before releasing the last pause: no clock gap.
    if (reasons.has(reason) && reasons.size === 1 && activity) {
      change('resume', true);
      let n = 3;
      const el = document.createElement('div');
      el.id = 'resume-countdown';
      el.setAttribute('role', 'status');
      el.setAttribute('aria-live', 'polite');
      el.textContent = `準備繼續 · ${n}`;
      document.body.append(el);
      countdown = setInterval(() => {
        if (--n) el.textContent = `準備繼續 · ${n}`;
        else { clearInterval(countdown); el.remove(); change('resume', false); }
      }, 1000);
    }
    change(reason, false);
  }
}
export function wait(ms = 0) {
  const until = gameNow() + ms;
  return new Promise(resolve => {
    const tick = () => !isPaused() && gameNow() >= until ? resolve() : setTimeout(tick, 25);
    tick();
  });
}
export async function playActivity(fn, ...args) {
  activity++;
  try { await wait(); return await fn(...args); }
  finally { activity--; }
}
document.addEventListener('visibilitychange', () => pause('hidden', document.hidden));
if (document.hidden) pause('hidden', true);

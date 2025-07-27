const keyMap = Object.freeze({
  87: "W",
  38: "Up",
  83: "S",
  40: "Down",
  65: "A",
  37: "Left",
  68: "D",
  39: "Right",
});
type KeyCode = keyof typeof keyMap;
type Keys = (typeof keyMap)[KeyCode];
export function registerKeyboardEvent(
  event: Partial<Record<Keys, () => void>>,
) {
  document.addEventListener("keydown", (key) =>
    event[keyMap[key.keyCode as KeyCode]]?.(),
  );
}

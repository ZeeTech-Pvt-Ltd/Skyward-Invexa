/**
 * Boots a jsdom window and installs it on the Node globals.
 *
 * This module must be imported BEFORE react-dom, which reads `document` and
 * `window` at module scope. Keep it as the first import in any script under
 * scripts/ that needs a DOM.
 */
import { JSDOM } from 'jsdom'

const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost/',
  pretendToBeVisual: true,
})

/**
 * Some Node globals (notably `navigator` on Node 21+) are defined as
 * getter-only properties, so plain assignment throws. defineProperty works for
 * every case.
 */
function setGlobal(key: string, value: unknown) {
  Object.defineProperty(globalThis, key, { value, writable: true, configurable: true })
}

setGlobal('window', dom.window)
setGlobal('document', dom.window.document)
setGlobal('navigator', dom.window.navigator)
setGlobal('Node', dom.window.Node)
setGlobal('Element', dom.window.Element)
setGlobal('HTMLElement', dom.window.HTMLElement)
setGlobal('HTMLInputElement', dom.window.HTMLInputElement)
setGlobal('HTMLButtonElement', dom.window.HTMLButtonElement)
setGlobal('HTMLTextAreaElement', dom.window.HTMLTextAreaElement)
setGlobal('HTMLSelectElement', dom.window.HTMLSelectElement)
setGlobal('Event', dom.window.Event)
setGlobal('MouseEvent', dom.window.MouseEvent)
setGlobal('KeyboardEvent', dom.window.KeyboardEvent)
setGlobal('getComputedStyle', dom.window.getComputedStyle)
setGlobal('requestAnimationFrame', dom.window.requestAnimationFrame)
setGlobal('cancelAnimationFrame', dom.window.cancelAnimationFrame)

// Tells React it is running inside act(), which silences the environment
// warning and lets updates flush synchronously.
setGlobal('IS_REACT_ACT_ENVIRONMENT', true)

// jsdom does not implement scrolling; the app calls it on every route change.
dom.window.scrollTo = (() => {}) as unknown as typeof dom.window.scrollTo
setGlobal('scrollTo', dom.window.scrollTo)

// jsdom fires focus events that route React into its legacy IE input polyfill,
// which then throws on `attachEvent`. The app only focuses elements to move the
// caret, so a no-op is a faithful stand-in here.
dom.window.HTMLElement.prototype.focus = () => {}
dom.window.HTMLElement.prototype.blur = () => {}

export const doc = dom.window.document
export const win = dom.window

/** Fire a real bubbling click so React's synthetic handler runs. */
export function click(element: Element) {
  element.dispatchEvent(new win.MouseEvent('click', { bubbles: true, cancelable: true }))
}

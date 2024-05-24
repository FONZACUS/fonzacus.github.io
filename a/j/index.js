/* chatgpt strip down */
const cache = new Map();
async function fetchHTML(src) {
if (!cache.has(src)) {
cache.set(src, fetch(src).then(r => r.text()));
}
return cache.get(src);
}
customElements.define("html-include", class extends HTMLElement {
async connectedCallback() {
this.innerHTML = await fetchHTML(this.getAttribute("src"));
}
});

/* gemini strip down WORKS
const cache = new Map();
customElements.define("html-include", class extends HTMLElement {
async connectedCallback() {
const file = this.getAttribute("src");
if (!file) return;
if (!cache.has(file)) {
cache.set(file, fetch(file).then(res => res.text()));
}
this.innerHTML = await cache.get(file);
}
});
*/

/* works
const includeCache = new Map();
const INCLUDE_SELECTOR = "[data-include]";
async function fetchHTML(file) {
// Reuse an existing request or cached HTML for this URL.
if (includeCache.has(file)) {
return includeCache.get(file);
}
const request = fetch(file, {
cache: "default",
}).then(async (response) => {
if (!response.ok) {
throw new Error(`HTTP ${response.status}: ${file}`);
}
return response.text();
});
// Cache the promise so concurrent includes share one request.
includeCache.set(file, request);
try {
return await request;
} catch (error) {
// Allow retry after a failed request.
if (includeCache.get(file) === request) {
includeCache.delete(file);
}
throw error;
}
}
async function includeHTML(root = document) {
const elements = root.querySelectorAll(INCLUDE_SELECTOR);
await Promise.all(
Array.from(elements, async (el) => {
const file = el.getAttribute("data-include");
if (!file) return;
// Prevent repeated processing of this element.
el.removeAttribute("data-include");
try {
const html = await fetchHTML(file);
el.innerHTML = html;
} catch (error) {
console.error(`Error loading HTML fragment: ${file}`, error);
el.textContent = "Error loading component.";
}
})
);
}
includeHTML();
*/

/* works
async function includeHTML() {
// 1. Select all elements requesting an external HTML file
const elements = document.querySelectorAll("[data-include]");
// 2. Map elements to an array of asynchronous fetch promises
const promises = Array.from(elements).map(async (el) => {
const file = el.getAttribute("data-include");
if (!file) return;
try {
// Fetch the HTML file as string text
const response = await fetch(file);
if (response.ok) {
const htmlText = await response.text();
// Inject the text string directly into the container element
el.innerHTML = htmlText;
} else {
el.innerHTML = `Page not found (${response.status})`;
}
} catch (error) {
console.error(`Error loading HTML fragment structure from: ${file}`, error);
el.innerHTML = "Error loading component.";
}
// Clean up the attribute so it doesn't get re-processed if called again
el.removeAttribute("data-include");
});
// 3. Resolve all HTML files concurrently in parallel loops
await Promise.all(promises);
}
includeHTML()
*/

/* works
function include() {
document.querySelectorAll('*[data-include]')
.forEach(function(node) {
node.style.display = 'none'
fetch(node.attributes['data-include'].value)
.then(function(res) {
if (res.ok)
return res.text()
else
throw Error
})
.then(function(data) {
node.outerHTML = data
})
})
}
include()
*/
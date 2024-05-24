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
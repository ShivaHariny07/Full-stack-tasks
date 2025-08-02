DOM Insertion Methods:

JavaScript provides easy ways to insert new elements or text into the DOM without replacing the entire HTML. The `insertAdjacent*` methods are especially useful.

1. `insertAdjacentElement(position, element)`
- Inserts an element node at a specific position relative to another element.

Syntax:
targetElement.insertAdjacentElement('beforeend', newElement);


Positions:
- `'beforebegin'` --> before the element
- `'afterbegin'` --> inside, before first child
- `'beforeend'` --> inside, after last child
- `'afterend'` --> after the element

Example:

const div = document.querySelector('#box');
const newP = document.createElement('p');
newP.textContent = 'Hello!';
div.insertAdjacentElement('beforeend', newP);



2. `insertAdjacentHTML(position, htmlString)`
- Inserts raw HTML text.

Example:
div.insertAdjacentHTML('afterbegin', '<p>Inserted HTML!</p>');



3. `insertAdjacentText(position, text)`
- Inserts plain text.

**Example:**
div.insertAdjacentText('afterend', 'This is plain text.');



## 📏 Element Dimensions & Positioning

1. client vs offset Properties 
    - When working with elements on a webpage, you can use client and offset properties to get information about their size and position.
    - clientWidth gives you the width of the element's content area, including padding but excluding scrollbars, borders, and margins.
    - clientHeight is similar—it gives the height of the content area without scrollbars and borders.
    - offsetWidth includes the content width plus padding and borders (but not margins), so it tells you the full visual width of the element.
    - offsetHeight gives you the full height including padding and borders.
    - offsetTop measures how far the element is from the top of its closest positioned parent element (called the offsetParent).
    - clientTop returns the thickness of the top border of the element.

    These properties help you calculate layout dimensions and understand where elements are placed on the page.

Example:
const box = document.querySelector('#box');
console.log(box.clientWidth);  // inner width
console.log(box.offsetTop);   // distance from top


2. `getBoundingClientRect()`

Gives position and size relative to the viewport.

Example:
const rect = box.getBoundingClientRect();
console.log(rect.top);     // distance from top of viewport
console.log(rect.width);   // width of element


Scrolling Functions

1. Scroll Properties
    - When dealing with scrollable elements in JavaScript, there are a few important properties you can use to check how much has been scrolled or how much can be scrolled.
    - scrollTop tells you how many pixels the content of an element has been scrolled vertically. For example, if a user scrolls down 100 pixels, scrollTop will return 100.
    - scrollLeft works the same way but for horizontal scrolling. It tells you how many pixels the content has been scrolled from the left.
    - scrollHeight gives you the total height of the content inside the element, including the part that’s not currently visible because it’s outside the viewport. This is useful to determine the full scrollable length of an element.


Example:
console.log(box.scrollTop);


2. Scroll Methods

`scrollTo(x, y)`
Scrolls to exact coordinates.

window.scrollTo(0, 500);  // Scroll 500px down

`scrollIntoView()`
Scrolls the element into the viewport.

document.querySelector('#footer').scrollIntoView();




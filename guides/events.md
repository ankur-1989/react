# Event handling in React

* React lets you add event handlers in components
* event handlers are usually start with handle followed by the event.
* only pass the function inside the jsx dont call otherwise it will call immediately during rendering. 
* Events propagate from down to up in the tree. 
* All events propagate except onScroll.
* preventing default behaviour - some events such as form submit event will reload the page.
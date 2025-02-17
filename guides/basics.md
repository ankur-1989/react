# React Basics

* React follows component based architecture. You can create re-usable components.
* React component names start with capital letters. They are normal javascript fns.

* You start a react app by simply creating components and you can reuse them therefore, react focus on re-usability.

## Importing and exporting components

* You may need to divide your components to a separate file to use it at multiple places.
Two ways to export component - default and named export.

React Focuses on using JSX syntax for markups - more strict than HTML.
It lets you write JavaScript as well inside. 

## JSX rules:

1. single root element, you can use either div or fragment to wrap the elements under one parent element.
2. Why do we need to wrap them?
    - under the hood JSX is transformed into plain JS objects and we can not return two JS objects from the function without wrapping them under the array.
3. JSX asks for all the tags to be closed.
4. You need to camelCase most of the thigns - as it leads to variable names or keys in JS and can not be reserved words or dashses in between.
There is a JSX converter available to convert the HTML or SVG to JSX.
5. JSX allows you to organize logic and data through JS.
6. JSX elements do not hold any internal states and are not real dom nodes

## Communication between the components

1. React uses props to communicate between the components.
2. You can specify default value for a prop like function arguments.
3. You can forward the props to grand child with spread syntax 
4. nesting components using children prop.
5. value of props can change over time as it reflects the data over time not static. 
6. Props are immutable.

## Conditional rendering 

* There are three options - if else, conditional operator and &&

## Rendering lists

* use filter and map array methods
* provide unique keys to the list of items 
* dont generate the key during the rendering otherwise it will render the component slow may create bugs
* Dont use index as key as well.

## Pure components

Two different trees - render tree and module dependency tree.
Bundlers uses dependency tree to determine what dependency need to be included.
rendering must always be a pure calculation.

For the initial render, react uses appendChild() DOM api to add it to the dom. For, re-render minimal operations to match and apply the changes. 

Rendering -> React updates the dom -> browser repaint the screen (Browser rendering)



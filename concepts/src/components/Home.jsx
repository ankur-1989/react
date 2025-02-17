import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

// named export
/**
 * 
 *  JSX asks for all the tags to be closed.
 *  You need to camelCase most of the thigns - as it leads to variable names or keys in JS and can not be reserved words or dashses in between.
 * There is a JSX converter available to convert the HTML or SVG to JSX.
 * JSX allows you to organize logic and data through JS.
 * JSX elements do not hold any internal states and are not real dom nodes
 */
export function Home() {
    // mutliple elements should be wrapped in a single parent element
    // under the hood JSX is transformed into plain JS objects and we can not return two JS objects from the function without wrapping them under the array.
    return (
         <div>
                <a href="https://vite.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
              </div>
    )
}
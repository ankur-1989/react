export default function Event() {
  
    /**
     * * Events propagate from down to up in the tree. 
     * All events propagate except onScroll.
     * preventing default behaviour - some events such as form submit event will reload the page.
     */
    const handleButtonClick = () => {   
        alert('Button is clicked');
    }
    const handleClick = (message) => {
        alert(message);
    }
    return (
        <div>
            <button onClick={handleButtonClick}>Click me</button>
            <button onClick={() => handleClick('I am clicked')}>Show Message</button>
        </div>
    )
}
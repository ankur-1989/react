
import PropTypes from 'prop-types';


// This is a Pure function as it will always return the same output for the same input
// We should always try to make our components pure to avoid side effects and make it easier to test
// We can use Pure component to avoid unnecessary re-renders and improve performance

export default function Pure({name}) {

    return (
        <div>
            <h1>{`Hello! ${name}`}</h1>
        </div>
    );
}

Pure.propTypes = {
    name: PropTypes.string.isRequired,
};   

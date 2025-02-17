import PropTypes from 'prop-types';


// props are immutable
export default function Prop({name, age=32}) {

    return (
        <div>
            <p>{name}</p>
            <p>{age > 18 ? 'You are eligible to vote' : 'You must be 18 plus'}</p>
        </div>)
}

Prop.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
};   


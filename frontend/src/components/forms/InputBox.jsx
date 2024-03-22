import PropTypes from 'prop-types';

function InputBox(props) {
    return (
      <input
        id={props.id}
        name={props.name}
        type={props.type}
        className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
        placeholder={props.placeholder}
      />
    );
}

InputBox.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired, // Added prop validation for 'name'
    type: PropTypes.string.isRequired, // Added prop validation for 'type'
    placeholder: PropTypes.string.isRequired,
};

export default InputBox
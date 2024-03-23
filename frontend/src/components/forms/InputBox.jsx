import PropTypes from "prop-types";

/**
 * Renders an input box component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.id - The ID of the input element.
 * @param {string} props.name - The name of the input element.
 * @param {string} props.type - The type of the input element.
 * @param {string} props.value - The value of the input element.
 * @param {function} props.onChange - The event handler for the input element's change event.
 * @param {string} props.placeholder - The placeholder text for the input element.
 * @returns {JSX.Element} The rendered input box component.
 */
function InputBox(props) {
  return (
    <input
      id={props.id}
      name={props.name}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      className="focus:shadow-outline block w-full appearance-none rounded border border-gray-300 bg-gray-200 px-4 py-2 text-gray-700 focus:outline-none"
      placeholder={props.placeholder}
    />
  );
}

// Added prop validation
InputBox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default InputBox;

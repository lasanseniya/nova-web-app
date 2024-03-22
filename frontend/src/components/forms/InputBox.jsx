
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
export default InputBox
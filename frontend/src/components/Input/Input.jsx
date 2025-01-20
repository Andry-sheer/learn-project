
import PropTypes from "prop-types";

const Input = ({
  className = '',
  name,
  id = '',
  type = 'text',
  onChange = null,
  handleChange = null,
  placeholder = '',
  icon = null,
  value = '',
  autoComplete = 'off',
  required = false,
}) => {

  const handleOnChange = (e)=> {
    if (onChange) {
      onChange(e);
    }

    else if (handleChange) {
      handleChange(e.target.value);
    } 
  }

  return (
    <input
      className={className}
      name={name}
      id={id}
      type={type}
      onChange={handleOnChange}
      value={value}
      placeholder={placeholder}
      icon={icon}
      autoComplete={autoComplete}
      required={required}
    />
  );
}

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  handleChange: PropTypes.func,
  required: PropTypes.bool,
  autoComplete: PropTypes.string,
  icon: PropTypes.node,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Input;
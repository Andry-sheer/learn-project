
import PropTypes from "prop-types";

const MyButton = ({ 
    className = '',
    name,
    type = 'button', 
    icon = null, 
    textButton = '', 
    onClick = null, 
    style = {}, 
    rightIcon = null, 
    styleRightIcon = ''
  }) => (
  <button 
    style={style} 
    type={type}
    name={name}
    className={className} 
    onClick={onClick}>
      {icon}
      {textButton}
      {rightIcon && <span className={styleRightIcon}>{rightIcon}</span>}
    </button> 
  );

  MyButton.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit', 'reset']), 
    icon: PropTypes.node, 
    textButton: PropTypes.string, 
    onClick: PropTypes.func, 
    style: PropTypes.object, 
    rightIcon: PropTypes.node, 
    styleRightIcon: PropTypes.string,
  }

export default MyButton;

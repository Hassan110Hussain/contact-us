import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = (props) => {
  const { isOutline, icon, text, ...rest } = props;
  return (
    <button 
      {...rest} 
      className={`${isOutline ? styles.outline_btn : styles.primary_btn} ${props.className || ''}`}
    >
      {icon}
      {text}
    </button>
  );
};

Button.propTypes = {
  isOutline: PropTypes.bool,
  icon: PropTypes.node,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string
};

Button.defaultProps = {
  isOutline: false,
  icon: null,
  className: '',
  type: 'button'
};

export default Button;
import PropTypes from "prop-types";
import "./box.css";

/**
 * Primary UI component for user interaction
 */
export const Box = ({ backgroundColor, ...props }) => {
  return (
    <div
      className="test-box"
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      <p>Testing</p>
    </div>
  );
};

Box.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
};

Box.defaultProps = {
  backgroundColor: null,
};

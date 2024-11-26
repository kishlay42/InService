import { FaArrowUp } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ArrowUp = ({ text }) => {
  return (
    <div className="group  text-md pb-20 cursor-pointer">
      <span className="flex flex-row gap-1 group-hover:text-blue-500 group-hover:underline">
        {text}
        <FaArrowUp className="mt-1 origin-center transform rotate-45 transition-transform duration-500 ease-out group-hover:rotate-90" />
      </span>
    </div>
  );
};
ArrowUp.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ArrowUp;
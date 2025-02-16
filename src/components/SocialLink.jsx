/* eslint-disable react/prop-types */
const SocialLink = ({ itemClass, href, icon }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={itemClass}>
      <i className={icon}></i>
    </a>
  );
};

export default SocialLink;

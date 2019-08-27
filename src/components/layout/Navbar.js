import React from 'react';
// import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i class={icon} /> {title}
      </h1>
    </nav>
  );
};
Navbar.defaultProps = {
  title: 'Github Contacts',
  icon: 'fab fa-github-alt',
};

// Navbar.PropTypes = {
//   title: PropTypes.string.isRequired,
//   icon: PropTypes.string.isRequired,
// };
export default Navbar;

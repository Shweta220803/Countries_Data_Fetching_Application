import React from 'react';
import footerData from '../../api/footerApi.json';
import { MdPlace } from 'react-icons/md';
import { IoCallSharp } from 'react-icons/io5';
import { TbMailPlus } from 'react-icons/tb';

const Footer = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <footer className='footer-section'>
      <div className='container grid grid-three-cols'>
        {footerData.map((currentData, index) => {
          const { icon, title, details } = currentData;

          return (
            <div className='footer-contact' key={index}>
              <div className='icon'>{footerIcon[icon]}</div>
              <div className='footer-contact-text'>
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>
      <hr />
      <div className='copyright-area'>
        <p className='copyright-text'>&copy; {new Date().getFullYear()} WorldAtlas. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

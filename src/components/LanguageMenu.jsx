import { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';

const LanguageMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeLanguage, setActiveLanguage] = useState('en');
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (language) => {
    setActiveLanguage(language);
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          textTransform: 'none',
          padding: 0,
          color: 'white',
          fontWeight: 'normal',
        }}>
        {activeLanguage === 'ru' ? 'Русский 🇷🇺' : 'English 🇺🇸'}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        <MenuItem onClick={() => handleClose('ru')}>Русский 🇷🇺</MenuItem>
        <MenuItem onClick={() => handleClose('en')}>English 🇺🇸</MenuItem>
      </Menu>
    </div>
  );
};

export default LanguageMenu;

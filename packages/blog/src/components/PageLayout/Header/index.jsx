import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Layout } from 'antd';
import 'font-awesome/less/font-awesome.less';
import style from './header.module.less';
import '../../../styles/global.less';
import { useWindowSize } from '../../../utils/hooks';

export default () => {
  const [menu, setMenu] = useState(false);

  const [width] = useWindowSize();
  const toggleMenu = () => {
    if (width !== 0 && width <= 768) {
      if (menu) {
        setMenu(false);
      } else {
        setMenu(true);
      }
    }
  };
  return (
    <>
      <div className={style.circleMenu} role="button" tabIndex="0" onKeyDown={toggleMenu} onClick={toggleMenu}>
        <div className={`${style.hamburger} ${menu ? style.menuIcon : null}`}>
          <div className={style.line} />
          <div className={style.line} />
          <div className={style.hamburgerText}>MENU</div>
        </div>
      </div>
      <Layout className={` ${menu ? null : style.hidden} ${menu ? style.openMenu : null}`}>
        <div className={style.backgroundDiv}>
          <div className={style.nav}>
            <div className={style.navItem}>
              <Link to="/" onClick={toggleMenu} className={style.topAnchor}>
                GGJungle BLOG
              </Link>
            </div>
            <div className={style.navItem} style={{marginLeft: 'auto'}}>
              <Link to="https://ggjungle.vn" onClick={toggleMenu} activeClassName={style.anchorActive}>
                About Us
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

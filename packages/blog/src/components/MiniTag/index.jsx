import React from 'react';
import { Link } from 'gatsby';
import Config from '../../../config';
import Utils from '../../utils/pageUtils';
import style from './minitag.module.less';

const MiniTag = (props) => {
  const {
    name, color,
  } = props;
  const tagPage = Config.pages.tag;
  return (
    <Link className={style.tagCard} to={Utils.resolvePageUrl(tagPage, name)}>
        <div className={style.pd20px, style.mini} style={{ border: `1px solid ${color}` }}>
          <div className="textCenter">
            <p style={{ color: `${color}` }}>
              <strong>#{name}</strong>
            </p>
          </div>
        </div>
    </Link>
  );
};

export default MiniTag;

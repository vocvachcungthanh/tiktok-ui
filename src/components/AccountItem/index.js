import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';
import Images from '~/components/Images';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ dataItem }) {
    return (
        <Link to={`/@${dataItem.nickname}`} className={cx('wrapper')}>
            <Images className={cx('avatar')} src={dataItem.avatar} alt={dataItem.full_name} />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{dataItem.full_name}</span>
                    {dataItem.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </p>
                <span className={cx('username')}>{dataItem.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;

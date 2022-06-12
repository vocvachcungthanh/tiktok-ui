import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './AccountItem.module.scss';
import Images from '~/components/Images';

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

AccountItem.propTypes = {
    dataItem: PropTypes.object.isRequired,
};

export default AccountItem;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />

            <button type="button" className={cx('more-btn')}>
                See All
            </button>
        </div>
    );
}

SuggestedAccounts.protoType = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;

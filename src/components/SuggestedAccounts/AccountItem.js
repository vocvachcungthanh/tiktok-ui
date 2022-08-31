import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import AccountItemTippy from '@tippyjs/react/headless';

import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <AccountItemTippy offset={[-20, 0]} placement="bottom" interactive delay={[800, 0]} render={renderPreview}>
            <div className={cx('account-item')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1662134400&x-signature=cbJ46L086wxh%2FhXHbXy%2Brf%2FpM%2Fs%3D"
                    alt=""
                />
                <div className={cx('item-info')}>
                    <p className={cx('nick-name')}>
                        <strong>Quocnguyenphu</strong>
                        <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                    </p>
                    <p className={cx('name')}>Theanh28 Entertainment</p>
                </div>
            </div>
        </AccountItemTippy>
    );
}

// AccountItem.propTypes = {};

export default AccountItem;

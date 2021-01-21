import React, { ReactElement } from 'react';

import AuthRedirect from '../../components/Common/Auth/AuthRedirect';
import Meta from '../../components/Common/Meta';
import serverRedirect from '../../components/HOC/ServerRedirect';
import { wrapper } from '../../redux/store';

const Settings = (): ReactElement => {
    return (
        <>
            <AuthRedirect />
            <Meta
                title="Blog app | Demo account"
                description="Do not want to register but interesting? You are lucky, I signed up for you"
                keywords="login auth blog"
            />
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(serverRedirect(null, null));

export default Settings;

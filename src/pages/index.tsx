import React from 'react';
import { AppBar, Toolbar, Typography, Link, useTheme, Button } from '@material-ui/core';
import { ROUTES, } from 'config/Nav';

const NavLink = (props: any) => {
    const { to, name } = props;
    const theme = useTheme();

    return (
        <Link key={to} href={to} style={{ color: 'white', padding: theme.spacing(2) }}>
            <Typography>{name}</Typography>
        </Link>
    );
};

const Index = (props: any) => {
    return (
        <div>
            <AppBar position={'static'} color={'secondary'}>
                <Toolbar
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Link href={ROUTES.HOME.to}>
                        <Typography variant={'h5'}>zenith</Typography>
                    </Link>
                    <nav
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                        }}
                    >
                    </nav>
                </Toolbar>
            </AppBar>
            <h3>hello</h3>
        </div>
    );
};

export default Index;

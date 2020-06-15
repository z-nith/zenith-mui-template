import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import App, { AppProps } from 'next/app';
import Router from 'next/router';
import { SnackbarProvider } from 'notistack';
import { initGA, logPageView } from 'lib/google/analytics';
import theme from 'theme';

export default class CustomApp extends App {
    constructor(props: AppProps) {
        super(props);
    }

    componentDidMount() {
        if (!window.GA_ANALYTICS && process.env.NODE_ENV === 'production') {
            initGA();
            window.GA_ANALYTICS = true;
            logPageView(window.location.pathname);
            Router.events.on('routeChangeComplete', logPageView);
        }
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <ThemeProvider theme={theme}>
                    <SnackbarProvider>
                        <CssBaseline />
                        {/* The rest of your application */}
                        <Component {...pageProps} />
                    </SnackbarProvider>
                </ThemeProvider>
            </>
        );
    }
}

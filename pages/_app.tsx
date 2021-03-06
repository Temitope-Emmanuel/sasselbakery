import React from "react"
import Head from "next/head"
import {AppProps} from "next/app"
import {ThemeProvider} from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "../utils/theme"
import AOS from "aos"
import "aos/dist/aos.css"


export default function MyApp(props:AppProps){
    const {Component,pageProps} = props
    
    
    React.useEffect(() => {
        const jssStyles = document.querySelector("#jss-server-side")
        if(jssStyles){
            jssStyles.parentElement!.removeChild(jssStyles)
        }
        AOS.init({
            easing:"ease-in",
            duration:1200
          })        
    },[])

    return(
        <React.Fragment>
            <Head>
                <title>My page</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {/* <Navbar/> */}
                <Component {...pageProps} />
            </ThemeProvider>
        </React.Fragment>
    )
}
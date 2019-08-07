import withRedux from 'next-redux-wrapper'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'
import { withRouter } from 'next/router'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import Layout from 'components/Layout'
import createStore from 'store/createStore'
import theme from 'theme'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  html {
    height: 100%;
  }
  body {
      height: 100%;
      margin: 0;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
 }
`;

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}
    }
  }

  render () {
    const { Component, pageProps, store, router } = this.props;
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <GlobalStyle />
            <Layout>
              <Component router={router} {...pageProps} />
            </Layout>
          </Provider>
        </ThemeProvider>
      </Container>
    )
  }
}

export default withRedux(createStore)(
  withRouter(MyApp)
)

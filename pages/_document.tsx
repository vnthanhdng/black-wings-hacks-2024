import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Here you can add global scripts, meta tags, link tags, etc. */}
        </Head>
        <body>
          {/* This is where the main application will be rendered */}
          <Main />
          {/* NextScript is where Next.js will inject its scripts */}
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

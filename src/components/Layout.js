import React, { PureComponent } from 'react'
import Link from 'next/link'

export default class Layout extends PureComponent {
  render () {
    return (
      <div className='layout'>
        <header>
          <menu>
            <Link href='/about'>
              <a>About</a>
            </Link>
            <Link href='/'>
              <a>Redux demo</a>
            </Link>
          </menu>
          { /* language=SCSS */ }
          <style jsx>{`
            body {
              //background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
            }
          `}</style>
        </header>
        { this.props.children }
      </div>
    )
  }
}

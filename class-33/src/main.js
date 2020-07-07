import React from 'react';

import SiteEditor from './components/site.js';
import ThemeEditor from './components/theme.js';
import ContentClass from './components/content-class';
import ContentFunction from './components/content-function';
import { ThemeContext } from './context/theme.js'

// we can do this in classes and then toggle the classes
const styles = {
  dark: {
    background: '#111',
    color: 'ivory'
  },
  light: {
    background: '#f5f5f5',
    color: '#525252'
  }
}

class Main extends React.Component {

  static contextType = ThemeContext;
  render() {
    return (
      <main style={styles[this.context.mode]}>
        <section>
            <ContentClass />
            <ContentFunction />
            <aside>
              <SiteEditor/>
              <ThemeEditor/>
            </aside>
        </section>
      </main>
    )
  }
}

export default Main;
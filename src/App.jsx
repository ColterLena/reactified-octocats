import React, { Component } from 'react'
import { Octocat } from './components/Octocat'
import { NavBar } from './components/NavBar'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <NavBar
            logoLink="https://octodex.github.com/"
            logoPhotoLink="https://image.flaticon.com/icons/svg/25/25231.svg"
            altText="The Github Logo"
            octodexLink="https://octodex.github.com/"
            homeLink="https://octodex.github.com/"
            FAQLink="https://octodex.github.com/faq/"
            githubTwitterLink="https://twitter.com/githubdesign"
            mainGithubLink="https://github.com/"
          />
        </header>
        <main>
          <section>
            <Octocat
              mainLink="https://octodex.github.com//octoqueer/"
              imageLink="https://octodex.github.com/images/Octoqueer.png"
              altText="Octoqueer"
            />
            <ul>
              <li className="octocat-name-list-item">#150: Octoqueer</li>
              <li>
                <a href="https://github.com/cameronfoxly">
                  <img src="https://github.com/cameronfoxly.png" />
                </a>
              </li>
              <li>
                <a href="https://github.com/johncreek">
                  <img src="https://github.com/johncreek.png" />
                </a>
              </li>
              <li>
                <a href="https://github.com/tonyjaramillo">
                  <img src="https://github.com/tonyjaramillo.png" />
                </a>
              </li>
            </ul>
          </section>

          <section>
            <Octocat
              mainLink="https://octodex.github.com//terracottocat/"
              imageLink="https://octodex.github.com//images/Terracottocat_Single.png"
              altText="Terracottocat"
            />
            <ul>
              <li className="octocat-name-list-item">#149: Terracottocat</li>
              <li>
                <a href="https://github.com/chubbmo">
                  <img src="https://github.com/chubbmo.png" />
                </a>
              </li>
            </ul>
          </section>

          <section>
            <Octocat
              mainLink="https://octodex.github.com//octogatos/"
              imageLink="https://octodex.github.com//images/Octogatos.png"
              altText="Octogatos"
            />
            <ul>
              <li className="octocat-name-list-item">#148: Octogatos</li>
              <li>
                <a href="https://github.com/cameronfoxly">
                  <img src="https://github.com/cameronfoxly.png" />
                </a>
              </li>
            </ul>
          </section>

          <section>
            <Octocat
              mainLink="https://octodex.github.com//adacats/"
              imageLink="https://octodex.github.com//images/Adacats.png"
              altText="Adacats"
            />
            <ul>
              <li className="octocat-name-list-item">#147: Adacats</li>
              <li>
                <a href="https://github.com/cameronfoxly">
                  <img src="https://github.com/cameronfoxly.png" />
                </a>
              </li>
            </ul>
          </section>

          <section>
            <Octocat
              mainLink="https://octodex.github.com//fintechtocat/"
              imageLink="https://octodex.github.com//images/Fintechtocat.png"
              altText="Fintechtocat"
            />
            <ul>
              <li className="octocat-name-list-item">#146: Fintechtocat</li>
              <li>
                <a href="https://github.com/ceciliorz">
                  <img src="https://github.com/ceciliorz.png" />
                </a>
              </li>
            </ul>
          </section>

          <section>
            <Octocat
              mainLink="https://octodex.github.com//brennatocat/"
              imageLink="https://octodex.github.com//images/Brennatocat.png"
              altText="Brennatocat"
            />
            <ul>
              <li className="octocat-name-list-item">#145: Brennatocat</li>
              <li>
                <a href="https://github.com/johncreek">
                  <img src="https://github.com/johncreek.png" />
                </a>
              </li>
            </ul>
          </section>

          <section>
            <Octocat
              mainLink="https://octodex.github.com//filmtocats/"
              imageLink="https://octodex.github.com//images/filmtocats.png"
              altText="Filmtocats"
            />
            <ul>
              <li className="octocat-name-list-item">#144: Filmtocats</li>
              <li>
                <a href="https://github.com/heyhayhay">
                  <img src="https://github.com/heyhayhay.png" />
                </a>
              </li>
            </ul>
          </section>

          <section>
            <Octocat
              mainLink="https://octodex.github.com//sentrytocat/"
              imageLink="https://octodex.github.com//images/Sentrytocat_octodex.jpg"
              altText="Sentrytocat"
            />
            <ul>
              <li className="octocat-name-list-item">#143: Sentrytocat</li>
              <li>
                <a href="https://github.com/cameronmcefee">
                  <img src="https://github.com/cameronmcefee.png" />
                </a>
              </li>
            </ul>
          </section>

          <section>
            <Octocat
              mainLink="https://octodex.github.com//umbrellatocat/"
              imageLink="https://octodex.github.com//images/puddle_jumper_octodex.jpg"
              altText="Umbrellatocat"
            />
            <ul>
              <li className="octocat-name-list-item">#142: Umbrellatocat</li>
              <li>
                <a href="https://github.com/rubyjazzy">
                  <img src="https://github.com/rubyjazzy.png" />
                </a>
              </li>
            </ul>
          </section>

          <section>
            <Octocat
              mainLink="https://octodex.github.com//boxertocat/"
              imageLink="https://octodex.github.com//images/boxertocat_octodex.jpg"
              altText="Boxertocat"
            />
            <ul>
              <li className="octocat-name-list-item">#141: Boxertocat</li>
              <li>
                <a href="https://github.com/rubyjazzy">
                  <img src="https://github.com/rubyjazzy.png" />
                </a>
              </li>
            </ul>
          </section>

          <section>
            <Octocat
              mainLink="https://octodex.github.com//suftocat/"
              imageLink="https://octodex.github.com//images/surftocat.png"
              altText="Surftocat"
            />
            <ul>
              <li className="octocat-name-list-item">#140: Surftocat</li>
              <li>
                <a href="https://github.com/jeejkang">
                  <img src="https://github.com/jeejkang.png" />
                </a>
              </li>
            </ul>
          </section>

          <section>
            <Octocat
              mainLink="https://octodex.github.com//hulatocat/"
              imageLink="https://octodex.github.com//images/hula_loop_octodex03.gif"
              altText="Hulatocat"
            />
            <ul>
              <li className="octocat-name-list-item">#139: Hulatocat</li>
              <li>
                <a href="https://github.com/heyhayhay">
                  <img src="https://github.com/heyhayhay.png" />
                </a>
              </li>
            </ul>
          </section>

          <section>
            <Octocat
              mainLink="https://octodex.github.com//scubatocat/"
              imageLink="https://octodex.github.com//images/scubatocat.png"
              altText="Scubatocat"
            />
            <ul>
              <li className="octocat-name-list-item">#138: Scubatocat</li>
              <li>
                <a href="https://github.com/cameronfoxly">
                  <img src="https://github.com/cameronfoxly.png" />
                </a>
              </li>
            </ul>
          </section>

          <section>
            <Octocat
              mainLink="https://octodex.github.com//vinyltocat/"
              imageLink="https://octodex.github.com//images/vinyltocat.png"
              altText="Vinyltocat"
            />
            <ul>
              <li className="octocat-name-list-item">#137: Vinyltocat</li>
              <li>
                <a href="https://github.com/suziejurado">
                  <img src="https://github.com/suziejurado.png" />
                </a>
              </li>
              <li>
                <a href="https://github.com/johncreek">
                  <img src="https://github.com/johncreek.png" />
                </a>
              </li>
            </ul>
          </section>

          <section>
            <Octocat
              mainLink="https://octodex.github.com//tentocat/"
              imageLink="https://octodex.github.com//images/tentocats.jpg"
              altText="Tentocats"
            />
            <ul>
              <li className="octocat-name-list-item">#136: Tentocats</li>
              <li>
                <a href="https://github.com/heyhayhay">
                  <img src="https://github.com/heyhayhay.png" />
                </a>
              </li>
              <li>
                <a href="https://github.com/johncreek">
                  <img src="https://github.com/johncreek.png" />
                </a>
              </li>
              <li>
                <a href="https://github.com/cameronfoxly">
                  <img src="https://github.com/cameronfoxly.png" />
                </a>
              </li>
            </ul>
          </section>
        </main>
        <footer>
          <p>© 2013 – 2020 GitHub, Inc. All rights reserved.</p>
        </footer>
      </div>
    )
  }
}

export default App

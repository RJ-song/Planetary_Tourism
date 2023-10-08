import '../style/solar-system.css'
import { useNavigate } from 'react-router-dom'

function SolarSystem() {
  const navigate = useNavigate();

  const goTo = (e, path) => {
    navigate(path);
    e.preventDefault();
  }

  return (
    <div id="universe_container" class="opening view-3D zoom-large">
      <div class="navbar">
        <h1>
          <span>by <a href="https://twitter.com/JulianGarnier" target="_blank">@JulianGarnier</a></span>
        </h1>
      </div>
      <div id="data">
        <a class="sun" title="sun" href="#sunspeed" onClick={(e) => { goTo(e, '/Sun') }}>Sun</a>
        <a class="mercury" title="mercury" href="#mercuryspeed" onClick={(e) => { goTo(e, '/Mercury') }}>Mercury</a>
        <a class="venus" title="venus" href="#venusspeed" onClick={(e) => { goTo(e, '/Venus') }}>Venus</a>
        <a class="earth" title="earth" href="#earthspeed" onClick={(e) => { goTo(e, '/Earth') }}>Earth</a>
        <a class="mars" title="mars" href="#marsspeed" onClick={(e) => { goTo(e, '/Mars') }}>Mars</a>
        <a class="jupiter" title="jupiter" href="#jupiterspeed" onClick={(e) => { goTo(e, '/Jupiter') }}>Jupiter</a>
        <a class="saturn" title="saturn" href="#saturnspeed" onClick={(e) => { goTo(e, '/Saturn') }}>Saturn</a>
        <a class="uranus" title="uranus" href="#uranusspeed" onClick={(e) => { goTo(e, '/Uranus') }}>Uranus</a>
        <a class="neptune" title="neptune" href="#neptunespeed" onClick={(e) => { goTo(e, '/Uranus') }}>Neptune</a>
      </div>
      <div id="universe" class="scale-stretched">
        <div id="galaxy">
          <div id="solar-system" class="earth">
            <div id="mercury" class="orbit">
              <div class="pos">
                <div class="planet">
                  <dl class="infos">
                    <dt>Mercury</dt>
                    <dd><span></span></dd>
                  </dl>
                </div>
              </div>
            </div>
            <div id="venus" class="orbit">
              <div class="pos">
                <div class="planet">
                  <dl class="infos">
                    <dt>Venus</dt>
                    <dd><span></span></dd>
                  </dl>
                </div>
              </div>
            </div>
            <div id="earth" class="orbit">
              <div class="pos">
                <div class="orbit">
                  <div class="pos">
                    <div class="moon"></div>
                  </div>
                </div>
                <div class="planet">
                  <dl class="infos">
                    <dt>Earth</dt>
                    <dd><span></span></dd>
                  </dl>
                </div>
              </div>
            </div>
            <div id="mars" class="orbit">
              <div class="pos">
                <div class="planet">
                  <dl class="infos">
                    <dt>Mars</dt>
                    <dd><span></span></dd>
                  </dl>
                </div>
              </div>
            </div>
            <div id="jupiter" class="orbit">
              <div class="pos">
                <div class="planet">
                  <dl class="infos">
                    <dt>Jupiter</dt>
                    <dd><span></span></dd>
                  </dl>
                </div>
              </div>
            </div>
            <div id="saturn" class="orbit">
              <div class="pos">
                <div class="planet">
                  <div class="ring"></div>
                  <dl class="infos">
                    <dt>Saturn</dt>
                    <dd><span></span></dd>
                  </dl>
                </div>
              </div>
            </div>
            <div id="uranus" class="orbit">
              <div class="pos">
                <div class="planet">
                  <dl class="infos">
                    <dt>Uranus</dt>
                    <dd><span></span></dd>
                  </dl>
                </div>
              </div>
            </div>
            <div id="neptune" class="orbit">
              <div class="pos">
                <div class="planet">
                  <dl class="infos">
                    <dt>Neptune</dt>
                    <dd><span></span></dd>
                  </dl>
                </div>
              </div>
            </div>
            <div id="sun">
              <dl class="infos">
                <dt>Sun</dt>
                <dd><span></span></dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SolarSystem;
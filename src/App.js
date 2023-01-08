import Peter from './portrait.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="card-list">

        <article className="card">
          <div class="row">
            <div class="column left">
              <img
                className="board_art"
                src={Peter} // Route of the image file
                alt="Peter"
              />
            </div>
            <div class="column right">
              <h1>Hi, I'm Peter!</h1> 
              <p>Venture Associate</p>
              <p>Yale '24 🐶</p>
              <h4 class="icon"><a class="link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/zpli/">in</a></h4>
              <h4 class="icon"><a class="link" target="_blank" rel="noreferrer" href="mailto:peter.li@yale.edu">✉️</a></h4>
            </div>
          </div>          
        </article>

        <article className="card">
          <h2>Pitch Deck Design</h2>
          <div class="row">
            <div class="column left">
              <h3>$5/Slide</h3>
            </div>
            <div class="column right">
              <h3>
                <a class="consultation" target="_blank" rel="noreferrer" href="https://calendly.com/peter-li-2/20min">
                  Free Consultation
                </a>
              </h3>
            </div>
          </div>    
        </article>

        <article className="card">
          <h2>Web Development</h2>
          <div class="row">
            <div class="column left">
              <h3>$1000/Site</h3>
            </div>
            <div class="column right">
              <h3>
                <a class="consultation" target="_blank" rel="noreferrer" href="https://calendly.com/peter-li-2/20min">
                  Free Consultation
                </a>
              </h3>
            </div>
          </div>  
        </article>

      </section>
    </div>
    
  );
}

export default App;

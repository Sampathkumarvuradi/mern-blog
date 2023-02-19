import "./App.css";

function App() {
  return (
    <main>
      <header>
        <a href='' className='logo'>
          MyBlog
        </a>
        <nav>
          <a href=''>Login</a>
          <a href=''>Register</a>
        </nav>
      </header>
      <div className='post'>
        <div className='image'>
          <img
            src='https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1280x720.png'
            alt=''
          />
        </div>
        <div className='texts'>
          <h2>
            Hot Box Your Uber? Zillow Rate Your Neighbor? A Designer Reimagines
            Apps
          </h2>
          <p className='info'>
            <a className='author'>Sampath Kumar</a>
            <time>02:00 PM 19-02-2023</time>
          </p>
          <p className='summery'>
            Back in 2015, the music streaming company launched Wrapped, a
            year-end recap for each user that offered insights into their music
            listening habits and the year’s most popular artists. Other brands
            began borrowing the idea, a shameless if entertaining ploy to
            ratchet up engagement.
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;

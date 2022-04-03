import './App.css';
import { useState } from 'react'
import AppHeader from './components/appheader';
import SearchApp from './components/searchapp';
import Vocabitem from './components/vocabitem';
import vocabList from './data/vocabulary';

function App() {
  const [searchText, setSearchText] = useState('')

  const vocabElement = vocabList.filter((vocab) => {
    return vocab.word.toLowerCase().includes(searchText.toLowerCase())
  }).map((vocab, index) => {
    return <Vocabitem key={index} vocab={vocab} />
  })

  return (
    <div className="App">
      <AppHeader />
      <section>
        <div className='container'>
          <SearchApp value={searchText} onValueChange={setSearchText} />
          <div className='table'>
            <table>
              <thead>
                  <tr>
                      <th>words</th>
                      <th>meaning</th>
                  </tr>
              </thead>
              <tbody>
                  {vocabElement}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

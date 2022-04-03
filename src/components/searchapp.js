import './searchapp.css'

function SearchApp(props) {
    const { value, onValueChange } = props
    return(
        <div className="search-app">
            <input 
           className='app-search-input'
           type="text"
           placeholder="search word..."
           value={value}
           onChange={(event) => {onValueChange(event.target.value)}}/>
        </div>
    )
}

export default SearchApp
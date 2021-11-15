import { useState } from "react"
import { newsAPI } from "../../api"

function SearchNews(props) {
    const [search, setSearch] = useState('')
    const [searchData, setSearchData] = useState([])
    const [language, setLanguage] = useState('en')

    function onSearchChange(e) {
        setSearch(e.target.value) 
    }

    function onFinish(e) {
        if(e.key === 'Enter'){
            //fetch data
            console.log('fetch', search, language)
            newsAPI.get(`everything?q=${search}&language=${language}&apiKey=9a60aff57a4040f190b175c5c0a9d25f`)
            .then((result)=>{
                setSearchData(result.data.articles)
            })
            
        }
    }

    function onLanguageSelect(e) {
        console.log(e.target.value)
        setLanguage(e.target.value)
    }

    return <div>
        <label>Search:</label>
        <input value={search} onChange={onSearchChange} onKeyPress={onFinish}/>
        <br/>
        <label>Select Language:</label>
        <select defaultValue={language} onChange={onLanguageSelect}>
            <option value='en'>English</option>
            <option value='ar'>Arabic</option>
            <option value='de'>German</option>
            <option value='es'>Spanish</option>
            <option value='fr'>French</option>
            <option value='it'>Italy</option>
            <option value='ru'>Russia</option>
            <option value='zh'>Lets see</option>
        </select>
        <br/>
        <div>
            {searchData.map((article)=>{
                return <div>
                    <p>{article.title}</p>
                    <p>{article.author}</p>
                    <br></br>
                </div>
            })}
        </div>
    </div>
    
}
export default SearchNews
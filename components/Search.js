import React,{useEffect,useState} from 'react';
import searchBank from './list';
import Link from 'next/link'

function Search(){
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults,setSearchResults] = useState([]);
    const handleChange = event => {
        setSearchTerm(event.target.value);
      };
    useEffect(() => {
        const results = searchBank.filter(item =>
          item.toLowerCase().includes(searchTerm)
        );
        const short = results.length > 5 ? results.slice(0,5) : results
        setSearchResults(short);
      }, [searchTerm]);
    
      return (
        <div className="App">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
          <ul>
             {searchResults.map(item => (
                 
              <li><Link href={`/stock?ticker=${item.split('-')[0]}`}>{item}</Link></li>
            ))}
          </ul>
        </div>
      );
}
export default Search;
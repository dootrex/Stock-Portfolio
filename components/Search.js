import React,{useEffect,useState} from 'react';
import searchBank from './list';
import {useRouter} from 'next/router';
import styles from './Search.module.css';


function Search(){
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults,setSearchResults] = useState([]);
    const handleChange = event => {
        setSearchTerm(event.target.value);
      };
      const handleSubmit = event => {
          event.preventDefault();
          const href=`/stock?ticker=${searchTerm.split('-')[0]}&name=${searchTerm.split('-')[1]}`;
          router.push(href);
      }
    useEffect(() => {
        const results = searchBank.filter(item =>
          item.toLowerCase().includes(searchTerm)
        );
        const short = results.length > 5 ? results.slice(0,5) : results;
        setSearchResults(short);
      }, [searchTerm]);
   
    
      return (
          
         
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <form onSubmit={handleSubmit}>
                    <input className={styles.input}
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleChange}
                    list='tickers'
                     />  
                     <datalist id="tickers">
                        {searchResults.map(item => (
                            <option  key={item} value={item}>{item}</option>
                            ))}
                        </datalist> 
                        
                    <button className={styles.button}>Submit!!!</button>
                </form>
          </div>
        </div>
        
      );
}
export default Search;
// {searchTerm.length > 0  && <datalist className={styles.list} />
// {searchResults.length > 0 ? searchResults.map(item => (  
//  <option key={item.split('-')[0]} className={styles.listItem} value={<Link href={`/stock?ticker=${item.split('-')[0]}&name=${item.split('-')[1]}`}>{item}</Link>} />
// )) : <p>No item matching search parameter!</p>}
// }
{/* <datalist />
    searchResults.map(item => (
        <option value="hehe" />
    )) */}
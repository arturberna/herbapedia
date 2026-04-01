import './SearchModule.module.css'
import { useState } from 'react';
import SearchBar from '../SearchBar';
import ResultList from '../ResultList';

export default function SearchModule() {
    const [results, setResults] = useState<any[]>([]);
    
    const handleSearch = (query: string) => {
        // Perform search logic here and update results
        const newResults = performSearchMock(query);
        setResults(newResults);
    }
    return (
        <div>
            <h1>Search Module</h1>
            <SearchBar onSearch={handleSearch}/>
            <ResultList itens={results} />  
        </div>
    );
}
function performSearchMock(query: string) {
    // Implement search logic here and return results
    const mockResults = [
        { nome: "A 1", descricao: "Descrição do item A 1" },
        { nome: "A 2", descricao: "Descrição do item B 2" },
        { nome: "C 3", descricao: "Descrição do item C 3" }
    ]; // Example results
    const filteredResults = mockResults.filter(result => 
        result.nome.toLowerCase().includes(query.toLowerCase())
    );
    console.log('Filtered Results:', filteredResults);
    return filteredResults;
    
}
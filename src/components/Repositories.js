import * as React from "react";
import { RepositorySearchResults } from './RepositorySearchResults'
import { Input, Label } from '../elements'

/**
 * Once given an input, fetch the repositories we searched
 * via:
 *
 * https://api.github.com/search/repositories?q={}
 *
 * This should not kickoff a fetch for every keystroke, but rather when
 * typing stops.
 *
 * Documentation for the search api is here:
 * https://developer.github.com/v3/search/#search-repositories
 */

const Repositories = () => {
  const [searchResults, setSearchResults] = React.useState(null)


  let timeout = null;
  const handleSearchResult = (e) => {
    clearTimeout(timeout)
    const value = e.target.value
    timeout = setTimeout(() => {
      setSearchResults(value)
    }, 1000)

  }
  return (
    <div>
      <Label htmlFor="searh-terms"> Search request </Label>
      <Input name="search-terms" autoFocus={true} onKeyUp={(e) => handleSearchResult(e)} placeholder='Enter in name of Repo...' />
      {searchResults ? (
        <RepositorySearchResults searchResults={searchResults} />
      ) : (
          <div>Enter some test to search github repositories</div>
        )}
    </div>
  );
};

export default Repositories;

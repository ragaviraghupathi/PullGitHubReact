import React from 'react';
import Repository from './Repository';
import EmptyProfile from './EmptyProfile';

const RepositoriesList = props => { 
  const results  =  props.data;
  let repositories;
  if (results.length) {
    repositories  =  results.map(repository => <Repository name={repository.name}
      watchers={repository.watchers_count}
      languages={repository.language? repository.language : "no description about the languages"}
      stars={repository.stargazers_count} key={repository.id}  />);    
  } else {
    repositories = <EmptyProfile />
  }

  return(
    <div className="table-table-responsive-xl">
      <table className="table table-striped">
        <thead>
          <tr>
           <th>Repository name</th>
            <th>Primary languages</th>
            <th className="tablealign">No of Watchers</th>
           <th className="tablealign">No of Stars</th>
         </tr>
       </thead>
       <tbody>
        {repositories}
       </tbody>
     </table>
   </div> 
  );
}

export default RepositoriesList;

const Title = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className='row'>
      <div className='col navigation'>
        <div className='page-title'>
          <h2 className='text-uppercase'>4 Recipies From All Over The World</h2>
        </div>
        <div className='search'>
          <input
            type='text'
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Title;

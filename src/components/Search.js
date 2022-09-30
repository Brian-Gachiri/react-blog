const Search = () => {

    return (
        <div className="row justify-content-center mt-3">
            <div className="col-lg-10">
                <div className="input-group mb-3">
                    <input type="text" className="form-control form-control-lg" placeholder="Search for article"
                           aria-label="Search for article" aria-describedby="button-addon2" style={{
                               fontSize:'16px',
                        height:'20px'
                    }}/>
                        <button className="btn btn-secondary" type="button" id="button-addon2">Search</button>
                </div>
            </div>
        </div>
    )
}

export default Search
import React, {useState, useEffect} from 'react';
import RowComponent from "./RowComponent";

const ListComponent = () => {
    const [users, setUser] = useState([]);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);

    useEffect(() => {
        fetch(`https://reqres.in/api/users?page=${page}`).then(e => e.json())
            .then(e => {
                setUser(e.data);
                setPagination({...pagination, ['total_pages']: e.total_pages});
            });
    }, [page]);

    const handlePageChange = (e) => {
        setPage(e.target.id);
    };

    const prevPage = () => {
        if (page > 1) setPage(Number(page) - 1);
    };

    const nextPage = () => {
        if (page < pagination.total_pages) setPage(Number(page) + 1);
    };
    
    let el = [];
    for (let i = 1; i <= pagination.total_pages; i++) {
        el.push(<span key={i} id={i} className={Number(page) === i ? 'active-page' : ''} onClick={handlePageChange}>{i}</span>);
    }

    return (
        <div className="page-list">
            <div className="pagination">
                <span onClick={prevPage}>&laquo;</span>
                {el}
                <span onClick={nextPage}>&raquo;</span>
            </div>
            <div className="content-table">
                <table>
                    <thead>
                        <tr>
                            <td>stt</td>
                            <td>Full name</td>
                            <td>Email</td>
                            <td>Avatar</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((e, index) => (
                            <RowComponent key={index} user={e} keyIndex={++index}/>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListComponent;

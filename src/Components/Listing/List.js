import React, {useState} from 'react';
import Header from "../Header/header";
import CsvDownload from 'react-json-to-csv'


const List = props => {
    const data = localStorage.getItem("PatientInfo")
    const result = JSON.parse(data)
    const [search, setSearch] = useState('')
    const [getData, setData] = useState(result)
    const [getSort, setsort] = useState('desc')
    const handleChange = e => {
        setSearch(e.target.value)
        setData(result.filter((item) => {
            return item.getPtData.ptName.indexOf(e.target.value) > -1
        }))
    }
    const handleDelete = (index) => {
        const data = JSON.parse(localStorage.getItem("PatientInfo"))
        var i = data.findIndex(movie => movie.getPtData.id === index);
        data.splice(i, 1);
        localStorage.setItem('PatientInfo', JSON.stringify(data));
    }

    const sortByAsc = (field) => {
        setsort(getSort === 'desc' ? 'asc' : 'desc')
        const tmp = [...getData]
        if (field === 'ptAge') setData(getSort === 'desc' ? tmp.sort((a, b) => (a.getPtData.ptAge - b.getPtData.ptAge)) : tmp.sort((a, b) => (a.getPtData.ptAge - b.getPtData.ptAge)).reverse())
        if (field === 'ptName') setData(getSort === 'desc' ? tmp.sort((a, b) => (a.getPtData.ptName.localeCompare(b.getPtData.ptName))) : tmp.sort((a, b) => (a.getPtData.ptName.localeCompare(b.getPtData.ptName))).reverse())
        if (field === 'ptGender') setData(getSort === 'desc' ? tmp.sort((a, b) => (a.getPtData.ptGender.localeCompare(b.getPtData.ptGender))) : tmp.sort((a, b) => (a.getPtData.ptGender.localeCompare(b.getPtData.ptGender))).reverse())
    }
    const CSV = []
    getData && getData.map(item => {
        CSV.push({
            Name: item.getPtData.ptName,
            gender: item.getPtData.ptGender,
            age: item.getPtData.ptAge,
            address: item.getPtData.ptAddress,

        })
    })
    return (
        <form>
            <Header
                handleChange={handleChange}
                search={search}
            />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='col-6'>
                            <table className="table">
                                <thead>
                                <tr>
                                    <th onClick={() => sortByAsc('ptName')} scope="col">Name
                                        <img height='10px' width='10px'
                                             src="https://img.icons8.com/android/50/000000/sorting-arrows.png"/>
                                    </th>
                                    <th onClick={() => sortByAsc('ptAge')} scope="col">Age
                                        <img height='10px' width='10px'
                                             src="https://img.icons8.com/android/50/000000/sorting-arrows.png"/>
                                    </th>
                                    <th onClick={() => sortByAsc('ptGender')} scope="col">Gender
                                        <img height='10px' width='10px'
                                             src="https://img.icons8.com/android/50/000000/sorting-arrows.png"/>
                                    </th>
                                    <th scope="col">Address</th>
                                </tr>
                                </thead>
                                <tbody>

                                {getData && getData.map((item, index) => {
                                    return <tr key={index}>
                                        <td>{item.getPtData.ptName}</td>
                                        <td>{item.getPtData.ptAge}</td>
                                        <td>{item.getPtData.ptGender}</td>
                                        <td>{item.getPtData.ptAddress}</td>
                                        <td>
                                            <button onClick={() => handleDelete(item.getPtData.id)}>Delete</button>
                                        </td>
                                    </tr>
                                })}
                                </tbody>
                            </table>
                        </div>
                        <div className='col-6'>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => window.location.href = '/add'}
                            >Add
                            </button>
                            {getData && getData.length  !== 0 &&
                            <CsvDownload data={CSV} className='ml-5'/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default List;
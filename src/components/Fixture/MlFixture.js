import React from 'react'
import logo from '../../assets/logox.png'
import mllogo from '../../assets/mllogo.png'

const MlFixture = () => {

    const rows = [];

    // create 20 rows
    for ( let i = 0; i < 10; i++ ) {
        rows.push(
            <tr key={ i }>
                <td className="border px-4 py-2 text-slate-50">{ `Slot ${i + 1}` }</td>
                <td className="border px-4 py-2 text-slate-50">{ `Player ${i + 1}` }</td>
            </tr>
        );
    }

    const firstTenRows = rows.slice( 0, 5 );
    const remainingRows = rows.slice( 5 );

    return (
        <div>
            <div>
                <div className='flex flex-row md:flex-row justify-evenly md:justify-between mx-2 items-center'>
                    <div>
                        <img src={ logo } alt='logo' className='h-12 w-auto' />
                    </div>
                    <div>
                        <h1 class="text-5xl font-bold text-center text-purple-800 leading-tight py-8">
                            Slot List
                        </h1>
                    </div>
                    <div>
                        <img className='h-20' alt='bgmiLogo' src={ mllogo } />
                    </div>
                </div>
                <div className="flex">
                    <div className="w-1/2 p-4">
                        <table className="table-auto border-collapse w-full sm:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-2xl">
                            <thead>
                                <p className='text-3xl font-semibold flex text-slate-100'>Team Name</p>
                                <tr>
                                    <th className="px-4 py-2 text-slate-50">Slot</th>
                                    <th className="px-4 py-2 text-slate-50">Player Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                { firstTenRows }
                            </tbody>
                        </table>
                    </div>
                    <div className="w-1/2 p-4">
                        <table className="table-auto border-collapse w-full">
                            <thead>
                                <p className='text-3xl font-semibold flex text-slate-100'>Team Name</p>
                                <tr>
                                    <th className="px-4 py-2 text-slate-50">Slot</th>
                                    <th className="px-4 py-2 text-slate-50">Player Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                { remainingRows }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MlFixture
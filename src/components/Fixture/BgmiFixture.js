import React from 'react'
import logo from '../../assets/logox.png'

const BgmiFixture = () => {
    const rows = [];

    // create 20 rows
    for ( let i = 0; i < 20; i++ ) {
        rows.push(
            <tr key={ i }>
                <td className="border px-4 py-2 text-slate-50">{ `Slot ${i + 1}` }</td>
                <td className="border px-4 py-2 text-slate-50">{ `Team ${i + 1}` }</td>
            </tr>
        );
    }

    const firstTenRows = rows.slice( 0, 10 );
    const remainingRows = rows.slice( 10 );

    return (
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
                    <img className='h-12' alt='bgmiLogo' src='https://png.oyepandeyji.com/wp-content/uploads/2021/09/bgmi-new-logo-png.png' />
                </div>
            </div>
            <div className="flex">
                <div className="w-1/2 p-4">
                    <table className="table-auto border-collapse w-full sm:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-2xl">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 text-slate-50">Slot</th>
                                <th className="px-4 py-2 text-slate-50">Team Name</th>
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
                            <tr>
                                <th className="px-4 py-2 text-slate-50">Slot</th>
                                <th className="px-4 py-2 text-slate-50">Team Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            { remainingRows }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default BgmiFixture
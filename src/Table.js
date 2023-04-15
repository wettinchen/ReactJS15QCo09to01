import React from 'react';

const Table = ({ items }) => {
  return (
    <div className="table-container">
        <table>
            <tbody>
                {items.map(item => (

                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table
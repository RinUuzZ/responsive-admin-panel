import React from 'react';
import './Reports.css';

const Reports = () => {
    const users = [
        { name: '', email: '', mobileNumber: '', message : '' },

    ];

    return (
        <div>
            <h2>User Reports</h2>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Mobile Number</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobileNumber}</td>
                            <td>{user.message}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Reports;

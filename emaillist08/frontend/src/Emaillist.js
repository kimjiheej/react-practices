import React from 'react';
import Email from './Email';

function Emaillist({ emails, onDelete }) {
    return (
        <ul>
            {emails &&
                emails.map((email) => (
                    <Email
                        key={email.no}
                        no={email.no}
                        firstName={email.firstName}
                        lastName={email.lastName}
                        email={email.email}
                        onDelete={onDelete} // onDelete 콜백 전달
                    />
                ))}
        </ul>
    );
}

export default Emaillist;
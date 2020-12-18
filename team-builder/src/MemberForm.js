import React, { useState } from 'react';

const MemberForm = (props) => {
  const [member, setMember] = useState({
    name: '',
    email: '',
    role: '',
  });

  const handleChanges = (event) => {
    console.log('event', event.target.value);
    console.log('name', event.target.name);

    setMember({ ...member, [event.target.name]: event.target.value });
  };

  console.log('member', member);
  const submitForm = (event) => {
    console.log('submitting!');
    event.preventDefault();
    props.addNewTeamMember(member);
    setMember({ name: '', body: '', role: '' });
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor='name'>Name</label>
      <input
        type='text'
        placeholder={`Enter ${Date.now()}`}
        id='name'
        name='name'
        value={member.name}
        onChange={handleChanges}
      />
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        id='email'
        name='email'
        placeholder='Add your note'
        value={member.email}
        onChange={handleChanges}
      />
      <label htmlFor='role'>Role</label>
      <input
        type='text'
        id='role'
        name='role'
        placeholder='Add your note'
        value={member.role}
        onChange={handleChanges}
      />

      <button type='submit'>Add Member</button>
    </form>
  );
};

export default MemberForm;

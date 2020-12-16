import React, { useState } from 'react';
import MemberForm from './MemberForm';
import Member from './Member';
import ReactDOM from 'react-dom';
export default function Form() {
  const [teamMember, setNewTeamMember] = useState([
    {
      id: 1,
      name: 'Mikayla',
      email: 'mikayla-bryant@lambdastudents.com',
      role: 'Front End Developer',
    },
  ]);
  const addNewTeamMember = (member) => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role,
    };
    setNewTeamMember([...teamMember, newMember]);
  };
  return (
    <div>
      <MemberForm addNewTeamMember={addNewTeamMember} />
      <Member teamMember={teamMember} />
    </div>
  );
}

import React, {useContext, useState} from 'react';
import {AlertContext} from "../context/alert/alertContext";
import {GithubContext} from "../context/github/githubContext";


export const Search = () => {
  const [value, setValue] = useState('');
  const alert = useContext(AlertContext);
  const github = useContext(GithubContext);

  const onSubmit = (evt) => {
    if (evt.key !== 'Enter') {
      return;
    }

    github.clearUsers();

    if (value.trim()) {
      alert.hide();
      github.search(value.trim());
    } else {
      alert.show('Введите данные пользователя!', 'warning')
    }
  };

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Введите ник пользователя..."
        value={value}
        onChange={evt => setValue(evt.target.value)}
        onKeyPress={onSubmit}
      />
    </div>
  );
};
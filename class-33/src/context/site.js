import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider(props) {

  const [title, setTitle] = useState('Daily Dose of Code');
  const [twitter, setTwitter] = useState('DailyDoseOfCode');
  
  // packaging all of state and state methods in one obj
  const state = {
    title,
    twitter,
    changeTitleTo: setTitle,
    changeTwitterTo: setTwitter
  };

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;

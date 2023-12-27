/* eslint-disable react/prop-types */
import React, { useCallback, useEffect, useState } from 'react';
import SelectVerseModal from '../components/SelectVerseModal';
import useVerseName from '../hooks/useVerseName';

const AppContext = React.createContext();

const verses = ['hust', 'neu', 'nuce', 'hou'];

function AppProvider({ children }) {
  const [verse, setVerse] = useVerseName();
  const [isOpenSelectVerseModal, setIsOpenSelectVerseModal] =
    useState(false);

  const toggleSelectVerseModal = useCallback(() => {
    setIsOpenSelectVerseModal((prev) => !prev);
  }, []);

  useEffect(() => {
    if (!verses.includes(verse)) {
      setIsOpenSelectVerseModal(true);
    }
  }, [verse]);

  return (
    <AppContext.Provider
      value={{
        verse,
        setVerse,
        toggleSelectVerseModal
      }}
    >
      <SelectVerseModal
        isOpen={isOpenSelectVerseModal}
        onClose={toggleSelectVerseModal}
        setVerse={setVerse}
      />
      {children}
    </AppContext.Provider>
  );
}

const useAppContext = () => {
  const context = React.useContext(AppContext);

  if (context === undefined) {
    throw new Error(
      `useAppContext must be used within a AppProvider`
    );
  }

  return context;
};

export default AppProvider;
export { useAppContext };

import { useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');
export function App() {
    const [IsNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
        false
    );

    const handleOpenIsNewTransactionModal = () => {
        setIsNewTransactionModalOpen(true);
    };
    const handleCloseIsNewTransactionModal = () => {
        setIsNewTransactionModalOpen(false);
    };
    return (
        <>
            <Header
                onOpenNewTransactionModal={handleOpenIsNewTransactionModal}
            />
            <Dashboard />
            <NewTransactionModal
                isOpen={IsNewTransactionModalOpen}
                onRequestClose={handleCloseIsNewTransactionModal}
            />
            <GlobalStyle />
        </>
    );
}

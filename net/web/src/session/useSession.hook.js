import { useContext, useState, useEffect, useRef } from 'react';
import { CardContext } from 'context/CardContext';
import { StoreContext } from 'context/StoreContext';

export function useSession() {

  const [state, setState] = useState({
    cardUpdated: false,
    contactGuid: null,
    contactNode: null,
    listingNode: null,
    conversation: false,
    details: false,
    cards: false,
    listing: false,
    contact: false,
    profile: false,
    account: false,
  });

  const card = useContext(CardContext);
  const store = useContext(StoreContext);
  
  const storeStatus = useRef(null);
  const cardStatus = useRef(null);

  const updateState = (value) => {
    setState((s) => ({ ...s, ...value }));
  }

  useEffect(() => {
    const contacts = Array.from(card.state.cards.values());
    
    let updated;
    contacts.forEach(contact => {
      if (!updated || updated < contact?.data?.cardDetail?.statusUpdated) {
        updated = contact?.data?.cardDetail?.statusUpdated;
      }
    });

    if (state.cards) {
      cardStatus.current = updated;
      storeStatus.current = updated;
      store.actions.setValue('cards:updated', updated);
    }

    updateState({ cardUpdated: cardStatus.current > storeStatus.current });
  }, [card]);

  useEffect(() => {
    storeStatus.current = store.actions.getValue('cards:updated');
    updateState({ cardUpdated: cardStatus.current > storeStatus.current });
  }, [store]);

  const actions = {
    closeDetails: () => {
      updateState({ details: false });
    },
    openCards: () => {
      updateState({ cards: true });
    },
    closeCards: () => {
      updateState({ cards: false });
    },
    openListing: (listingNode) => {
      updateState({ listing: true, listingNode });
    },
    closeListing: () => {
      updateState({ listing: false });
    },
    openContact: (contactGuid, contactNode) => {
      updateState({ contact: true, contactGuid, contactNode });
    },
    closeContact: () => {
      updateState({ contact: false });
    },
    openProfile: () => {
      updateState({ profile: true });
    },
    closeProfile: () => {
      updateState({ profile: false });
    },
    openAccount: () => {
      updateState({ account: true });
    },
    closeAccount: () => {
      updateState({ account: false });
    },
    closeConversation: () => {
      updateState({ conversation: false });
    },
  };

  return { state, actions };
}


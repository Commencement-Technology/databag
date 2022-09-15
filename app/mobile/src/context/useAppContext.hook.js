import { useEffect, useState, useRef, useContext } from 'react';
import { getAvailable } from 'api/getAvailable';
import { setLogin } from 'api/setLogin';
import { setAccountAccess } from 'api/setAccountAccess';
import { addAccount } from 'api/addAccount';
import { getUsername } from 'api/getUsername';
import { StoreContext } from 'context/StoreContext';
import { AccountContext } from 'context/AccountContext';
import { ProfileContext } from 'context/ProfileContext';
import { CardContext } from 'context/CardContext';
import { ChannelContext } from 'context/ChannelContext';

export function useAppContext() {
  const [state, setState] = useState({
    session: null,
    disconnected: null,
  });
  const store = useContext(StoreContext);
  const account = useContext(AccountContext);
  const profile = useContext(ProfileContext);
  const card = useContext(CardContext);
  const channel = useContext(ChannelContext);

  const delay = useRef(2);
  const ws = useRef(null);

  const updateState = (value) => {
    setState((s) => ({ ...s, ...value }))
  }

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const access = await store.actions.init();
    if (access) {
      await setSession(access);
    }
    else {
      updateState({ session: false });
    }
  }

  const setSession = async (access) => {
    await account.actions.setSession(access);
    await profile.actions.setSession(access);
    await card.actions.setSession(access);
    await channel.actions.setSession(access);
    updateState({ session: true });
    setWebsocket(access.server, access.appToken);
  }

  const clearSession = async () => {
    account.actions.clearSession();
    profile.actions.clearSession();
    card.actions.clearSession();
    channel.actions.clearSession();
    updateState({ session: false });
    clearWebsocket();
  }

  const actions = {
    available: getAvailable,
    username: getUsername,
    create: async (server, username, password, token) => {
      await addAccount(server, username, password, token);
      const access = await setLogin(username, server, password)
      await setSession({ ...access, server });
      await store.actions.setSession({ ...access, server});
    },
    access: async (server, token) => {
      const access = await setAccountAccess(server, token);
      await setSession({ ...access, server });
      await store.actions.setSession({ ...access, server});
    },
    login: async (username, password) => {
      const acc = username.split('@');
      const access = await setLogin(acc[0], acc[1], password)
      await setSession({ ...access, server: acc[1] }); 
      await store.actions.setSession({ ...access, server: acc[1]});
    },
    logout: async () => {
      await clearSession();
      await store.actions.clearSession();
    },
  }

  const setWebsocket = (server, token) => {
    clearWebsocket();
    ws.current = new WebSocket(`wss://${server}/status`);
    ws.current.onmessage = (ev) => {
      try {
        const rev = JSON.parse(ev.data);
        try {
          profile.actions.setRevision(rev.profile);
          account.actions.setRevision(rev.account);
          card.actions.setRevision(rev.channel);
          channel.actions.setRevision(rev.card);
        }
        catch(err) {
          console.log(err);
        }
        updateState({ disconnected: false });
      }
      catch (err) {
        console.log(err);
      }
    }
    ws.current.onclose = (e) => {
      updateState({ disconnected: true });
      console.log(e)
      setTimeout(() => {
        if (ws.current != null) {
          ws.current.onmessage = () => {}
          ws.current.onclose = () => {}
          ws.current.onopen = () => {}
          ws.current.onerror = () => {}
          setWebsocket(token);
          if (delay.current < 15) {
            delay.current += 1;
          }
        }
      }, delay.current * 1000)
    }
    ws.current.onopen = () => {
      ws.current.send(JSON.stringify({ AppToken: token }))
    }
    ws.current.error = (e) => {
      updateState({ disconnected: true });
      console.log(e)
    }
  }
 
  const clearWebsocket = ()  => {
    if (ws.current) {
      ws.current.onclose = () => {}
      ws.current.close()
      ws.current = null
    }
  }

  return { state, actions }
}


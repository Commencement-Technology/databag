import { useContext, useState, useEffect, useRef } from 'react';
import { ConversationContext } from 'context/ConversationContext';
import { ProfileContext } from 'context/ProfileContext';
import { CardContext } from 'context/CardContext';

export function useTopicItem(topic) {

  const [guid, setGuid] = useState(null);

  const [state, setState] = useState({
    name: null,
    handle: null,
    imageUrl: null,
    message: null,
    created: null,
    ready: false,
    owner: false,
    assets: [],
    editing: false,
    busy: false,
  });

  const profile = useContext(ProfileContext);
  const card = useContext(CardContext);
  const conversation = useContext(ConversationContext);
  const editMessage = useRef(null);

  const updateState = (value) => {
    setState((s) => ({ ...s, ...value }));
  }

  useEffect(() => {
    let owner = false;
    if (profile.state.profile.guid == topic?.data?.topicDetail.guid) {
      owner = true;
    }

    if (!topic?.data) {
      console.log("invalid topic:", topic);
      return;
    }

    const { status, transform, data } = topic.data.topicDetail;
    let message;
    let ready = false;
    let assets = [];
    if (status === 'confirmed') {
      try {
        message = JSON.parse(data);
        if (message.assets) {
          assets = message.assets;
          delete message.assets;
        }
        if (transform === 'complete') {
          ready = true;
        }
      }
      catch(err) {
        console.log(err);
      }
    }

    if (profile.state.init && card.state.init && conversation.state.init) {
      const { guid, created } = topic.data.topicDetail;
      if (profile.state.profile.guid == guid) {
        const { name, handle, imageUrl } = profile.actions.getProfile();
        updateState({ name, handle, imageUrl, status, message, transform, assets, ready, created, owner });
      }
      else {
        const { name, handle, imageUrl } = card.actions.getCardProfileByGuid(guid);
        updateState({ name, handle, imageUrl, status, message, transform, assets, ready, created, owner });
      }
    }
  }, [profile, card, conversation, topic]);

  const actions = {
    getAssetUrl: (assetId) => {
      return conversation.actions.getAssetUrl(topic?.id, assetId);
    },
    removeTopic: async () => {
      return await conversation.actions.removeTopic(topic.id);
    },
    setEditing: (editing) => {
      editMessage.current = state.message?.text;
      updateState({ editing });
    },
    setEdit: (edit) => {
      editMessage.current = edit;
    },
    setMessage: async () => {
      if (!state.busy) {
        updateState({ busy: true });
        try {
          await conversation.actions.setTopicSubject(topic.id,
              { ...state.message, text: editMessage.current, assets: state.assets });
          updateState({ editing: false });
        }
        catch (err) {
          window.alert(err);
        }
        updateState({ busy: false });
      }
    },
  };

  return { state, actions };
}

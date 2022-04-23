import React, { useState, useEffect, useRef } from 'react'
import { ConversationContextProvider } from '../../ConversationContext/ConversationContext';
import { CloseOutlined, UserOutlined } from '@ant-design/icons';
import { useConversation } from './useConversation.hook';
import { Button, Checkbox, Modal } from 'antd'
import { ConversationWrapper, CloseButton, ListItem } from './Conversation.styled';
import { AutoSizer, CellMeasurer, CellMeasurerCache, List } from 'react-virtualized';
import { AddTopic } from './AddTopic/AddTopic';
import { VirtualList } from '../../VirtualList/VirtualList';
import { TopicItem } from './TopicItem/TopicItem';

export function Conversation() {

  const { state, actions } = useConversation();

  const topicRenderer = (topic) => {
    return (<TopicItem topic={topic} />)
  }

  return (
    <ConversationWrapper>
      <div class="header">
        <div class="title">{ state.handle }</div>
        <CloseButton type="text" class="close" size={'large'}
            onClick={() => actions.close()} icon={<CloseOutlined />} />
      </div>
      <div class="thread">
        <VirtualList items={state.topics} itemRenderer={topicRenderer} />
      </div>
      <AddTopic />
    </ConversationWrapper>
  )
}


import React from "react";

interface Conversation {
  id: string;
  name: string;
  lastMessage: string;
}

interface ConversationListProps {
  conversations: Conversation[];
  onSelectConversation: (id: string) => void;
}

const ConversationList: React.FC<ConversationListProps> = ({
  conversations,
  onSelectConversation,
}) => {
  return (
    <div className="w-64 bg-gray-200 p-4">
      <h2 className="text-lg font-bold mb-4">Conversations</h2>
      <ul>
        {conversations.map((conversation) => (
          <li
            key={conversation.id}
            className="mb-2 p-2 bg-white rounded cursor-pointer hover:bg-gray-100"
            onClick={() => onSelectConversation(conversation.id)}
          >
            <h3 className="font-semibold">{conversation.name}</h3>
            <p className="text-sm text-gray-600 truncate">
              {conversation.lastMessage}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConversationList;

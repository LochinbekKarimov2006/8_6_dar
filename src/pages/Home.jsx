import React, { useState, useEffect } from "react";

import {
  Plus,
  X,
  MoreHorizontal,
  User,
  Calendar,
  Tag,
  Paperclip,
  // Eye,
} from "lucide-react";

const TrelloLikeModal = ({ card, onClose, onUpdate }) => {
  const [description, setDescription] = useState(card.description || "");
  const [showMembers, setShowMembers] = useState(false);
  const [showLabels, setShowLabels] = useState(false);
  const [showDates, setShowDates] = useState(false);

  const updateCard = (updates) => {
    onUpdate({ ...card, ...updates });
  };

  const priorityColors = {
    low: "bg-green-500",
    medium: "bg-yellow-500",
    high: "bg-red-500",
  };
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "429c535a-81c8-4327-bff2-82cb8221f90a";
    (function () {
      const d = document;
      const s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = true;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 w-[768px] rounded-lg shadow-xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-white">{card.name}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex">
            <div className="w-2/3 pr-4">
              <div className="mb-4">
                <div className="flex items-center text-gray-400 mb-2">
                  <Tag size={16} className="mr-2" />
                  <span>in list {card.list}</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Description</h3>
                <textarea
                  className="w-full bg-gray-700 text-white rounded p-2 min-h-[100px]"
                  placeholder="Add a more detailed description..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  onBlur={() => updateCard({ description })}
                />
              </div>
              <div className="mb-4">
                <h3 className="text-white font-semibold mb-2">Activity</h3>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-2">
                    SW
                  </div>
                  <input
                    type="text"
                    placeholder="Write a comment..."
                    className="flex-grow bg-gray-700 text-white rounded p-2"
                  />
                </div>
              </div>
            </div>
            <div className="w-1/3">
              <div className="mb-4">
                <h3 className="text-white font-semibold mb-2">Add to card</h3>
                <button
                  className="w-full bg-gray-700 text-left text-white p-2 rounded mb-2 hover:bg-gray-600 flex items-center justify-between"
                  onClick={() => setShowMembers(!showMembers)}
                >
                  <span>
                    <User size={16} className="inline mr-2" /> Members
                  </span>
                  {card.assignee && (
                    <span className="text-sm bg-blue-500 px-2 py-1 rounded">
                      {card.assignee}
                    </span>
                  )}
                </button>
                {showMembers && (
                  <div className="bg-gray-700 p-2 rounded mb-2">
                    <input
                      type="text"
                      placeholder="Search members"
                      className="w-full bg-gray-600 text-white rounded p-1 mb-2"
                    />
                    <div
                      className="flex items-center bg-gray-600 p-1 rounded cursor-pointer hover:bg-gray-500"
                      onClick={() => updateCard({ assignee: "SW" })}
                    >
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-2">
                        SW
                      </div>
                      <span>splinter wow</span>
                    </div>
                  </div>
                )}
                <button
                  className="w-full bg-gray-700 text-left text-white p-2 rounded mb-2 hover:bg-gray-600 flex items-center justify-between"
                  onClick={() => setShowLabels(!showLabels)}
                >
                  <span>
                    <Tag size={16} className="inline mr-2" /> Labels
                  </span>
                  {card.priority && (
                    <span
                      className={`text-sm ${
                        priorityColors[card.priority]
                      } px-2 py-1 rounded`}
                    >
                      {card.priority}
                    </span>
                  )}
                </button>
                {showLabels && (
                  <div className="bg-gray-700 p-2 rounded mb-2">
                    {["low", "medium", "high"].map((priority) => (
                      <div
                        key={priority}
                        className={`${priorityColors[priority]} text-white p-1 rounded mb-1 cursor-pointer`}
                        onClick={() => updateCard({ priority })}
                      >
                        {priority}
                      </div>
                    ))}
                  </div>
                )}
                <button
                  className="w-full bg-gray-700 text-left text-white p-2 rounded mb-2 hover:bg-gray-600 flex items-center justify-between"
                  onClick={() => setShowDates(!showDates)}
                >
                  <span>
                    <Calendar size={16} className="inline mr-2" /> Dates
                  </span>
                  {card.dueDate && (
                    <span className="text-sm bg-gray-600 px-2 py-1 rounded">
                      {card.dueDate}
                    </span>
                  )}
                </button>
                {showDates && (
                  <div className="bg-gray-700 p-2 rounded mb-2">
                    <input
                      type="date"
                      className="w-full bg-gray-600 text-white rounded p-1 mb-2"
                      value={card.dueDate || ""}
                      onChange={(e) => updateCard({ dueDate: e.target.value })}
                    />
                  </div>
                )}
                <button className="w-full bg-gray-700 text-left text-white p-2 rounded mb-2 hover:bg-gray-600">
                  <Paperclip size={16} className="inline mr-2" /> Attachment
                </button>
              </div>
              <div className="mb-4">
                <h3 className="text-white font-semibold mb-2">Actions</h3>
                <button className="w-full bg-gray-700 text-left text-white p-2 rounded mb-2 hover:bg-gray-600">
                  Move
                </button>
                <button className="w-full bg-gray-700 text-left text-white p-2 rounded mb-2 hover:bg-gray-600">
                  Copy
                </button>
                <button className="w-full bg-gray-700 text-left text-white p-2 rounded mb-2 hover:bg-gray-600">
                  Make template
                </button>
                <button className="w-full bg-gray-700 text-left text-white p-2 rounded mb-2 hover:bg-gray-600">
                  Archive
                </button>
                <button className="w-full bg-gray-700 text-left text-white p-2 rounded mb-2 hover:bg-gray-600">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Home() {
  const [lists, setLists] = useState([]);
  const [currentList, setCurrentList] = useState(null);
  const [isAddingList, setIsAddingList] = useState(false);
  const [listName, setListName] = useState("");
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [cardName, setCardName] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);

  const handleAddList = () => {
    if (listName.trim()) {
      const newList = { id: Date.now(), name: listName.trim(), cards: [] };
      setLists([...lists, newList]);
      setListName("");
      setIsAddingList(false);
    }
  };

  const handleAddCard = () => {
    if (cardName.trim() && currentList) {
      const newCard = {
        id: Date.now(),
        name: cardName.trim(),
        description: "",
        assignee: "",
        dueDate: "",
        priority: "",
        list: currentList.name,
      };
      const updatedLists = lists.map((list) => {
        if (list.id === currentList.id) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        }
        return list;
      });
      setLists(updatedLists);
      setCardName("");
      setIsAddingCard(false);
    }
  };

  const openCardModal = (card) => {
    setSelectedCard(card);
  };

  const closeCardModal = () => {
    setSelectedCard(null);
  };

  const updateCard = (updatedCard) => {
    const updatedLists = lists.map((list) => ({
      ...list,
      cards: list.cards.map((card) =>
        card.id === updatedCard.id ? updatedCard : card
      ),
    }));
    setLists(updatedLists);
    setSelectedCard(updatedCard);
  };
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "429c535a-81c8-4327-bff2-82cb8221f90a";
    (function () {
      const d = document;
      const s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = true;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  }, []);
  return (
    <div className="p-4 bg-gray-900 min-h-screen">
      <div className="flex space-x-4 overflow-x-auto">
        {lists.map((list) => (
          <div
            key={list.id}
            className="bg-gray-800 p-2 rounded-md min-w-[250px]"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-white font-medium">{list.name}</h3>
              <button className="text-gray-400 hover:text-white">
                <MoreHorizontal size={16} />
              </button>
            </div>
            {list.cards.map((card) => (
              <div
                key={card.id}
                className="bg-gray-700 p-2 rounded mb-2 text-white cursor-pointer hover:bg-gray-600"
                onClick={() => openCardModal(card)}
              >
                {card.name}
              </div>
            ))}
            {currentList?.id === list.id && isAddingCard ? (
              <div className="mt-2">
                <input
                  type="text"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  placeholder="Enter card title..."
                  className="w-full bg-gray-700 text-white rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                  autoFocus
                />
                <div className="flex justify-between items-center">
                  <button
                    onClick={handleAddCard}
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-2 py-1 text-sm font-medium transition-colors"
                  >
                    Add card
                  </button>
                  <button
                    onClick={() => {
                      setIsAddingCard(false);
                      setCardName("");
                    }}
                    className="text-gray-400 hover:text-white"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => {
                  setCurrentList(list);
                  setIsAddingCard(true);
                }}
                className="flex items-center gap-2 text-gray-400 hover:text-white mt-2"
              >
                <Plus size={16} />
                Add a card
              </button>
            )}
          </div>
        ))}
        {isAddingList ? (
          <div className="bg-gray-800 p-2 rounded-md min-w-[250px]">
            <input
              type="text"
              value={listName}
              onChange={(e) => setListName(e.target.value)}
              placeholder="Enter list title..."
              className="w-full bg-gray-700 text-white rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
              autoFocus
            />
            <div className="flex justify-between items-center">
              <button
                onClick={handleAddList}
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-2 py-1 text-sm font-medium transition-colors"
              >
                Add list
              </button>
              <button
                onClick={() => {
                  setIsAddingList(false);
                  setListName("");
                }}
                className="text-gray-400 hover:text-white"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setIsAddingList(true)}
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-medium transition-colors h-10"
          >
            <Plus size={16} />
            Add a list
          </button>
        )}
      </div>

      {selectedCard && (
        <TrelloLikeModal
          card={selectedCard}
          onClose={closeCardModal}
          onUpdate={updateCard}
        />
      )}
    </div>
  );
}

export default Home;

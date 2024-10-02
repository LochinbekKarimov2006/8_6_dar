import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import {
  Plus,
  X,
  MoreHorizontal,
  User,
  Calendar,
  Tag,
  Paperclip,
  PlusCircle,
  PlusIcon,
  PlusSquareIcon,
  Notebook,
} from "lucide-react";
import { PiPlusBold } from "react-icons/pi";

const TrelloLikeModal = ({ card, onClose, onUpdate }) => {
  const [description, setDescription] = useState(card.description);
  const [showMembers, setShowMembers] = useState(false);
  const [showLabels, setShowLabels] = useState(false);
  const [showDates, setShowDates] = useState(false);
  const doska = JSON.parse(localStorage.getItem("Users"));

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
    const d = document;
    const s = d.createElement("script");
    s.src = "https://client.crisp.chat/l.js";
    s.async = true;
    d.getElementsByTagName("head")[0].appendChild(s);
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
                )}{" "}
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
                      value={card.dueDate}
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
  const [isEditingList, setIsEditingList] = useState(null); 
  const [editListName, setEditListName] = useState(""); 

  const handleAddList = () => {
    if (listName.trim()) {
      const newList = { id: Date.now(), name: listName.trim(), cards: [] };
      setLists([...lists, newList]);
      setListName("");
      setIsAddingList(false);
    }
  };

  const handleEditList = (list) => {
    setIsEditingList(list.id);
    setEditListName(list.name);
  };

  const handleSaveListEdit = (listId) => {
    const updatedLists = lists.map((list) =>
      list.id === listId ? { ...list, name: editListName } : list
    );
    setLists(updatedLists);
    setIsEditingList(null);
    setEditListName("");
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
   
  
  const handleDeleteCard = (listId, cardId) => {
    const confirmDelete = window.confirm("Ushbu kartani o'chirmoqchimisiz?");
    if (confirmDelete) {
      const updatedLists = lists.map((list) => {
        if (list.id === listId) {
          return {
            ...list,
            cards: list.cards.filter((card) => card.id !== cardId),
          };
        }
        return list;
      });
      setLists(updatedLists);
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

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    const sourceListIndex = lists.findIndex(
      (list) => list.id === parseInt(source.droppableId)
    );
    const destListIndex = lists.findIndex(
      (list) => list.id === parseInt(destination.droppableId)
    );

    const sourceList = lists[sourceListIndex];
    const destList = lists[destListIndex];
    const draggedCard = sourceList.cards.find(
      (card) => card.id === parseInt(draggableId)
    );

    sourceList.cards.splice(source.index, 1);

    destList.cards.splice(destination.index, 0, draggedCard);

    const updatedLists = [...lists];
    updatedLists[sourceListIndex] = sourceList;
    updatedLists[destListIndex] = destList;

    setLists(updatedLists);
  };

  
  return (
    <div className="p-6 min-h-screen bg-gray-900">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-white">Tasks add ⚡️ </h1>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex space-x-6 overflow-x-auto">
          {lists.map((list) => (
            <Droppable droppableId={list.id.toString()} key={list.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="bg-gray-800 p-5 rounded-lg shadow-md w-72"
                >
                  <div className="flex justify-between items-center mb-4">
                    {isEditingList === list.id ? (
                      <input
                        value={editListName}
                        onChange={(e) => setEditListName(e.target.value)}
                        className="bg-gray-700 text-white rounded-md px-2 py-1"
                      />
                    ) : (
                      <h3 className="font-semibold text-lg text-white">
                        {list.name}
                      </h3>
                    )}
                    <div className="flex gap-2">
                      {isEditingList === list.id ? (
                        <button
                          onClick={() => handleSaveListEdit(list.id)}
                          className="text-gray-400 hover:text-white"
                        >
                          📄
                        </button>
                      ) : (
                        <button
                          onClick={() => handleEditList(list)}
                          className="text-gray-400 hover:text-white"
                        >
                          ✏️
                        </button>
                      )}
                    </div>
                  </div>
                  {list.cards.map((card, index) => (
                    <Draggable
                      key={card.id}
                      draggableId={card.id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-gray-700 p-3 rounded-md mb-2 cursor-pointer text-white flex justify-between items-center"
                          onClick={() => openCardModal(card)}
                        >
                          <span>{card.name}</span>
                          <div className="flex items-center">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteCard(list.id, card.id);
                              }}
                              className="text-red-500 hover:text-red-700"
                            >
                              🗑️
                            </button>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                  {currentList?.id === list.id && isAddingCard ? (
                    <div className="mt-3">
                      <input
                        type="text"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        placeholder="Enter card title..."
                        className="w-full rounded-md px-3 py-2 mb-2 focus:outline-none bg-gray-600 text-white"
                        autoFocus
                      />
                      <div className="flex justify-between items-center">
                        <button
                          onClick={handleAddCard}
                          className="bg-gray-400 text-black rounded-md px-16 py-2 text-sm font-medium"
                        >
                          Add card ➕
                        </button>
                        <button
                          onClick={() => {
                            setIsAddingCard(false);
                            setCardName("");
                          }}
                          className="text-gray-400 hover:text-white"
                        >
                          <X size={20} />
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
                      <Notebook size={20} />
                      Add card
                    </button>
                  )}
                </div>
              )}
            </Droppable>
          ))}
          {isAddingList ? (
            <div className="bg-gray-800 p-5 rounded-lg shadow-md w-72">
              <input
                type="text"
                value={listName}
                onChange={(e) => setListName(e.target.value)}
                placeholder="Enter list title..."
                className="w-full rounded-md px-3 py-2 mb-2 focus:outline-none bg-gray-600 text-white"
                autoFocus
              />
              <div className="flex justify-between items-center">
                <button
                  onClick={handleAddList}
                  className="bg-gray-400 text-black rounded-md px-3 py-2 text-sm font-medium"
                >
                  Add list ➕
                </button>2
                <button
                  onClick={() => {
                    setIsAddingList(false);
                    setListName("");
                  }}
                  className="text-gray-400 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setIsAddingList(true)}
              className="flex items-center gap-2 rounded-md px-4 py-2 border-2 border-gray-700 hover:bg-gray-600"
            >
              <Plus size={25} className="text-white" />
              <span className="text-white">Add list </span>
            </button>
          )}
        </div>
      </DragDropContext>

      {selectedCard && (
        <TrelloLikeModal
          card={selectedCard}
          onClose={closeCardModal}
          onSave={updateCard}
        />
      )}

    </div>
  );
}

export default Home;

import { useState } from 'react';
import TaskGuardianNavbar from "./navbar";
import { MessageCircle, Clock, MoreHorizontal, Send, Plus } from 'react-feather';
import ProfileLogo from '../utils/profile.jpg';

function Messages() {
  const chats = {
    1: [
      { message: 'Hey, how are you?', time: '12:45 PM' },
      { message: 'I was thinking about the project.', time: '1:30 PM' }
    ],
    2: [
      { message: 'Can we discuss the project?', time: '2:10 PM' },
      { message: 'I have some ideas to share.', time: '2:45 PM' }
    ],
    3: [
      { message: 'Let’s catch up later!', time: '4:30 PM' },
      { message: 'Sure, see you soon!', time: '4:45 PM' }
    ],
  };

  const people = [
    { id: 1, name: 'Rocky', profilePic: ProfileLogo },
    { id: 2, name: 'Antony', profilePic: ProfileLogo },
    { id: 3, name: 'Madison', profilePic: ProfileLogo },
  ];

  const [selectedPerson, setSelectedPerson] = useState(null);
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message) {
      chats[selectedPerson].push({ message, time: 'Just Now' });
      setMessage("");
    }
  };

  // Helper function to get the last message and truncate if necessary
  const getLastMessage = (personId) => {
    const lastMessage = chats[personId]?.[chats[personId].length - 1]?.message || '';
    return lastMessage.length > 30 ? lastMessage.slice(0, 30) + '...' : lastMessage;
  };

  return (
    <>
      <TaskGuardianNavbar />

      <div className="flex flex-col h-screen overflow-hidden font-poppins">
        <div className="flex flex-1 overflow-hidden ml-[250px]"> 
          
          <div className="w-[500px] bg-blue-300 p-4 border-4 border-gray-300 overflow-y-auto relative rounded-lg">
            <h2 className="text-4xl text-center mb-4">Chats</h2>
            <div className="mb-4">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search contacts..."
                className="w-full p-2 rounded-lg border border-gray-300"
              />
            </div>
            <div className="space-y-4">
              {people
                .filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()))  // Filter contacts based on search term
                .map((person) => (
                <div
                  key={person.id}
                  className="flex items-center p-4 bg-white rounded-2xl shadow-md cursor-pointer hover:bg-gray-300"
                  onClick={() => setSelectedPerson(person.id)} 
                >
                  <img
                    src={person.profilePic}
                    alt="Profile"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold">{person.name}</h3>
                    <p className="text-sm text-gray-600">{getLastMessage(person.id)}</p> {/* Show last message preview */}
                  </div>
                  <span className="text-sm text-gray-500"><Clock size={16} /> Last seen: 5 mins ago</span>
                </div>
              ))}
            </div>

            <div className="absolute bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full cursor-pointer shadow-lg hover:bg-blue-600">
              <Plus size={30} />
            </div>
          </div>

          <div className="flex-1 bg-white p-4 flex flex-col overflow-hidden">
            {selectedPerson ? (
              <>
                <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-4">
                  <div className="flex items-center">
                    <img
                      src={people[selectedPerson - 1].profilePic}
                      alt="Profile"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-bold">{people[selectedPerson - 1].name}</h3>
                      <p className="text-sm text-gray-600">Online</p>
                    </div>
                  </div>
                  <MoreHorizontal className="cursor-pointer" size={20} />
                </div>

                {/* Chat messages */}
                <div className="flex-1 overflow-y-auto space-y-4 mb-4 max-h-[60vh]">
                  {chats[selectedPerson].map((chat, index) => (
                    <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-md">
                      <MessageCircle size={24} className="mr-3" />
                      <div>
                        <p className="text-sm text-gray-600">{chat.message}</p>
                      </div>
                      <span className="ml-auto text-sm text-gray-500">{chat.time}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center p-3 bg-gray-100 rounded-lg mt-auto">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 p-2 rounded-lg border border-gray-300 mr-2"
                  />
                  <button onClick={handleSendMessage} className="bg-blue-500 text-white p-2 rounded-full">
                    <Send size={20} />
                  </button>
                </div>
              </>
            ) : (
              <div className="flex text-3xl justify-center items-center h-full text-gray-900">
                <p>Click on a profile to see chat messages</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Messages;

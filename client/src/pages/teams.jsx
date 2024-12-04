import TaskGuardianNavbar from "./navbar";
import { Card } from "@nextui-org/react";
import { Plus, Search } from "react-feather";
import ProfileLogo from '../utils/profile.jpg';

function Teams() {
    const teamschema = [
        {
            id: 1,
            teamname: "MLSA-SRM",
            teamlead: "Shivam",
            teamdomain: "Machine Learning",
        },
        {
            id: 2,
            teamname: "Dbug-Labs",
            teamlead: "Manager",
            teamdomain: "Backend Development",
        },
    ];

    const suggestedProfiles = [
        { id: 1, name: "Rocky", designation: "Frontend Developer", profileuri: ProfileLogo },
        { id: 2, name: "Madison", designation: "Data Scientist", profileuri: ProfileLogo },
        { id: 3, name: "Antony", designation: "Backend Developer", profileuri: ProfileLogo },
        { id: 4, name: "Sara", designation: "UI/UX Designer", profileuri: ProfileLogo },
        { id: 5, name: "Veronica", designation: "Project Manager", profileuri: ProfileLogo },
    ];

    return (
        <>
            <TaskGuardianNavbar />
            <div className="h-screen w-full font-poppins flex flex-col">
                <div className="relative overflow-y-auto ml-[250px] h-screen p-6">
                    {teamschema.length > 0 ? (
                        <div className="flex flex-col h-[250px] border-8 rounded-3xl border-zinc-200">
                            <h1 className="font-bold text-2xl ml-[25px] mt-[10px]">Your Teams</h1>
                            <div className="flex flex-row gap-4 ml-[25px]">
                                {teamschema.map((team) => (
                                    <Card
                                        key={team.id}
                                        className="flex flex-col w-[300px] h-[150px] mt-[20px] ml-[20px] hover:cursor-pointer hover:bg-blue-800 hover:text-slate-200 bg-blue-300 border-4 border-dashed justify-center rounded-xl shadow-2xl"
                                    >
                                        <div className="text-center">
                                            <h3 className="text-2xl font-bold mr-[130px]">{team.teamname}</h3>
                                            <p className="text-[11px] italic mr-[130px]">Domain-Head: {team.teamlead}</p>
                                            <p className="text-[13px] mt-[50px] mr-[50px]">Domain: {team.teamdomain}</p>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="flex justify-center items-center h-[150px] shadow-2xl rounded-3xl">
                            <h2 className="text-2xl text-gray-500">You are not in any Teams</h2>
                        </div>
                    )}

                    <div className="flex flex-row gap-[700px] mt-[40px]">
                        <div className="w-[300px] h-[200px] bg-black rounded-3xl shadow-2xl flex flex-col items-center text-center">
                            <p className="h-[25px] w-full text-amber-300 font-semibold mt-4">Call your Meet</p>
                            <div className="w-[200px] h-[155px] mt-[10px] mb-[20px] bg-amber-400 rounded-3xl flex flex-col items-center justify-center space-y-4 p-4">
                                <button className="flex items-center text-slate-100 bg-black hover:bg-amber-300 hover:text-black p-2 rounded-lg shadow-lg focus:outline-none transition duration-200">
                                    <Plus className="mr-2" size={18} />
                                    New Meeting
                                </button>
                                <div className="w-[150px] h-[3px] bg-black rounded-3xl" />
                            </div>
                        </div>

                        <div className="w-[300px] h-[200px] bg-slate-100 rounded-3xl shadow-2xl flex flex-col items-center text-center border-4 border-dashed">
                            <p className="h-[25px] w-full font-semibold mt-4">Create Your Team</p>
                            <div className="w-[220px] h-[155px] mt-[10px] mb-[20px] bg-blue-500 rounded-3xl flex flex-col items-center justify-center space-y-4 p-4">
                                <button className="flex items-center bg-black text-slate-100 hover:bg-blue-700 p-2 rounded-lg shadow-lg focus:outline-none transition duration-200">
                                    <Plus className="mr-2" size={18} />
                                    New Team
                                </button>
                                <div className="w-[150px] h-[3px] bg-black rounded-3xl" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 border-t border-gray-300 pt-6">
                        <div className="mb-6 flex items-center">
                            <input
                                placeholder="Search people..."
                                className="border border-gray-300 rounded-lg w-full h-[40px] pl-4 pr-12 text-lg"
                            />
                            <Search className="absolute right-4 text-gray-500" size={24} />
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold mb-4">Suggested Profiles</h2>
                            <div className="space-y-4">
                                {suggestedProfiles.map((profile) => (
                                    <div key={profile.id} className="flex items-center p-3 bg-gray-100 rounded-lg shadow-md">
                                        <img src={profile.profileuri} alt="Profile" className="w-10 h-10 rounded-full mr-4" />
                                        <div className="flex-1">
                                            <h3 className="text-md font-bold">{profile.name}</h3>
                                            <p className="text-sm text-gray-600">{profile.designation}</p>
                                        </div>
                                        <button className="text-amber-500 hover:text-amber-700 transition duration-200">
                                            <Plus size={20} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Teams;

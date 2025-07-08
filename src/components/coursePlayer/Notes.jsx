import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Notes = ({ videoId }) => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const userList = JSON.parse(localStorage.getItem("userList"));

  const { setUserData } = useContext(AuthContext);

  // const [updatedList, setUpdatedList] = useState([]);
  let updatedList = userList.filter((ele) => ele.email !== userData.email);

  const [userNotes, setUserNotes] = useState("");

  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const updatedUserData = JSON.parse(localStorage.getItem("userData"));
    setUserData(updatedUserData);

    const notesData = userData.notes.find((ele) => ele.videoId === videoId);
    if (notesData) {
      setUserNotes(notesData.note);
      setIsDisabled(true);
    } else {
      setUserNotes("");
      setIsDisabled(false);
    }
  }, [videoId]);

  const handleSaveNotes = () => {
    const notesData = {
      videoId: videoId,
      note: userNotes,
    };
    userData.notes = userData.notes.filter((ele) => ele.videoId !== videoId);
    userData.notes.push(notesData);
    updatedList.push(userData);
    localStorage.setItem("userData", JSON.stringify(userData));
    localStorage.setItem("userList", JSON.stringify(updatedList));
    document.querySelector(".saved-popup").classList.remove("hidden");
    setTimeout(() => {
      document.querySelector(".saved-popup").classList.add("hidden");
    }, 1500);
  };

  const handleEditNotes = () => {
    setIsDisabled(false);
    document.querySelector(".edit-popup").classList.remove("hidden");
    setTimeout(() => {
      document.querySelector(".edit-popup").classList.add("hidden");
    }, 1500);
  };

  return (
    <div className="w-[40%] h-[30vh] ml-[10%] mt-20">
      <div className="saved-popup text-white bg-green-500 w-[20%] left-[40%] top-[0] mt-6 text-center font-semibold rounded-lg py-2 fixed hidden">
        Notes Saved
      </div>
      <div className="edit-popup text-white bg-[#E63600] w-[20%] left-[40%] top-[0] mt-6 text-center font-semibold rounded-lg py-2 fixed hidden">
        You can now edit your notes
      </div>

      <h2 className="text-xl font-bold px-5">Notes</h2>
      <div className="text-area mt-3 h-[70%]">
        <textarea
          name="notes"
          id="notes"
          disabled={isDisabled}
          value={userNotes}
          onChange={(e) => setUserNotes(e.target.value)}
          className="px-6 py-3 bg-slate-700 rounded-lg resize-x w-[100%] outline-none"
          rows="5"
          placeholder="Write your notes here..."
        ></textarea>
      </div>
      <div className="btns flex gap-8 px-4">
        <div
          className="save-notes px-4 py-1 text-sm rounded bg-green-700 text-white cursor-pointer active:scale-90"
          onClick={handleSaveNotes}
        >
          Save Notes
        </div>

        <div
          className="edit px-4 rounded py-1 text-white bg-orange-600 text-sm cursor-pointer active:scale-90"
          onClick={handleEditNotes}
        >
          Edit Notes
        </div>
      </div>
    </div>
  );
};

export default Notes;

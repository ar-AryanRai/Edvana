import React from "react";

const VideoList = ({
  playlistData,
  nextPageToken,
  handleVideoChange,
  loadData,
}) => {
  return (
    <div className="w-[38%] ml-10 mb-20 pt-8">
      <h2 className="text-2xl font-bold mb-4 mt-10">Course Lectures</h2>
      <div className="border-2 border-slate-600 rounded-lg px-4 py-2 h-[100vh] overflow-auto">
        {playlistData.map((ele, idx) => (
          <div className="video-det-container flex" key={`${idx}`}>
            <div className="right-left flex items-center mt-2 mr-2 text-[14px] font-bold">{`${
              idx + 1
            })`}</div>
            <div
              className="video-det flex mb-3 w-[95%] rounded-lg overflow-hidden cursor-pointer bg-slate-700 hover:scale-[1.02] active:scale-95 transition-scale duration-100"
              onClick={() => {
                const videoIndex = idx;
                handleVideoChange(videoIndex);
              }}
            >
              <div className="left w-[26%] bg-cover bg-center p-1">
                <img
                  src={ele.snippet?.thumbnails?.default?.url}
                  width={ele.snippet?.thumbnails?.default?.width}
                  height={ele.snippet?.thumbnails?.default?.height}
                  className="rounded"
                  alt=""
                />
              </div>
              <div className="right w-[70%]">
                <h3 className="text-[13px] font-bold mt-2">
                  {ele.snippet.title}
                </h3>
                <p className="text-[14px] mt-2">{ele.snippet.channelTitle}</p>
              </div>
            </div>
          </div>
        ))}

        {nextPageToken && (
          <button
            onClick={() => {
              loadData();
            }}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded ml-50 cursor-pointer active:scale-90"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoList;

import React, { useEffect, useState } from "react";
import NavBar from "../components/courses/NavBar";
import PopularCourses from "../components/courses/PopularCourses";
import OtherCourses from "../components/courses/OtherCourses";
import SearchResult from "../components/courses/SearchResult";

const Courses = ({ isLoggedIn, setIsLoggedIn, apiKey }) => {
  const [searched, setSearched] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchData, setSearchData] = useState([]);

  const fetchData = async (prompt) => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${prompt}&type=playlist&part=snippet`
    );
    const data1 = await response.json();
    return data1.items;
  };

  const fetchData2 = async (prompt) => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${prompt}&type=playlist&part=snippet&maxResults=50`
    );
    const data = await response.json();
    return data.items;
  };

  const handleSearchEvent = () => {
    setSearchData([]);
    setSearched(true);
  };

  useEffect(() => {
    fetchData(searchValue).then((res) => {
      setSearchData(res);
    });

    fetchData2(searchValue).then((res) => {
      setSearchData((prev) => [...prev, ...res]);
    });
  }, [searched, searchValue]);

  return (
    <div className="max-w-screen min-h-screen ">
      <NavBar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setSearched={setSearched}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setSearchData={setSearchData}
        handleSearchEvent={handleSearchEvent}
      />

      {!searched ? (
        <>
          <div className="explore relative  w-[100%] h-[70vh] bg-[url('./src/images/explore.jpg')] bg-cover bg-no-repeat bg-center">
            <div className="texts w-[30%] h-[40%] absolute bottom-20 left-50 px-10 py-5 text-white">
              <h1 className="text-5xl font-bold mb-8">Explore Courses</h1>

              <p>Learn something new today</p>

              <div className="start bg-[#E63600] w-[40%] text-center py-2 mt-5 rounded-md ">
                Start Learning
              </div>
            </div>
          </div>
          <PopularCourses fetchData={fetchData} />
          <OtherCourses fetchData={fetchData} />
        </>
      ) : (
        <SearchResult
          fetchData={() => fetchData2(searchValue)}
          data={searchData}
          searchValue={searchValue}
        />
      )}
    </div>
  );
};

export default Courses;

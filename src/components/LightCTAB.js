import React, { useState } from "react";
import PropTypes from "prop-types";
import LightTeamA from "./LightTeamA";
function LightCTAB(props) {
  const [person, setperson] = useState({
    firstName: "",
    email: "",
    website: "",
    gender: "",
    imgLink: "",
    html: "",
    css: "",
    js: "",
  });
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.website && person.gender) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setperson({
        firstName: "",
        email: "",
        website: "",
        gender: "",
        imgLink: "",
        html: "",
        css: "",
        js: "",
      });
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    let checkit = e.target.checked;

    setperson({ ...person, [name]: value });
    if (checkit == true && name == "html") {
      setperson({ ...person, html: "html" });
    }

    if (checkit == false && name == "html") {
      setperson({ ...person, html: "" });
    }
    if (checkit == true && name == "css") {
      setperson({ ...person, css: "css" });
    }
    if (checkit == false && name == "css") {
      setperson({ ...person, css: "" });
    }
    if (checkit == true && name == "js") {
      setperson({ ...person, js: "js" });
    }
    if (checkit == false && name == "js") {
      setperson({ ...person, js: "" });
    }
  };
  const handleClear = (e) => {
    setPeople([]);
    window.location.reload(false);
  };
  return (
    <section className="text-gray-600 body-font">
      <div
        className="container px-5 py-5 mx-auto flex flex-wrap items-center"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
      >
        <LightTeamA people={people} />
        <div className=" bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
          <div className="relative mb-4">
            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              value={person.firstName}
              onChange={handleChange}
              id="full-name"
              name="firstName"
              className={`w-full bg-white rounded border border-gray-300 focus:border-${props.theme}-500 focus:ring-2 focus:ring-${props.theme}-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              value={person.email}
              onChange={handleChange}
              id="email"
              name="email"
              className={`w-full bg-white rounded border border-gray-300 focus:border-${props.theme}-500 focus:ring-2 focus:ring-${props.theme}-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="website" className="leading-7 text-sm text-gray-600">
              Website
            </label>
            <input
              type="text"
              value={person.website}
              onChange={handleChange}
              id="website-text"
              name="website"
              className={`w-full bg-white rounded border border-gray-300 focus:border-${props.theme}-500 focus:ring-2 focus:ring-${props.theme}-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Image Link
            </label>
            <input
              type="text"
              id="img-link"
              value={person.imgLink}
              onChange={handleChange}
              name="imgLink"
              className={`w-full bg-white rounded border border-gray-300 focus:border-${props.theme}-500 focus:ring-2 focus:ring-${props.theme}-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
            />
          </div>
          {/* ------- start of geder---------- */}
          <div
            className="relative mb-4"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Gender
            </label>
            <div className="flex justify-center">
              <div style={{ display: "flex", margin: "0 0px" }}>
                {/* -------------- */}
                <div className="form-check" style={{ margin: "0 60px" }}>
                  <input
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={handleChange}
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="flexRadioDefault1"
                  >
                    Male
                  </label>
                </div>

                {/* -------------- */}
                {/* -------------- */}
                <div className="form-check" style={{ margin: "0 60px" }}>
                  <input
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={handleChange}
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="flexRadioDefault1"
                  >
                    Female
                  </label>
                </div>

                {/* -------------- */}
              </div>
            </div>
          </div>
          {/* ------- end of gender---------- */}
          {/* ------- start of skills---------- */}
          <div className="relative mb-4" style={{ display: "flex" }}>
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Skills
            </label>
            <div className="flex justify-center">
              <div style={{ display: "flex" }}>
                {/* -------------- */}
                <div className="form-check" style={{ margin: "0 50px" }}>
                  <input
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    onChange={handleChange}
                    value={person.html}
                    name="html"
                    id="flexCheckDefault1"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="flexCheckDefault1"
                  >
                    HTML
                  </label>
                </div>
                {/*  */}
                {/* -------------- */}
                <div className="form-check" style={{ margin: "0 50px" }}>
                  <input
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    onChange={handleChange}
                    value={person.css}
                    name="css"
                    id="flexCheckDefault2"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="flexCheckDefault2"
                  >
                    CSS
                  </label>
                </div>
                {/*  */}
                {/* -------------- */}
                <div className="form-check" style={{ margin: "0 50px" }}>
                  <input
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    onChange={handleChange}
                    value={person.js}
                    name="js"
                    id="flexCheckDefault3"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="flexCheckDefault3"
                  >
                    JavaScript
                  </label>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
          {/* ------- end of skills---------- */}
          <button
            onClick={handleSubmit}
            className={`text-white bg-${props.theme}-500 border-0 py-2 px-8 focus:outline-none hover:bg-${props.theme}-600 rounded text-lg`}
          >
            Submit
          </button>

          <button
            onClick={handleClear}
            className={`text-white bg-${props.theme}-500 border-0 py-2 px-8 my-5 focus:outline-none hover:bg-${props.theme}-600 rounded text-lg`}
          >
            Clear
          </button>
          <p className="text-xs text-gray-500 mt-3"></p>
        </div>
      </div>
    </section>
  );
}

LightCTAB.defaultProps = {
  theme: "indigo",
};

LightCTAB.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default LightCTAB;

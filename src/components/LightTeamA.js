import React from "react";

function LightTeamA({ people }) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-2" style={{ flexDirection: "column" }}>
          {people.map(({ firstName, email, website, gender, imgLink, html, css, js }) => {
            return (
              <div className="p-2   w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://dummyimage.com/80x80"
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">{firstName}d</h2>
                    <p className="text-gray-500">
                      <strong>Email:</strong> {email}
                    </p>
                    <p className="text-gray-500">
                      <strong>Website:</strong> {website}
                    </p>
                    <p className="text-gray-500">
                      <strong>Gender:</strong> {gender}
                    </p>
                    <p className="text-gray-500">
                      <strong>Img:</strong> {imgLink}
                    </p>
                    <p className="text-gray-500">
                      <strong>Skills:</strong> {html} {css} {js}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default LightTeamA;

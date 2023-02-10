import React, {useEffect, useState} from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useFetch } from "./useFetch";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
    
  const { users } = useFetch(url);
  const allCompanies = [...new Set(users.map((user) => user.company))];
  console.log(users);

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {allCompanies.map((company) => {
            return <button className="job-btn">{company}</button>;
          })}
        </div>
        {users.map((user) => {
            return <article className="job-info" key={id}>
              <h3>{title}</h3>
              <h4>{company}</h4>
              <p className="job-date">{dates}</p>
              {duties.map((duty) => {
                return (
                    <div>
                        <FaAngleDoubleRight className="job-icon" />
                        <p>{duty}</p>
                    </div>
                )
              })}
            </article>;
        })}
      </div>
    </section>
  );
};

export default App;

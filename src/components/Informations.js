import React, { useState, useEffect } from "react";
import $ from "jquery"; 
import { lists } from "./InfoList";


function Informations() {
  const [isOpen, setIsOpen] = useState(Array(11).fill(false)); 

  const toggleDropdown = (index) => {
    setIsOpen((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index]; 
      return newState;
    });
  };

  useEffect(() => {
    isOpen.forEach((open, index) => {
      const dropdown = $(`#dropdown-${index}`);
      if (open) {
        dropdown.slideDown();
      } else {
        dropdown.slideUp();
      }
    });
  }, [isOpen]); 

 

  const columns = [
    lists.slice(0, 2), 
    lists.slice(2, 4),
    lists.slice(4, 6), 
    lists.slice(6, 8), 
    lists.slice(8, 11), 
  ];

  return (
    <div className="container-lg  col-lg-12 col-md-12 col-12">
      <div className="row justify-content-center ">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="col-md-2 col-12  text-nowrap">
            {column.map((list, index) => {
              const listIndex = colIndex * 2 + index;
              return (
                <div key={listIndex}>
                  <li className="d-flex justify-content-between align-items-center fw-bolder mb-lg-2 mb-0 information spans list-unstyled">
                    <span className="ms-sm-2 ms-lg-0 ms-md-0">
                      {list.title}
                    </span>
                    <span
                      className="dropdownicon d-lg-none d-md-none px-3"
                      onClick={() => toggleDropdown(listIndex)}
                    >
                      {isOpen[listIndex] ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-x"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="16"
                          fill="currentColor"
                          className="bi bi-chevron-down"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                          />
                        </svg>
                      )}
                    </span>
                  </li>
                  <div
                    id={`dropdown-${listIndex}`} 
                    className={`d-lg-block d-md-block col-12 discr`}
                    style={{ display: "none" }}
                  >
                    {list.items.map((item, itemIndex) => (
                      
                      <li
                        key={itemIndex}
                        className="d-flex flex-row myli    mb-2 information spans px-2 px-lg-1 px-md-0 px-md-1 list-unstyled"
                      >
                        <a className=" text-decoration-none  " href={item.href}>{item.lable} </a>
                      </li>
                    ))}
                  </div>
                  <hr className="d-lg-none mx-auto d-md-none col-12 mt-0 pt-0" />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Informations;
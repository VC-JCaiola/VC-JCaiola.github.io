const populateNames = (last, first) => {

  const queryLib = [];

  const query = `${last}%2C+${first}`;

  const urlLib = {
    NYSCEF: `https://iapps.courts.state.ny.us/iscroll/AdvSearch12.jsp?Criteria=${query}&Submit3=Search`,
    CM_P: `https://iapps.courts.state.ny.us/iscroll/AdvSearchCC_P.jsp?Criteria=${query}&Submit2=Search`,
    CM_D: `https://iapps.courts.state.ny.us/iscroll/AdvSearchCC_D.jsp?Criteria=${query}&Submit3=Search`,
    CCOP_P: `https://iapps.courts.state.ny.us/iscroll/AdvSearch_P.jsp?Criteria=${query}&Submit2=Search`,
    CCOP_D: `https://iapps.courts.state.ny.us/iscroll/AdvSearch_D.jsp?Criteria=${query}&Submit3=Search`,
  };
  return urlLib;
};
const openTabs = (lib) => {
  for (const [site,url] of Object.entries(lib)) {
    window.open(url);
  }
};

const performSearch = () => {
  'use strict';
  let firstName;
  let lastName;
  firstName = document.getElementById('first').value;
  lastName =  document.getElementById('last').value

  openTabs(populateNames(lastName, firstName));

};

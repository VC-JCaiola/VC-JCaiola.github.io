const populateNames = (last, first) => {

  const queryLib = [];

  const query = `${last}`;
  // const queryReverse = `%22${last}+${first}%22`;
  const queryBIS = `${last}`;

  const urlLib = {
    BIS: `https://www.bis.doc.gov/index.php/smart-search?searchword=${queryBIS}&searchphrase=all`,
    CFPB: `https://search.consumerfinance.gov/search?utf8=%E2%9C%93&affiliate=cfpb&sort_by=&query=${query}`,
    DOJ: `https://search.justice.gov/search?utf8=%E2%9C%93&affiliate=justice&sort_by=&query=${query}`,
    DOJARCH: `https://search.justice.gov/search?utf8=%E2%9C%93&affiliate=justice-archive&sort_by=&query=${query}`,
    FTC: `https://search.usa.gov/search?utf8=%E2%9C%93&affiliate=ftc_prod&sort_by=&query=${query}`,
    SEC: `https://secsearch.sec.gov/search?utf8=%E2%9C%93&affiliate=secsearch&sort_by=&query=${query}`,
    SECED: `https://www.sec.gov/cgi-bin/srch-edgar?text=${query}&first=2004&last=2021`,
    USSC: `https://www.supremecourt.gov/search.aspx?Search=${query}&type=Site`,
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
  // firstName = document.getElementById('first').value;
  lastName =  document.getElementById('last').value
  

  openTabs(populateNames(lastName, firstName));

};

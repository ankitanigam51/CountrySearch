import { useState } from 'react';

const countries = ["India", "United States", "Canada", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and/or Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British lndian Ocean Territory", "Brunei Darussalam", "Bulgaria"];

const App = () => {
  const [result, setResult] = useState([]);

  const search = event => {
    // capture the input
    let value = event.target.value;
    if (value === '' || value.length === 0) {
      setResult([]);
    }
    let res = [];
    // process the data
    for (let i = 0; i < countries.length; i++) {
      for (let j = 0; j < countries[i].length && value.length; j++) {
        if (countries[i][j] === value[j]) {

          if (!res.includes(countries[i])) {
            res.push(countries[i]);
          }
        }
      }
    }

    setResult(res);

  }

  return (
    <div>
      <input type="text" onChange={search} />
      {result.length > 0 ? (
        result.map((item, index) => <p key={index.toString()}>{item}</p>)
      ) : null}
    </div>
  );

}


export default App;
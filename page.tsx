

export default function CountryName({params}: any) {

    const countries:{
        name : string,
        population: number
        capital: string
    }[] =  [{
        name: "Pakistan",
        population: 240000000,
        capital: "Islamabad"},
        {
            name: "India",
            population: 1200000000,
            capital: "New Dehli"},
            {
                name: "Japan",
                population: 123500000,
                capital: "Tokyo"},
                {
                    name: "England",
                    population: 57000000,
                    capital: "London"},
                    {
                        name: "Germany",
                        population: 84500000,
                        capital: "Berlin"}]

        function findCountry(country_url:string){
            return countries.find(country=> country.name.toLowerCase()==country_url.toLowerCase())
        }
        let result = findCountry(params.country_name)
    return (
      <div>
        {
            result ? (
                <>
                   <h1>Country Name : {result.name}</h1>
                    <h2>Country Capital: {result?.capital}</h2>
                    <h2>Country Population: {result?.population}</h2>
                </>
            ):(
                <h1>Ciountry Not Found</h1>
            )
        }


      </div>
    );
  }
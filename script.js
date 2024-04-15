/*var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  //console.log(data);
  var result = JSON.parse(data);
  console.log(result);
  //for accessing multiple values use looping
  //!using for loop
  for (var i = 0; i < result.length; i++) {
    console.log(result[i].area);
  } 
//!using for in loop
 for (let index in result){
    console.log(result[index].region)
 }
 //!using for of loop
 for(let obj of result){
    console.log(obj.subregion,obj.population,obj.name.common);
 }
};*/
  
 
 //JSON iterate over all for loops
 /*const jsonObject = {
    "name": "deeparasi",
    "age": 21,
    "city": "Chennai"
  };
  
  for (let key in jsonObject) {
    if (jsonObject.hasOwnProperty(key)) {
      console.log(key + ": " + jsonObject[key]);
    }
  }
  const jsonArray = [
    {
      "name": "deeparasi",
      "age": 21,
      "city": "Chennai"
    },
    {
      "name": "arivan",
      "age": 26,
      "city": "Chennai"
    }
  ];
  
  for (let obj of jsonArray) {
    console.log(obj.name + " is " + obj.age + " years old and lives in " + obj.city);
  }
      
  //printing JSON using for of and for each
  const detail = {
    "name": "deepa",
    "age": "15"
  }
  const data =Object.entries(detail)
  console.log(data);
  for(var [key,value] of data){
    console.log(value);
  }
  data.forEach(([key ,value])=>console.log(val));

//Create your own resume data in json format
myResume={
    "basics": {
      "name": "deeparasi",
      "email": "deepa.deeparasi17@gmail.com",
      "phone": 9042487448,
      "degree": "MCA",
      "location": {
        "address": "no 2/253 meettu street ,v puthur village ,kandaachipuram tk,vizhuppuram dis",
        "postalCode":  605752,
        "city": "Chennai",
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles": [
        {
          "github":"https://github.com/Deeparasi-arivan"
        }
      ]
    },
    
    "education": [
      {
        "institution": "ARS college of engineering ",
        "department": "master of Computer application",
        "studyType": "fulltime",
        "batch start year": 2011,
        "batch end year": 2015,
        "percentage" : 82 
      }
    ],
    "skills": [
      {
        "name": "javascript,html,css,bootshrap,dom",
        "level": "beginner",
      }
    ],
    "languages": [
      {
        "language": "Tamil,Enlish,Telugu",
      }
    ],
  }
  console.log(myResume);*/
  
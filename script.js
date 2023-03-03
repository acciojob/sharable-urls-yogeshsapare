// your code here
function formSubmit(event)
{
  event.preventDefault()
  const name = document.getElementById("name").value;
  const year = document.getElementById("year").value;
  const url = document.getElementById("url");
  console.log(url.innerHTML)
  console.log(year)
  if(name && year)
  {
    url.innerText = "https://localhost:8080/" + `?name=${name}`+`&year=${year}`;
  }
  else if(year && !name)
  {
    url.innerText = "https://localhost:8080/" + `?year=${year}`;
  }
  else if(!year && name)
  {
    url.innerText = "https://localhost:8080/" + `?name=${name}`;
  }
 
}
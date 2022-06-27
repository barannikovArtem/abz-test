const MAIN_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/'
export const getToken = async () => 
  await fetch(`${MAIN_URL}token`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => new Error(err))

export const getUsers = async () => {
  
}
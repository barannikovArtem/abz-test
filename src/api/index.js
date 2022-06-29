const MAIN_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/'
export const getToken = async () => 
  await fetch(`${MAIN_URL}token`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => new Error(err))

export const getUsersFromServer = async(count, setter1, setter2) => {
    const response = fetch(`${MAIN_URL}users?page=1&count=${count}`)
    .then(async(resp) => {
      const data = await resp.json();
      console.log(data)
      setter1(data.users)
      setter2(data.total_users)
    })
  }

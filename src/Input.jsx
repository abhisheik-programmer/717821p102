import axios from 'axios'

function Input() {
  const GetToken = async () => {
    try {
      const userData = {
        companyName: 'goMart',
        ownerName: 'Abhisheik D',
        rollNo: '717821p102',
        ownerEmail: 'd.abhisheik1@gmail.com',
        accessCode: 'FKDLjg'
      }

      const response = await axios.post('https://20.244.56.144/products/register', userData)
      console.log(response.data)
    } catch (error) {
      console.error(error.response.data)
    }
  }

  return (
    <div>
      <button onClick={GetToken}>GetToken</button>
    </div>
  )
}

export default Input;
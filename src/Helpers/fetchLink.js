const fetchLink = ({address, alias}, setShorty) => {
  fetch('https://shylink.herokuapp.com/urls', {
  method: 'POST', 
  headers: {
    'content-type': 'application/json',
    'accept': 'application/json',
  }, 
  body: JSON.stringify({
    long_address: address,
    short_address: '', 
    alias: alias
  })
})
  .then(resp => resp.json())
  .then(data => {
    setShorty(data.short_address)
  })
}

export default fetchLink
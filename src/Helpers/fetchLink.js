const fetchLink = ({address, alias}, setShortcutID) => {
  // fetch('https://shylink.herokuapp.com/urls', {
  fetch('http://localhost:3000/urls', {
  method: 'POST', 
  headers: {
    'content-type': 'application/json',
    'accept': 'application/json',
  }, 
  body: JSON.stringify({
    full_address: address,
    shortcut_id: '', 
    alias: alias
  })
})
  .then(resp => resp.json())
  .then(data => {
    setShortcutID(data.shortcut_id)
  })
}

export default fetchLink
import Dispatcher from '../dispatchers/dispatcher'

export function getRoster(team){
  const params = {
    method:'GET',
    headers: {'Content-Type': 'application/json'}
  }
  fetch("http://localhost:4000/showRoster/" + team, params).then(function(response){
    if(response.status === 200){
      response.json().then(function(body){
        Dispatcher.dispatch({
          type: 'SHOW_TEAM',
          team: body.team
        })
      })
    }
  }).catch(function(error){
    console.log(error);
  })
}


export function addPlayer(attributes){
  const params = {
    method:'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(attributes)
  }
  fetch("http://localhost:4000/add", params).then(function(response){
    if(response.status === 200){
      response.json().then(function(body){
        Dispatcher.dispatch({
          type: 'CREATE_PLAYER',
          player: body.player
        })
      })
    }
  }).catch(function(error){
    console.log(error);
  })
}

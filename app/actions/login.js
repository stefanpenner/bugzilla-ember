import getJSON from 'bugzilla/utils/get_json';
import urlFor from 'bugzilla/utils/url_for';

function login(username, password){
  var params =  {
    login: username,
    password: password
  };

  // FIXME: proper auth API endpoint
  return getJSON(urlFor("login"), params);
}

export default login;

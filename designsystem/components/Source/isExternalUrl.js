export default (baseUrl, url) => {




  var matchInternal = new RegExp("^(\/)|("+ baseUrl +")", "i");









  if(typeof url == 'undefined' || url == "#") {




    return false




  } else {




    return !matchInternal.test(url);




  }




};
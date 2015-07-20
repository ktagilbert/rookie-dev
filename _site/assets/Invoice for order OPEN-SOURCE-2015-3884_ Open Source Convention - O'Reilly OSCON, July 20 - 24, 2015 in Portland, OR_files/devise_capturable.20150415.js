function janrainDefaultSettings() {
  if (typeof window.janrain !== 'object') window.janrain = {};
  window.janrain.settings = {
    language: 'en',
    actionText: ' ',
    tokenAction: 'event',
    packages: ['login', 'capture'],
    capture: {
      flowVersion: 'HEAD',
      keepProfileCookieAfterLogout: true,
      modalCloseHtml: '<span class="janrain-icon-16 janrain-icon-ex2"></span>',
      federate: true,
      federateEnableSafari: true,
      responseType: 'code',
      setProfileCookie: true,
      transactionTimeout: 10000
    }
  };
};

function janrainInitLoad() {
  function isReady() { janrain.ready = true; };
  if (document.addEventListener) {
      document.addEventListener("DOMContentLoaded", isReady, false);
  } else {
      window.attachEvent('onload', isReady);
  }
  var injector = document.createElement('script');
  injector.type = 'text/javascript';
  injector.id = 'janrainAuthWidget';
  if (document.location.protocol === 'https:') {
    injector.src = window.widget_https_load_url;
  } else {
    injector.src = window.widget_http_load_url;
  }
  var firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode.insertBefore(injector, firstScript);
};

window.addEventListener('message', receiveCoinbaseMessage, false);
function receiveCoinbaseMessage(event) {
  if (event.origin == 'https://www.coinbase.com') {
    // coinbase_payment_{complete|mispaid|expired}
    var event_type = event.data.split('|')[0];
    // ID for this payment type
    var code = event.data.split('|')[1];

    if (event_type == 'coinbase_payment_complete') {
      if (console && console.log) {
        console.log("Payment completed for button " + code);
      }
      setTimeout(function() {
        window.location = $("iframe[data-success-url]").data("success-url");
      }, 7000);
    }

    else if (event_type == 'coinbase_payment_mispaid') {
      if (console && console.log) {
        console.log("Payment mispaid for button " + code);
      }
      // Don't redirect mispayment. Allow the user to take the next action.
    }

    else if (event_type == 'coinbase_payment_expired') {
      // Do nothing for now.  The iframe will reflect this state.
    }
  }
}

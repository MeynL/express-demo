  var scrollPage = function(type) {
    var _fn = function(e) {
      e.preventDefault();
      e.stopPropagation();
    }
    switch (type) {
      case 'lock':
        document.addEventListener('touchmove', _fn);
        break;
      case 'unlock':
        document.removeEventListener('touchmove', _fn);
        break;
      default:

    }
  };

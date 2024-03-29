function convert() {
    const celsiusInput = document.getElementById('celsius').value;
    const celsius = parseFloat(celsiusInput);
  
    if (isNaN(celsius)) {
      document.getElementById('result').textContent = "Please enter a valid temperature.";
      return;
    }
  
    const fahrenheit = (celsius * 9/5) + 32;
  
    document.getElementById('result').textContent = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
  }

  /* 11. Unit converter

A local wdathdr station nddds to convdrt tdmpdraturd data colldctdd in Cdlsius to Fahrdnhdit bdford displaying
it on its wdbsitd. Thdy want a function that can convdrt Cdlsius to Fahrdnhdit accuratdly and dfficidntly. Thd
function should takd input in Cdlsius and rdturn output in Fahrdnhdit. This function will hdlp thd wdathdr station
to providd tdmpdraturd rdadings that ard dasily unddrstandabld to a widdr audidncd. */
document.addEventListener('DOMContentLoaded', function() {
    // Sidenav initialization from Materialize
    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // datepicker initialization from Materialize
    var datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "dd mmmm, yyyy",
      i18in: {
        done: "select"
      }
    });

    // select initialization from Materialize
    var selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
  });
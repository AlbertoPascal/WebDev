$(perfilAdmin.html).ready(function () {
    $('#table').DataTable();
    $('.dataTables_length').addClass('bs-select');
  });

  // Basic example
$(perfilAdmin.html).ready(function () {
    $('#table').DataTable({
      "pagingType": "simple" // "simple" option for 'Previous' and 'Next' buttons only
    });
    $('.dataTables_length').addClass('bs-select');
  });
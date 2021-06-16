$(document).ready(function (){
  function poll(){
    $.ajax({
            url: '/get_data',
            dataSrc: 'data',
            type: 'GET',
      success: function(data){
        console.log(data)
        $('#jds-example').html('');

        var column_data = '';
        column_data += '<tr>';

        for (var key in data[0]){
            column_data += '<th>' + key + '</th>'
        };

        column_data += '</tr>';
        $('#jds-example').append(column_data),
        $('th').css({'background-color':'#FFA500', 'color': 'white'});

        var row_data = '';
        for (var arr in data){
            var obj = data[arr];
            row_data += '<tr>';
            for (var key in obj){
                var value = obj[key];
                row_data += '<td>' + value + '</td>';
            };
            row_data += '</tr>'
        };
        $('#jds-example').append(row_data);
      },
      timeout: 10000                    // == 10 seconds timeout
    }).always(function(){
      setTimeout(poll, 5000)           // == 30 seconds polling period
    })
  }

  // start polling
  poll()
})


$(function () {
  var json = {
    username: '',
    password: ''
  };
  $.ajax({
    url: '/login123',
    dataType: 'json',
    success: (res) => {
      debugger
    }
  })
})

// lOGIN AND REGISTER
	$(document).ready(function(){
		$('.signup form').on('submit',function(e){
		    e.preventDefault();
		    var data = {
		    	fullname: $('input[name=fullnamesignup]').val(),
		    	username: $('input[name=emailsignup]').val(),
		    	password: $('input[name=passwordsignup]').val(),
		    }

		   var  passconfirm = $('input[name=passwordsignup_confirm]').val()

		   if (data.fullname.length < 6 || data.password.length < 6) {
		    	console.log('fullname and password must be atleast 6 character.');
		    	return;
		    };
		    if (data.password != passconfirm) {
		    	console.log('password and password confirm are not match.')
		    	return;
		    };

		    console.log(data);

		    $.ajax({
		        type     : "POST",
		        cache    : false,
		        url      : $(this).attr('action'),
		        data     : data,
		        success  : function(data) {
		        	console.log(data);
		        	var el = $(".printArea");
		            el.attr('class','printArea '+data.status).empty().html(data.text).slideDown();
		            setTimeout(function(){el.slideUp()},10000)
		        },
		        error: function(err){
		        	console.log(err);
		        }
		    });

		});
	})

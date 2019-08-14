// подключаем библиотеки из bower
//=../bower_components/jquery/dist/jquery.js
//= datepicker.min.js

$(function () {
	var pickerStart = datepicker('#date-start', {
		formatter: function (input, date, instance) {
			var value = date.toLocaleDateString('Ru')
			input.value = value 
		},
		customDays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],

	}).hide();
	var pickerEnd = datepicker('#date-end', {

		formatter: function (input, date, instance) {
			var value = date.toLocaleDateString()
			input.value = value 
		},
		customDays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
	}).hide();

	$('.header-date__close').on('click', function(e){
		$(this).siblings('#date-start').val('');
		$(this).siblings('#date-end').val('');
	})

})
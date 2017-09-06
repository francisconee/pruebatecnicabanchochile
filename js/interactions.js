$('#abrir').click(function(){
	if($(this).text() == 'Cerrar'){
		$(this).text('Abrir');
	} else {
		$(this).text('Cerrar');
	}
});

$(".form_datetime").datetimepicker({
	format: "dd MM yyyy - hh:ii",
	autoclose: true,
	todayBtn: true,
	pickerPosition: "bottom-right"
});
$(document).ready(function() {
	$( ".bookspace" ).click(function() {
		$("#bookspacecard").css("visibility", "visible");
		let _trId = $(this).parent().attr("id");
		let _tdValue = $("_trId td:first-child").html();
		console.log(_trId);
		switch(_trId) {
			case 'bookspace1':
				let _firsttd1 = $(this).closest('tr').children('td:first').text();;
				console.log(_firsttd1);
				$("#firstTdvalue").text(_firsttd1);
				break;
			case 'bookspace2':
				let _firsttd2 = $(this).closest('tr').children('td:first').text();;
				console.log(_firsttd2);
				$("#firstTdvalue").text(_firsttd2);
				break;
			case 'bookspace3':
				let _firsttd3 = $(this).closest('tr').children('td:first').text();;
				console.log(_firsttd3);
				$("#firstTdvalue").text(_firsttd3);
				break;
			case 'bookspace4':
				let _firsttd4 = $(this).closest('tr').children('td:first').text();;
				console.log(_firsttd4);
				$("#firstTdvalue").text(_firsttd4);
				break;
			case 'bookspace5':
				let _firsttd5 = $(this).closest('tr').children('td:first').text();;
				console.log(_firsttd5);
				$("#firstTdvalue").text(_firsttd5);
				break;
			case 'bookspace6':
				let _firsttd6 = $(this).closest('tr').children('td:first').text();;
				console.log(_firsttd6);
				$("#firstTdvalue").text(_firsttd6);
				break;
			case 'bookspace7':
				let _firsttd7 = $(this).closest('tr').children('td:first').text();;
				console.log(_firsttd7);
				$("#firstTdvalue").text(_firsttd7);
				break;
			case 'bookspace8':
				let _firsttd8 = $(this).closest('tr').children('td:first').text();;
				console.log(_firsttd8);
				$("#firstTdvalue").text(_firsttd8);
				break;
		}
	});
});

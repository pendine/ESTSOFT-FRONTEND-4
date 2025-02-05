// 로딩 하자마자
// 데이터 불러오기 요청을 진행

//데이터 로딩은 비동기로 처리
// todo.js 코드를 -> promise or async를 사용해서 변경
// $(document).ready(function () { // todo.js 호출되자마자 실행
// 	$.ajax('/list', {
// 		'success': function (list) {
// 			var trs = '';

// 			list = JSON.parse(list).list;

// 			for(var i = 0, len = list.length; i < len; i++) {	// 테이블 내용 만들기
// 				trs += '<tr>' + 
// 							'<td>' + (i + 1) + '</td>' + 
// 							'<td>' + list[i].contents + '</td>' + 
// 							'<td><button type="button" class="btn btn-success">완료</button></td>' + 
// 							'<td><button type="button" class="btn btn-danger">삭제</button></td>' + 
// 						'</tr>';
// 			}

// 			$('tbody').html(trs);
// 		}
// 	});
// });


//try
// document.addEventListener( "DOMContentLoaded" , async () => {

// 	let listRespsone = await fetch( '/list' ).then( res => {return res.json()});
// 	let list = listRespsone.list;

// 	let trs = '';

// 	for(var i = 0, len = list.length; i < len; i++) {
// 		trs += '<tr>' + 
// 							'<td>' + (i + 1) + '</td>' + 
// 							'<td>' + list[i].contents + '</td>' + 
// 							'<td><button type="button" class="btn btn-success">완료</button></td>' + 
// 							'<td><button type="button" class="btn btn-danger">삭제</button></td>' + 
// 						'</tr>';
// 	}

// 	$('tbody').html(trs);

// })

// -----------------------------------------------------------
//answer
document.addEventListener( "DOMContentLoaded" , async () => {
	const response = await fetch( '/list' );

	if(!response.ok){
		throw new Error("리스트 호출 실패");
	}

	const data = await response.json();
	const list = data.list;
	let trs = '';

	for(var i = 0, len = list.length; i < len; i++) {
	trs += '<tr>' + 
							'<td>' + (i + 1) + '</td>' + 
							'<td>' + list[i].contents + '</td>' + 
							'<td><button type="button" class="btn btn-success">완료</button></td>' + 
							'<td><button type="button" class="btn btn-danger">삭제</button></td>' + 
						'</tr>';
	}

	document.querySelector('tbody').innerHTML= trs;

})
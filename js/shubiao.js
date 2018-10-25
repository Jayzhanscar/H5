// var a_idx = 0;
// jQuery(document).ready(function($) {
//     $("body").click(function(e) {
//         var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善");
//         var $i = $("<span/>").text(a[a_idx]);
//         a_idx = (a_idx + 1) % a.length;
//         var x = e.pageX,
//             y = e.pageY;
//         $i.css({
//             "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
//             "top": y - 20,
//             "left": x,
//             "position": "absolute",
//             "font-weight": "bold",
//             "color": "#ff6651"
//         });
//         $("body").append($i);
//         $i.animate({
//                 "top": y - 180,
//                 "opacity": 0
//             },
//             1500,
//             function() {
//                 $i.remove();
//             });
//     });
// });

$(function(){	var height=$(window).width();	$('#test').css({		'height':height,	});	var n=1;	$('#test').click(function(e){		if(n%2==0){			var $i=$('<b style="color: royalblue"></b>').text('❤');
//双数显示这个
		}else{			var $i=$('<b></b>').text('❤');	}		n++;		var x=e.pageX,y=e.pageY;$i.css({				"z-index": 9999,				"top": y - 20,				"left": x,				"position": "absolute",				"color": 'red',				"font-size": 14,			});			$("body").append($i);			$i.animate({				"top": y - 180,				"opacity": 0			}, 1500, function() {				$i.remove();			});	});});


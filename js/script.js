$(document).ready(function() {
   
	
	    $(function() {
			var _center = {
				width:43+"vw",
				height:50+"vw",
				marginLeft: 22+"vw",
				marginTop: 0,
				marginRight: 22+"vw"
			};
			var _left = {
				width: 18+"vw",
				height: 23+"vw",
				marginLeft: 8+"vw",
				marginTop: 13+"vw",
				marginRight: -22+"vw"
			};
			var _right = {
				width: 18+"vw",
				height: 23+"vw",
				marginLeft: -22+"vw",
				marginTop: 13+"vw",
				marginRight: 0
			};
			var _outLeft = {
				width: 150,
				height: 100,
				marginLeft: 150,
				marginTop: 20+"vw",
				marginRight: -200
			};
			var _outRight = {
				width: 150,
				height: 100,
				marginLeft: -200,
				marginTop: 20+"vw",
				marginRight: 50
			};
			$('#carousel').carouFredSel({
				pagination: {
					container: '#pager',
					duration: 300
				},
				prev: '#prev',
				next: '#next',
				width: 100+"%",
				height: 46+"vw",
				align: false,
				auto:false,
					items: {
					visible: 3,
					width: 100
				},
				scroll: {
					items: 1,
					duration: 400,
					onBefore: function( data ) {
						data.items.old.eq( 0 ).animate(_outLeft);
						data.items.visible.eq( 0 ).animate(_left);
						data.items.visible.eq( 1 ).animate(_center);
						data.items.visible.eq( 2 ).animate(_right).css({ zIndex: 1 });
						data.items.visible.eq( 2 ).next().css(_outRight).css({ zIndex: 0 });
		 
						setTimeout(function() {
							data.items.old.eq( 0 ).css({ zIndex: 1 });
							data.items.visible.eq( 0 ).css({ zIndex: 2 });
							data.items.visible.eq( 1 ).css({ zIndex: 3 });
							data.items.visible.eq( 2 ).css({ zIndex: 2 });
						}, 200);
					}
				}
				
	
			});
			$('#carousel').children().eq( 0 ).css(_left).css({ zIndex: 2 });
			$('#carousel').children().eq( 1 ).css(_center).css({ zIndex: 3 });
			$('#carousel').children().eq( 2 ).css(_right).css({ zIndex: 2 });
			$('#carousel').children().eq( 3 ).css(_outRight).css({ zIndex: 1 });
		});



});


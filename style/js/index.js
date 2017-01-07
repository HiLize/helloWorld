	function sidebarClick(e) {
		var sideinfo = document.getElementById('sideinfo')
		var content = document.getElementById('content')
		// console.log(sideinfo.style.left, '平滑过渡收起')
		
		if (sideinfo.style.left !== '-20%') {
			sideinfo.style.left = '-20%'
			content.style.left = '-20%'
		} else {
			sideinfo.style.left = '0'
			content.style.left = '0'
		}
	}
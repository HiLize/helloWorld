	var isTrue = true
	function sideinfoStyle(e) {
		var sideinfo = document.getElementById('sideinfo')
		var content = document.getElementById('content')
		
		if (isTrue) {
			sideinfo.style.transform = 'translate3D(-20%, 0px, 0px)'
			content.style.width = '95%'
			isTrue=false
		} else {
			sideinfo.style.transform = 'translate3D(0px, 0px, 0px)'
			content.style.width = '75%'
			isTrue=true
		}
		sideinfo.style.transition = 'all 1s'
		content.style.transition = 'all 1s'
	}
	function sidebarClick(e) {
		console.log(e.getElementsByTagName("i")[0].className,'clicke')
		var sideinfo = document.getElementById('sideinfo')
		sideinfo.innerText = e.id
	}
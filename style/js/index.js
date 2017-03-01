	var isTrue = true
	function sideinfoStyle(e) {
		var sidebar = document.getElementById('sidebar')
		var sideinfo = document.getElementById('sideinfo')
		var content = document.getElementById('content')
		
		if (isTrue) {
			sideinfo.style.transform = 'translate3D(-100%, 0px, 0px)'
			content.style.width = '95%'
			isTrue=false
			sidebar.style.boxShadow = 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px'
			sideinfo.style.boxShadow = 'none'
		} else {
			sideinfo.style.transform = 'translate3D(0px, 0px, 0px)'
			content.style.width = '75%'
			isTrue=true
			sidebar.style.boxShadow = 'none'
			sideinfo.style.boxShadow = 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px'
		}
		sideinfo.style.transition = 'all 1s'
		content.style.transition = 'all 1s'
	}
	function sidebarClick(e) {
		console.log(e.getElementsByTagName("i")[0].className,'clicke')
		var sideinfoH3 = document.getElementById('sideinfo').children[0]
		sideinfoH3.innerText = e.id
	}
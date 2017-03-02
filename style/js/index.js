/// shideinfo 收起展开效果
	var isTrue = true
	function sideinfoStyle(e) {
		var sidebar = document.getElementById('sidebar')
		var sideinfo = document.getElementById('sideinfo')
		var content = document.getElementById('content')
		var verticalHr = document.getElementById('verticalHr')
		if (isTrue) {
			sideinfo.style.transform = 'translate3D(-100%, 0px, 0px)'
			content.style.width = '95%'
			isTrue=false
			sidebar.style.boxShadow = 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px'
			sideinfo.style.boxShadow = 'none'
			verticalHr.style.display='none'
		} else {
			sideinfo.style.transform = 'translate3D(0px, 0px, 0px)'
			content.style.width = '77%'
			isTrue=true
			sidebar.style.boxShadow = 'none'
			sideinfo.style.boxShadow = 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px'
			verticalHr.style.display='block'
		}
		sideinfo.style.transition = 'all 1s'
		content.style.transition = 'all 1s'
		sidebarClick(e)
	}
/// sidebar 各图标点击事件
	function sidebarClick(e) {
		var sideinfo = document.getElementById('sideinfo')
		
		var content = e.id
		switch (e.id) {
			case 'personalIcon':
				console.log('personalIcon')
			break;
			case 'search':
				content = searchInfo()
			break;
			case 'recentlyList':
				console.log('recentlyList')
			break;
			case 'percenList':
				console.log('percenList')
			break;
			case 'groupList':
				console.log('groupList')
			break;
			default:
			break;
		}
		sideinfo.innerHTML = content
	}
/// icon angle right 鼠标经过事件
	function userMouseOver(e) {
		var angleRight = document.getElementById('angleRight')
		angleRight.style.display = 'block'
	}
	function userMouseOut(e) {
		var angleRight = document.getElementById('angleRight')
		angleRight.style.display = 'none'
	}
/// search 的html生成
	function searchInfo () {
		var content = `<div>
			<input id='search' defaultvalue='search you question' class='inputStyle' />
			<button class='buttonStyle'><i class="fa fa-search"></i></button>
			</div>`
		return content
	}
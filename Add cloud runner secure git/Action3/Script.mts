
Browser("Login -").Page("Workspaces - Core Software").WebButton("More").Click
Browser("Login -").Page("Workspaces - Core Software").WebButton("Cloud Runner").Click
Browser("Login -").Page("Workspaces - Core Software").WebList("WebList").Click
Browser("Login -").Page("Workspaces - Core Software").WebEdit("WebEdit").Set Parameter("Runner_name")
Browser("Login -").Page("Workspaces - Core Software").WebCheckBox("UFT").Set "ON"
Browser("Login -").Page("Workspaces - Core Software").WebEdit("WebEdit_2").Set "https://github.com/ftegit/uftscript.git"
Browser("Login -").Page("Workspaces - Core Software").WebEdit("WebEdit_3").Set "ftegit"
Browser("Login -").Page("Workspaces - Core Software").WebEdit("WebEdit_4").SetSecure "676ac220601a41f96b7f8b13d22b3897321b4b89908d07610b5152b8488771d924d0f5a6a9916e12ec4cc43fad70f64a42ed7c466378fea71758e6b921bd8e0f39a0ce5cdbe22ee326dfc9da01fff88586a4b6082ac3"
Browser("Login -").Page("Workspaces - Core Software").WebButton("Test Connection").Click
wait 5
Browser("Login -").Page("Workspaces - Core Software").WebButton("Save").Click
Browser("Login -").Page("Workspaces - Core Software").WebButton("Test Connection").Click

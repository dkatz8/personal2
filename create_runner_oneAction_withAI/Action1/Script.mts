Browser("Login -").Page("Login -").Sync
Browser("Login -").Navigate "https://integration-branch-prod.almoctane.com/ui/?admin&p=21001/1002#/settings/workspace/devops/executors" @@ script infofile_;_ZIP::ssf23.xml_;_
Browser("Login -").Page("Login -").WebEdit("federateLoginName").Set "mqm_rnd@hpe.com" @@ script infofile_;_ZIP::ssf24.xml_;_
Browser("Login -").Page("Login -").WebButton("CONTINUE").Click @@ script infofile_;_ZIP::ssf27.xml_;_
Browser("Login -").Page("Login - MyAccount").WebEdit("password").SetSecure "676ac18a2063604b2fd15195399420fc6a9fba33b99ffc68eddb6eec3ee96477b9d4" @@ script infofile_;_ZIP::ssf28.xml_;_
Browser("Login -").Page("Login - MyAccount").WebButton("SIGN IN").Click @@ script infofile_;_ZIP::ssf29.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("OK").Click
Browser("Login -").Page("Workspaces - Core Software").WebButton("Add Workspace").Click @@ script infofile_;_ZIP::ssf33.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Name").Set "dudu_automation_A" @@ script infofile_;_ZIP::ssf34.xml_;_
AIUtil.FindTextBlock("Add").Click @@ script infofile_;_ZIP::ssf35.xml_;_
Wait 15
Browser("Login -").Page("Workspaces - Core Software").WebCheckBox("dudu_automation_A").Set "ON" @@ script infofile_;_ZIP::ssf47.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("WebButton").Click
Wait 15
Browser("Login -").Page("Workspaces - Core Software").WebButton("More").Click @@ script infofile_;_ZIP::ssf36.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("Cloud Runner").Click @@ script infofile_;_ZIP::ssf37.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebList("WebList").Click @@ script infofile_;_ZIP::ssf38.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("WebEdit").Set Parameter("Runner_name") @@ script infofile_;_ZIP::ssf39.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebCheckBox("UFT").Set "ON" @@ script infofile_;_ZIP::ssf40.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("WebEdit_2").Set "https://github.com/ftegit/uftscript.git" @@ script infofile_;_ZIP::ssf41.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("WebEdit_3").Set "ftegit" @@ script infofile_;_ZIP::ssf42.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("WebEdit_4").SetSecure "676ac220601a41f96b7f8b13d22b3897321b4b89908d07610b5152b8488771d924d0f5a6a9916e12ec4cc43fad70f64a42ed7c466378fea71758e6b921bd8e0f39a0ce5cdbe22ee326dfc9da01fff88586a4b6082ac3" @@ script infofile_;_ZIP::ssf43.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("Test Connection").Click @@ script infofile_;_ZIP::ssf44.xml_;_
wait 5 @@ script infofile_;_ZIP::ssf46.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("Test Connection").Click @@ script infofile_;_ZIP::ssf45.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("Save").Click




 @@ script infofile_;_ZIP::ssf2.xml_;_

 @@ script infofile_;_ZIP::ssf7.xml_;_



 @@ script infofile_;_ZIP::ssf48.xml_;_

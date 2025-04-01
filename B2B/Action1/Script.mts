Browser("Login -").Page("Login -").Sync
Browser("Login -").Navigate "https://integration-master-dev.almoctane.com/ui/?p=1001%2F1002&site=#/site-admin/site-admin-shared-spaces" @@ hightlight id_;_6297698_;_script infofile_;_ZIP::ssf1.xml_;_
wait 5 @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Login -").Page("Login -").WebEdit("federateLoginName").Set "MFI-adm.rd.mqm.devops@opentext.com" @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Login -").Page("Login -").WebButton("CONTINUE").Click @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Login -").Page("Login -").WebEdit("password").SetSecure "677699004dff5bd2993ab66f661da1fcb37a02e686d26f5ac296abc7710b9bc77686" @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Login -").Page("Login -").WebButton("SIGN IN").Click @@ script infofile_;_ZIP::ssf10.xml_;_
wait 5 @@ script infofile_;_ZIP::ssf35.xml_;_
Browser("Login -").Page("Site Admin - Spaces -").WebElement("FTE_020125_Jok_266613753").Click @@ script infofile_;_ZIP::ssf87.xml_;_
wait 5 @@ script infofile_;_ZIP::ssf75.xml_;_
Browser("Login -").Page("Site Admin - Spaces -").WebButton("Deactivate Space").Click @@ script infofile_;_ZIP::ssf88.xml_;_
Browser("Login -").Page("Site Admin - Spaces -").WebButton("OK").Click @@ script infofile_;_ZIP::ssf89.xml_;_
wait 5 @@ script infofile_;_ZIP::ssf75.xml_;_
Browser("Login -").Page("Site Admin - Spaces -").WebElement("Design nightly tenant").Click @@ script infofile_;_ZIP::ssf90.xml_;_
wait 5 @@ script infofile_;_ZIP::ssf75.xml_;_
Browser("Login -").Page("Site Admin - Spaces -").WebButton("Deactivate Space").Click @@ script infofile_;_ZIP::ssf91.xml_;_
Browser("Login -").Page("Site Admin - Spaces -").WebButton("OK").Click @@ script infofile_;_ZIP::ssf92.xml_;_
wait 5 @@ script infofile_;_ZIP::ssf75.xml_;_
Browser("Login -").Page("Site Admin - Spaces -").WebElement("FTE_020125_uNr_862401392").Click @@ script infofile_;_ZIP::ssf93.xml_;_
Browser("Login -").Page("Site Admin - Spaces -").WebButton("Deactivate Space").Click @@ script infofile_;_ZIP::ssf94.xml_;_
wait 5 @@ script infofile_;_ZIP::ssf75.xml_;_
Browser("Login -").Page("Site Admin - Spaces -").WebButton("OK").Click @@ script infofile_;_ZIP::ssf95.xml_;_
Browser("Login -").Page("Site Admin - Spaces -").WebElement("FTE_020125_Jok_266613753").Click @@ script infofile_;_ZIP::ssf76.xml_;_
Browser("Login -").Page("Site Admin - Spaces -").WebButton("Activate Space").Click @@ script infofile_;_ZIP::ssf77.xml_;_
wait 5 @@ script infofile_;_ZIP::ssf75.xml_;_
Browser("Login -").Page("Site Admin - Spaces -").WebButton("OK").Click @@ script infofile_;_ZIP::ssf78.xml_;_
wait 5 @@ script infofile_;_ZIP::ssf75.xml_;_
Browser("Login -").Page("Site Admin - Spaces -").WebButton("Go to Space_2").Click @@ script infofile_;_ZIP::ssf79.xml_;_
Browser("Browser").Page("Workspaces - Core Software").Sync
Browser("Browser").Close @@ hightlight id_;_6297698_;_script infofile_;_ZIP::ssf80.xml_;_
Browser("Login -").Page("Site Admin - Spaces -").WebElement("FTE_020125_uNr_862401392").Click @@ script infofile_;_ZIP::ssf81.xml_;_
Browser("Login -").Page("Site Admin - Spaces -").WebButton("Activate Space").Click @@ script infofile_;_ZIP::ssf82.xml_;_
Browser("Login -").Page("Site Admin - Spaces -").WebButton("OK").Click @@ script infofile_;_ZIP::ssf83.xml_;_
Browser("Login -").Page("Site Admin - Spaces -").WebButton("Go to Space_2").Click @@ script infofile_;_ZIP::ssf84.xml_;_
wait 5 @@ script infofile_;_ZIP::ssf75.xml_;_
Browser("Browser").Page("Workspaces - Core Software").Sync
Browser("Browser").Close @@ hightlight id_;_6297698_;_script infofile_;_ZIP::ssf85.xml_;_
Browser("Login -").Page("Site Admin - Spaces -").WebElement("Design nightly tenant").Click @@ script infofile_;_ZIP::ssf86.xml_;_

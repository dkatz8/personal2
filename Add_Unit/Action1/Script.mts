﻿Browser("Login -").Page("Login -").Sync
Browser("Login -").Navigate "https://integration-branch-prod.almoctane.com/ui/?p=21003/1002#/mbt-designer/hierarchy/models" @@ hightlight id_;_986284_;_script infofile_;_ZIP::ssf11.xml_;_
Browser("Login -").Page("Login -").WebEdit("federateLoginName").Set Parameter("User_name")
Browser("Login -").Page("Login -").WebButton("CONTINUE").Click @@ script infofile_;_ZIP::ssf44.xml_;_
Browser("Login -_2").Page("Login -").WebEdit("password").Set Parameter("Password")
Browser("Login -").Page("Login -").WebButton("SIGN IN").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Login -").Page("Functional Testing Model-Based").WebTabStrip("Details Models Units").Select "Units" @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Login -").Page("Functional Testing Model-Based").WebButton("Unit").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Login -").Page("Functional Testing Model-Based").WebEdit("Name").Set "Unit 1" @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Login -").Page("Functional Testing Model-Based").WebButton("Add      Add").Click @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Login -").Page("Functional Testing Model-Based").Image("user avatar").Click @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Login -").Page("Functional Testing Model-Based").WebButton("Sign out").Click @@ script infofile_;_ZIP::ssf10.xml_;_
 @@ script infofile_;_ZIP::ssf39.xml_;_

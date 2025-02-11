Browser("Login -").Page("Login -").Sync
Browser("Login -").Navigate "https://integration-branch-prod.almoctane.com/ui/?admin&p=21001/1002#/settings/workspace/devops/executors" @@ script infofile_;_ZIP::ssf23.xml_;_
Browser("Login -").Page("Login -").WebEdit("federateLoginName").Set "mqm_rnd@hpe.com" @@ script infofile_;_ZIP::ssf24.xml_;_
Browser("Login -").Page("Login -").WebButton("CONTINUE").Click @@ script infofile_;_ZIP::ssf27.xml_;_
Browser("Login -").Page("Login - MyAccount").WebEdit("password").SetSecure "676ac18a2063604b2fd15195399420fc6a9fba33b99ffc68eddb6eec3ee96477b9d4" @@ script infofile_;_ZIP::ssf28.xml_;_
Browser("Login -").Page("Login - MyAccount").WebButton("SIGN IN").Click @@ script infofile_;_ZIP::ssf29.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("OK").Click




 @@ script infofile_;_ZIP::ssf48.xml_;_

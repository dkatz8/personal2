Browser("Login -").Page("Workspaces - Core Software").Sync
Browser("Login -").Navigate "https://integration-branch-prod.almoctane.com/ui/?admin&p=21001/4001#/settings/workspace/users"
wait 30
Browser("Login -").Page("Login - MyAccount").WebEdit("federateLoginName").Set "MFI-adm.rd.mqm.devops@opentext.com"
Browser("Login -").Page("Login - MyAccount").WebElement("Submit your email address").Click
Browser("Login -").Page("Login - MyAccount").WebButton("CONTINUE").Click
Browser("Login -").Page("Login - MyAccount").WebEdit("password").SetSecure "67a359a4703ea9ddba64eecaf33f06f369c14e430e1b078af08887f596572dec2a6a"
Browser("Login -").Page("Login - MyAccount").WebButton("SIGN IN").Click

